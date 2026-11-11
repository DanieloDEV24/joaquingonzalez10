import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'motion/react'

import img1 from '../assets/images/galeria/img-galeria1.webp'
import img2 from '../assets/images/galeria/img-galeria2.webp'
import img3 from '../assets/images/galeria/img-galeria3.webp'
import img4 from '../assets/images/galeria/img-galeria4.webp'
import img5 from '../assets/images/galeria/img-galeria5.webp'
import img6 from '../assets/images/galeria/img-galeria6.webp'
import img7 from '../assets/images/galeria/img-galeria7.webp'
import img8 from '../assets/images/galeria/img-galeria8.webp'
import img9 from '../assets/images/galeria/img-galeria9.webp'
import img10 from '../assets/images/galeria/img-galeria10.webp'
import img11 from '../assets/images/galeria/img-galeria11.webp'
import img12 from '../assets/images/galeria/img-galeria12.webp'
import img13 from '../assets/images/galeria/img-galeria13.webp'
import img14 from '../assets/images/galeria/img-galeria14.webp'
import img15 from '../assets/images/galeria/img-galeria15.webp'
import img16 from '../assets/images/galeria/img-galeria16.webp'
import img17 from '../assets/images/galeria/img-galeria17.webp'
import img18 from '../assets/images/galeria/img-galeria18.webp'
import img19 from '../assets/images/galeria/img-galeria19.webp'
import img20 from '../assets/images/galeria/img-galeria20.webp'
import img21 from '../assets/images/galeria/img-galeria21.webp'
import img22 from '../assets/images/galeria/img-galeria22.webp'
import img23 from '../assets/images/galeria/img-galeria23.webp'
import img24 from '../assets/images/galeria/img-galeria24.webp'
import img25 from '../assets/images/galeria/img-galeria25.webp'
import img26 from '../assets/images/galeria/img-galeria26.webp'
import img27 from '../assets/images/galeria/img-galeria27.webp'
import img28 from '../assets/images/galeria/img-galeria28.webp'
import img29 from '../assets/images/galeria/img-galeria29.webp'
import img30 from '../assets/images/galeria/img-galeria30.webp'
import img31 from '../assets/images/galeria/img-galeria31.webp'
import img32 from '../assets/images/galeria/img-galeria32.webp'
import img33 from '../assets/images/galeria/img-galeria33.webp'
import img34 from '../assets/images/galeria/img-galeria34.webp'
import img35 from '../assets/images/galeria/img-galeria35.webp'
import img36 from '../assets/images/galeria/img-galeria36.webp'
import img37 from '../assets/images/galeria/img-galeria37.webp'
import img38 from '../assets/images/galeria/img-galeria38.webp'
import img39 from '../assets/images/galeria/img-galeria39.webp'
import img40 from '../assets/images/galeria/img-galeria40.webp'
import img41 from '../assets/images/galeria/img-galeria41.webp'
import img42 from '../assets/images/galeria/img-galeria42.webp'
import img43 from '../assets/images/galeria/img-galeria43.webp'
import img44 from '../assets/images/galeria/img-galeria44.webp'
import img45 from '../assets/images/galeria/img-galeria45.webp'
import img46 from '../assets/images/galeria/img-galeria46.webp'
import img47 from '../assets/images/galeria/img-galeria47.webp'
import img48 from '../assets/images/galeria/img-galeria48.webp'
import img49 from '../assets/images/galeria/img-galeria49.webp'
import img50 from '../assets/images/galeria/img-galeria50.webp'
import img51 from '../assets/images/galeria/img-galeria51.webp'
import img52 from '../assets/images/galeria/img-galeria52.webp'

import video1 from '../assets/images/galeria/video-galeria1.mp4'
import video2 from '../assets/images/galeria/video-galeria2.mp4'
import video3 from '../assets/images/galeria/video-galeria3.mp4'
import video4 from '../assets/images/galeria/video-galeria4.mp4'
import video5 from '../assets/images/galeria/video-galeria5.mp4'
import video6 from '../assets/images/galeria/video-galeria6.mp4'
import video7 from '../assets/images/galeria/video-galeria7.mp4'
import video8 from '../assets/images/galeria/video-galeria8.mp4'
import video9 from '../assets/images/galeria/video-galeria9.mp4'
import video10 from '../assets/images/galeria/video-galeria10.mp4'
import video11 from '../assets/images/galeria/video-galeria11.mp4'
import video12 from '../assets/images/galeria/video-galeria12.mp4'
import video13 from '../assets/images/galeria/video-galeria13.mp4'
import video14 from '../assets/images/galeria/video-galeria14.mp4'

/* ---------- Datos ---------- */

type Item = { tipo: 'foto' | 'video'; src: string }

/**
 * Todas las fotos de la galería.
 */
const imagenes: string[] = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
    img51, img52,
]

/**
 * Todos los vídeos de la galería.
 */
const videos: string[] = [
    video1, video2, video3, video4, video5, video6, video7,
    video8, video9, video10, video11, video12, video13, video14,
]

/**
 * Fisher-Yates: devuelve una copia desordenada de la lista.
 */
const desordenar = <T,>(lista: T[]): T[] => {
    const copia = [...lista]
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[copia[i], copia[j]] = [copia[j], copia[i]]
    }
    return copia
}

/**
 * Mezcla fotos y vídeos desordenados, con un vídeo cada 4 fotos.
 * Los vídeos que sobren se añaden al final.
 */
const construirItems = (): Item[] => {
    const fotos = desordenar(imagenes)
    const clips = desordenar(videos)
    const items: Item[] = []
    let v = 0
    fotos.forEach((src, i) => {
        items.push({ tipo: 'foto', src })
        if ((i + 1) % 4 === 0 && v < clips.length) {
            items.push({ tipo: 'video', src: clips[v++] })
        }
    })
    while (v < clips.length) items.push({ tipo: 'video', src: clips[v++] })
    return items
}

/**
 * Lista final de elementos (se calcula una sola vez al cargar el módulo).
 */
const items = construirItems()

/* ---------- Animación ---------- */

/**
 * Viewport del encabezado: se anima una sola vez, cuando el 25 % del bloque es visible.
 */
const viewport = { once: true, amount: 0.25 }

/**
 * Viewport de cada elemento de la galería: umbral bajo porque hay muchos
 * elementos y cada uno se anima de forma independiente al llegar a pantalla.
 */
const viewportItem = { once: true, amount: 0.1 }

/**
 * Elemento hijo: fade + subida corta.
 */
const aparecer: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

/* ---------- Orientación ---------- */

type Orientacion = 'horizontal' | 'vertical'

/**
 * Clasifica según las medidas. Solo dos tamaños: las cuadradas cuentan como horizontales.
 */
const clasificar = (w: number, h: number): Orientacion =>
    w >= h ? 'horizontal' : 'vertical'

/* ---------- Vídeo ---------- */

type VideoItemProps = {
    src: string
    onMedida: (w: number, h: number) => void
    onAbrir: () => void
}

/**
 * VideoItem
 * Miniatura del vídeo con botón de play superpuesto.
 * No se reproduce en la rejilla: el clic abre el visor ampliado.
 * Avisa de sus medidas para clasificar la orientación.
 */
const VideoItem = ({ src, onMedida, onAbrir }: VideoItemProps) => (
    <>
        <video
            src={src}
            preload="metadata"
            playsInline
            muted
            onClick={onAbrir}
            onLoadedMetadata={(e) =>
                onMedida(e.currentTarget.videoWidth, e.currentTarget.videoHeight)
            }
        />
        {/* Botón de play: abre el vídeo en el visor (accesible con teclado) */}
        <button className="galeria__play" onClick={onAbrir} aria-label="Reproducir vídeo">
            <svg viewBox="0 0 24 24" width="22" height="22">
                {/* Triángulo de play */}
                <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
        </button>
    </>
)

/* ---------- Visor ampliado ---------- */

type VisorProps = {
    elementos: Item[]
    indice: number
    onCerrar: () => void
    onCambiar: (nuevo: number) => void
}

/**
 * Visor
 * Muestra la foto o el vídeo seleccionado a pantalla completa.
 * Se cierra con clic en el fondo, con el botón ✕ o con Esc,
 * y se navega con los botones o con las flechas del teclado.
 * Los vídeos arrancan solos y llevan controles propios.
 */
const Visor = ({ elementos, indice, onCerrar, onCambiar }: VisorProps) => {
    const total = elementos.length
    const actual = elementos[indice]
    const reducir = useReducedMotion()
    const botonCerrar = useRef<HTMLButtonElement>(null)

    // Siguiente / anterior con vuelta al principio/final
    const siguiente = () => onCambiar((indice + 1) % total)
    const anterior = () => onCambiar((indice - 1 + total) % total)

    // Atajos de teclado y bloqueo del scroll mientras el visor está abierto
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onCerrar()
            if (e.key === 'ArrowRight') siguiente()
            if (e.key === 'ArrowLeft') anterior()
        }
        window.addEventListener('keydown', onKey)
        document.body.style.overflow = 'hidden'

        // Limpieza al cerrar o desmontar
        return () => {
            window.removeEventListener('keydown', onKey)
            document.body.style.overflow = ''
        }
    })

    // Foco inicial en el botón de cerrar (accesibilidad con teclado)
    useEffect(() => {
        botonCerrar.current?.focus()
    }, [])

    return (
        // Fondo oscuro: el clic aquí cierra el visor
        <motion.div
            className="visor"
            role="dialog"
            aria-modal="true"
            aria-label="Visor de fotos y vídeos"
            onClick={onCerrar}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducir ? 0 : 0.25 }}
        >
            {/* Botón de cerrar */}
            <button
                ref={botonCerrar}
                className="visor__cerrar"
                onClick={onCerrar}
                aria-label="Cerrar"
            >
                <svg viewBox="0 0 24 24" width="28" height="28">
                    {/* Aspa: dos diagonales que se cruzan */}
                    <path
                        d="M6 6l12 12M18 6L6 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>

            {/* Flecha anterior (stopPropagation evita cerrar el visor) */}
            <button
                className="visor__flecha visor__flecha--izq"
                onClick={(e) => {
                    e.stopPropagation()
                    anterior()
                }}
                aria-label="Anterior"
            >
                <svg viewBox="0 0 24 24" width="36" height="36">
                    {/* Chevron apuntando a la izquierda */}
                    <path
                        d="M15 5l-7 7 7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* Contenido ampliado: foto o vídeo (stopPropagation: clic encima no cierra) */}
            {actual.tipo === 'foto' ? (
                <img
                    key={actual.src}
                    className="visor__img"
                    src={actual.src}
                    alt={`Foto ${indice + 1} de ${total}`}
                    onClick={(e) => e.stopPropagation()}
                />
            ) : (
                <video
                    key={actual.src}
                    className="visor__img"
                    src={actual.src}
                    controls
                    autoPlay
                    loop
                    playsInline
                    onClick={(e) => e.stopPropagation()}
                />
            )}

            {/* Flecha siguiente */}
            <button
                className="visor__flecha visor__flecha--der"
                onClick={(e) => {
                    e.stopPropagation()
                    siguiente()
                }}
                aria-label="Siguiente"
            >
                <svg viewBox="0 0 24 24" width="36" height="36">
                    {/* Chevron apuntando a la derecha */}
                    <path
                        d="M9 5l7 7-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* Contador "3 / 66" */}
            <span className="visor__contador">
                {indice + 1} / {total}
            </span>
        </motion.div>
    )
}

/* ---------- Elemento de la galería ---------- */

type GaleriaItemProps = {
    item: Item
    indice: number
    inicial: 'hidden' | 'show'
    onAbrir: (src: string) => void
}

/**
 * GaleriaItem
 * Cada elemento se anima por su cuenta al entrar en pantalla,
 * así no hay que esperar a una cascada de decenas de elementos.
 * Fotos y vídeos se amplían con clic (o Enter/Espacio con el teclado).
 */
const GaleriaItem = ({ item, indice, inicial, onAbrir }: GaleriaItemProps) => {
    const [orientacion, setOrientacion] = useState<Orientacion>('horizontal')
    const medir = (w: number, h: number) => setOrientacion(clasificar(w, h))

    return (
        <motion.li
            className={`galeria__item galeria__item--${orientacion}`}
            variants={aparecer}
            initial={inicial}
            whileInView="show"
            viewport={viewportItem}
        >
            {item.tipo === 'foto' ? (
                <img
                    src={item.src}
                    alt={`Foto de la galería ${indice + 1}`}
                    loading="lazy"
                    // Accesible como botón: clic, Enter o espacio abren el visor
                    role="button"
                    tabIndex={0}
                    onClick={() => onAbrir(item.src)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault()
                            onAbrir(item.src)
                        }
                    }}
                    onLoad={(e) =>
                        medir(e.currentTarget.naturalWidth, e.currentTarget.naturalHeight)
                    }
                />
            ) : (
                <VideoItem src={item.src} onMedida={medir} onAbrir={() => onAbrir(item.src)} />
            )}
        </motion.li>
    )
}

/* ---------- Componente principal ---------- */

type Filtro = 'foto' | 'video' | null

/**
 * Galeria
 * Sección "Galería": encabezado, filtros y rejilla de fotos y vídeos.
 * Cada bloque se anima al entrar en pantalla. Respeta prefers-reduced-motion.
 * Al hacer clic en una foto o vídeo se abre el visor ampliado.
 */
export const Galeria = () => {
    const [filtro, setFiltro] = useState<Filtro>(null)

    // Elemento abierto en el visor (guardamos el src; null = visor cerrado)
    const [abierta, setAbierta] = useState<string | null>(null)

    // Si el usuario tiene animaciones reducidas, todo se muestra directamente
    const reducir = useReducedMotion()
    const inicial = reducir ? 'show' : 'hidden'

    // Pulsar el filtro activo lo desactiva y vuelve a mostrar todo
    const alternar = (nuevo: 'foto' | 'video') =>
        setFiltro((actual) => (actual === nuevo ? null : nuevo))

    const visibles = filtro ? items.filter((item) => item.tipo === filtro) : items

    // El visor navega por todo lo que se ve en la rejilla (fotos y vídeos)
    const indiceAbierto = abierta ? visibles.findIndex((item) => item.src === abierta) : -1

    return (
        <section className="galeria">
            {/* Etiqueta, título y descripción */}
            <motion.small
                variants={aparecer}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                ★ GALERÍA.
            </motion.small>

            <motion.h2
                variants={aparecer}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                GALERÍA EN PISTA <span>& MAREA VERDE #10.</span>
            </motion.h2>

            <motion.p
                variants={aparecer}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                Barro, polvo y gas. Fotos y videos de entrenos y carreras vuelta a vuelta.
            </motion.p>

            <div className="galeria__wrap">
                {/* Filtros */}
                <motion.div
                    className="contenedor-filtro"
                    variants={aparecer}
                    initial={inicial}
                    whileInView="show"
                    viewport={viewport}
                >
                    <button
                        id="filtro-fotos"
                        className={filtro === 'foto' ? 'active' : ''}
                        aria-pressed={filtro === 'foto'}
                        onClick={() => alternar('foto')}
                    >
                        Fotos
                    </button>
                    <button
                        id="filtro-videos"
                        className={filtro === 'video' ? 'active' : ''}
                        aria-pressed={filtro === 'video'}
                        onClick={() => alternar('video')}
                    >
                        Vídeos
                    </button>
                </motion.div>

                {/* Rejilla: cada elemento aparece al llegar a pantalla */}
                <ul className="galeria__grid">
                    {visibles.map((item, i) => (
                        <GaleriaItem
                            key={item.src}
                            item={item}
                            indice={i}
                            inicial={inicial}
                            onAbrir={setAbierta}
                        />
                    ))}
                </ul>
            </div>

            {/* Visor: AnimatePresence permite la animación de salida */}
            <AnimatePresence>
                {indiceAbierto >= 0 && (
                    <Visor
                        elementos={visibles}
                        indice={indiceAbierto}
                        onCerrar={() => setAbierta(null)}
                        onCambiar={(nuevo) => setAbierta(visibles[nuevo].src)}
                    />
                )}
            </AnimatePresence>
        </section>
    )
}