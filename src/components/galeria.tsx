import { useState, useRef } from 'react'

import img1 from '../assets/images/galeria/img-galeria1.jpeg'
import img2 from '../assets/images/galeria/img-galeria2.jpeg'
import img3 from '../assets/images/galeria/img-galeria3.jpeg'
import img4 from '../assets/images/galeria/img-galeria4.jpeg'
import img5 from '../assets/images/galeria/img-galeria5.jpeg'
import img6 from '../assets/images/galeria/img-galeria6.jpeg'
import img7 from '../assets/images/galeria/img-galeria7.jpeg'
import img8 from '../assets/images/galeria/img-galeria8.jpeg'
import img9 from '../assets/images/galeria/img-galeria9.jpeg'
import img10 from '../assets/images/galeria/img-galeria10.jpeg'
import img11 from '../assets/images/galeria/img-galeria11.jpeg'
import img12 from '../assets/images/galeria/img-galeria12.jpeg'
import img13 from '../assets/images/galeria/img-galeria13.jpeg'
import img14 from '../assets/images/galeria/img-galeria14.jpeg'
import img15 from '../assets/images/galeria/img-galeria15.jpeg'
import img16 from '../assets/images/galeria/img-galeria16.jpeg'
import img17 from '../assets/images/galeria/img-galeria17.jpeg'
import img18 from '../assets/images/galeria/img-galeria18.jpeg'
import img19 from '../assets/images/galeria/img-galeria19.jpeg'
import img20 from '../assets/images/galeria/img-galeria20.jpeg'
import img21 from '../assets/images/galeria/img-galeria21.jpeg'
import img22 from '../assets/images/galeria/img-galeria22.jpeg'
import img23 from '../assets/images/galeria/img-galeria23.jpeg'
import img24 from '../assets/images/galeria/img-galeria24.jpeg'
import img25 from '../assets/images/galeria/img-galeria25.jpeg'
import img26 from '../assets/images/galeria/img-galeria26.jpeg'
import img27 from '../assets/images/galeria/img-galeria27.jpeg'
import img28 from '../assets/images/galeria/img-galeria28.jpeg'
import img29 from '../assets/images/galeria/img-galeria29.jpeg'
import img30 from '../assets/images/galeria/img-galeria30.jpeg'
import img31 from '../assets/images/galeria/img-galeria31.jpeg'
import img32 from '../assets/images/galeria/img-galeria32.jpeg'
import img33 from '../assets/images/galeria/img-galeria33.jpeg'
import img34 from '../assets/images/galeria/img-galeria34.jpeg'
import img35 from '../assets/images/galeria/img-galeria35.jpeg'
import img36 from '../assets/images/galeria/img-galeria36.jpeg'
import img37 from '../assets/images/galeria/img-galeria37.jpeg'
import img38 from '../assets/images/galeria/img-galeria38.jpeg'
import img39 from '../assets/images/galeria/img-galeria39.jpeg'
import img40 from '../assets/images/galeria/img-galeria40.jpeg'
import img41 from '../assets/images/galeria/img-galeria41.jpeg'
import img42 from '../assets/images/galeria/img-galeria42.jpeg'
import img43 from '../assets/images/galeria/img-galeria43.jpeg'
import img44 from '../assets/images/galeria/img-galeria44.jpeg'
import img45 from '../assets/images/galeria/img-galeria45.jpeg'
import img46 from '../assets/images/galeria/img-galeria46.jpeg'
import img47 from '../assets/images/galeria/img-galeria47.jpeg'
import img48 from '../assets/images/galeria/img-galeria48.jpeg'
import img49 from '../assets/images/galeria/img-galeria49.jpeg'
import img50 from '../assets/images/galeria/img-galeria50.jpeg'
import img51 from '../assets/images/galeria/img-galeria51.jpeg'
import img52 from '../assets/images/galeria/img-galeria52.jpeg'

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

const imagenes: string[] = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38, img39, img40,
    img41, img42, img43, img44, img45, img46, img47, img48, img49, img50,
    img51, img52,
]

const videos: string[] = [
    video1, video2, video3, video4, video5, video6, video7,
    video8, video9, video10, video11, video12, video13, video14,
]

// Fisher-Yates: devuelve una copia desordenada
const desordenar = <T,>(lista: T[]): T[] => {
    const copia = [...lista]
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[copia[i], copia[j]] = [copia[j], copia[i]]
    }
    return copia
}

// Mezcla: fotos y vídeos desordenados, con un vídeo cada 4 fotos
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

const items = construirItems()

/* ---------- Orientación ---------- */

type Orientacion = 'horizontal' | 'vertical'

// Solo dos tamaños: las cuadradas cuentan como horizontales
const clasificar = (w: number, h: number): Orientacion =>
    w >= h ? 'horizontal' : 'vertical'

/* ---------- Vídeo ---------- */

type VideoItemProps = {
    src: string
    onMedida: (w: number, h: number) => void
}

const VideoItem = ({ src, onMedida }: VideoItemProps) => {
    const ref = useRef<HTMLVideoElement>(null)
    const [playing, setPlaying] = useState(false)

    const toggle = () => {
        const el = ref.current
        if (!el) return
        if (el.paused) {
            el.play()
            setPlaying(true)
        } else {
            el.pause()
            setPlaying(false)
        }
    }

    return (
        <>
            <video
                ref={ref}
                src={src}
                preload="metadata"
                playsInline
                loop
                onClick={toggle}
                onEnded={() => setPlaying(false)}
                onLoadedMetadata={(e) =>
                    onMedida(e.currentTarget.videoWidth, e.currentTarget.videoHeight)
                }
            />
            {!playing && (
                <button className="galeria__play" onClick={toggle} aria-label="Reproducir vídeo">
                    <svg viewBox="0 0 24 24" width="22" height="22">
                        <path d="M8 5v14l11-7z" fill="currentColor" />
                    </svg>
                </button>
            )}
        </>
    )
}

/* ---------- Elemento de la galería ---------- */

type GaleriaItemProps = {
    item: Item
    indice: number
}

const GaleriaItem = ({ item, indice }: GaleriaItemProps) => {
    const [orientacion, setOrientacion] = useState<Orientacion>('horizontal')
    const medir = (w: number, h: number) => setOrientacion(clasificar(w, h))

    return (
        <li className={`galeria__item galeria__item--${orientacion}`}>
            {item.tipo === 'foto' ? (
                <img
                    src={item.src}
                    alt={`Foto de la galería ${indice + 1}`}
                    loading="lazy"
                    onLoad={(e) =>
                        medir(e.currentTarget.naturalWidth, e.currentTarget.naturalHeight)
                    }
                />
            ) : (
                <VideoItem src={item.src} onMedida={medir} />
            )}
        </li>
    )
}

/* ---------- Componente principal ---------- */

type Filtro = 'foto' | 'video' | null

export const Galeria = () => {
    const [filtro, setFiltro] = useState<Filtro>(null)

    // Pulsar el filtro activo lo desactiva y vuelve a mostrar todo
    const alternar = (nuevo: 'foto' | 'video') =>
        setFiltro((actual) => (actual === nuevo ? null : nuevo))

    const visibles = filtro ? items.filter((item) => item.tipo === filtro) : items

    return (
        <section className="galeria">
            <small>★ GALERÍA.</small>
            <h2>GALERÍA EN PISTA <span>& MAREA VERDE #10.</span></h2>
            <p>Barro, polvo y gas. Fotos y videos de entrenos y carreras vuelta a vuelta.</p>

            <div className="galeria__wrap">

                <div className="contenedor-filtro">
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
                </div>

                <ul className="galeria__grid">
                    {visibles.map((item, i) => (
                        <GaleriaItem key={item.src} item={item} indice={i} />
                    ))}
                </ul>
            </div>
        </section>
    )
}