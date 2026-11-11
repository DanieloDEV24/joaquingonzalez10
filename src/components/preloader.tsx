import { useEffect, useRef, useState } from 'react'
import logo from '../../src/assets/images/logo.webp'
import '../preloader.css'

type Phase = 'loading' | 'redline' | 'exit' | 'gone'

interface PreloaderProps {
  /** Tiempo mínimo visible en ms. Con menos de ~2000 las marchas pasan muy rápido. */
  minDuration?: number
  /** true = solo se muestra la primera vez por sesión. */
  once?: boolean
  /** Pásalo en false si quieres esperar a tus propios datos/imágenes además de la carga de la página. */
  ready?: boolean
  /** Se llama cuando empieza a subir la cortina. */
  onDone?: () => void
}

const LEDS = 12
const MAX_GEAR = 5
const STORAGE_KEY = 'j10-preloader-seen'

/** progreso 0-100 -> marcha (0 = punto muerto) y fracción dentro de esa marcha */
function stage(v: number): { g: number; f: number } {
  if (v < 6) return { g: 0, f: v / 6 }
  const q = ((v - 6) / 94) * MAX_GEAR
  if (q >= MAX_GEAR) return { g: MAX_GEAR, f: 1 }
  return { g: Math.floor(q) + 1, f: q - Math.floor(q) }
}

export default function Preloader({
  minDuration = 2600,
  once = false,
  ready = true,
  onDone,
}: PreloaderProps) {
  const [phase, setPhase] = useState<Phase>(() =>
    once && sessionStorage.getItem(STORAGE_KEY) ? 'gone' : 'loading',
  )
  const [gear, setGear] = useState(0)

  const rootRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const lightsRef = useRef<HTMLDivElement>(null)

  // Valores que el bucle de animación necesita leer sin reiniciarse
  const readyRef = useRef(ready)
  const loadedRef = useRef(document.readyState === 'complete')
  const onDoneRef = useRef(onDone)

  // Los refs se actualizan en un efecto, nunca durante el render
  useEffect(() => {
    readyRef.current = ready
    onDoneRef.current = onDone
  }, [ready, onDone])

  useEffect(() => {
    const onLoad = () => (loadedRef.current = true)
    window.addEventListener('load', onLoad)
    const safety = window.setTimeout(() => (loadedRef.current = true), 9000)
    return () => {
      window.removeEventListener('load', onLoad)
      window.clearTimeout(safety)
    }
  }, [])

  useEffect(() => {
    if (phase === 'gone') return

    const html = document.documentElement
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timers: number[] = []
    html.classList.add('pl-lock')

    const start = performance.now()
    let p = 0
    let lastGear = 0
    let raf = 0

    const render = (now: number) => {
      const s = stage(p)
      let rev = s.g === 0 ? s.f * 0.4 : s.g === 1 ? s.f : 0.35 + 0.65 * s.f
      rev = Math.min(1, rev * (1 + 0.025 * Math.sin(now / 55))) // vibración del motor

      rootRef.current?.style.setProperty('--rev', rev.toFixed(3))

      if (!calm && logoRef.current) {
        const a = rev * rev * 2.2
        logoRef.current.style.transform = `translate(${((Math.random() - 0.5) * a).toFixed(2)}px, ${(
          (Math.random() - 0.5) * a
        ).toFixed(2)}px)`
      }

      const lit = Math.round(rev * LEDS)
      const leds = lightsRef.current?.children
      if (leds) {
        for (let i = 0; i < LEDS; i++) {
          leds[i].className = i < lit ? (i >= LEDS - 3 ? 'on hi' : 'on') : ''
        }
      }

      if (s.g !== lastGear) {
        lastGear = s.g
        setGear(s.g)
        const el = lightsRef.current
        if (el) {
          el.classList.add('flash')
          timers.push(window.setTimeout(() => el.classList.remove('flash'), 130))
        }
      }
    }

    const finish = () => {
      setPhase('redline')
      timers.push(
        window.setTimeout(() => {
          html.classList.remove('pl-lock')
          if (once) sessionStorage.setItem(STORAGE_KEY, '1')
          onDoneRef.current?.()
          setPhase('exit')
          timers.push(window.setTimeout(() => setPhase('gone'), 1000))
        }, 900),
      )
    }

    const tick = (now: number) => {
      const elapsed = now - start
      const canFinish = loadedRef.current && readyRef.current && elapsed > minDuration
      const target = canFinish ? 100 : Math.min(88, (elapsed / minDuration) * 88)
      p += (target - p) * 0.05
      render(now)
      if (canFinish && p > 99.5) {
        p = 100
        render(now)
        finish()
        return
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      timers.forEach(window.clearTimeout)
      html.classList.remove('pl-lock')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (phase === 'gone') return null

  const label =
    phase !== 'loading' ? 'Aquí no se frena: se acelera.' : gear === 0 ? 'Punto muerto' : 'Marcha'

  return (
    <div
      ref={rootRef}
      className={`preloader${phase === 'redline' ? ' redline' : ''}${phase === 'exit' ? ' is-done' : ''}`}
      role="status"
      aria-label="Cargando"
    >
      <div className="pl-inner" aria-hidden="true">
        <div ref={logoRef} className="pl-logo-wrap">
          {/* key={gear}: el logo da un golpe cada vez que cambia la marcha */}
          <div key={gear} className={gear > 0 ? 'pl-hit' : undefined}>
            <img className="pl-logo" src={logo} alt="" width={1254} height={750} decoding="sync" />
          </div>
        </div>

        <div className="pl-hud">
          <span key={gear} className={`pl-gear${gear > 0 ? ' shift' : ''}`}>
            {gear === 0 ? 'N' : gear}
            {gear > 0 && <sup>ª</sup>}
          </span>
          <div ref={lightsRef} className="pl-lights">
            {Array.from({ length: LEDS }, (_, i) => (
              <i key={i} />
            ))}
          </div>
        </div>
        <p className="pl-label">{label}</p>
      </div>
    </div>
  )
}