import { motion, useReducedMotion, type Variants } from "motion/react";
import img1 from '../assets/images/foto1-preGaleria.png'
import img2 from '../assets/images/foto2-preGaleria.png'

/**
 * Configuración del viewport: se anima una sola vez, cuando el 25 % del bloque es visible.
 */
const viewport = { once: true, amount: 0.25 };

/**
 * Contenedor: no anima nada por sí mismo, solo escalona la entrada de sus hijos.
 */
const contenedor: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

/**
 * Elemento hijo: fade + subida corta.
 */
const aparecer: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Solo fade, para las imágenes (no toca transform, así no pisa el CSS de su posición).
 */
const soloFade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: "easeOut" } },
};

/**
 * Sección "Galería": encabezado y vista previa con dos fotos.
 * Cada bloque se anima al entrar en pantalla. Respeta prefers-reduced-motion.
 */
export const GaleriaHome = () => {
    // Si el usuario tiene animaciones reducidas, todo se muestra directamente
    const reducir = useReducedMotion();
    const inicial = reducir ? "show" : "hidden";

    return (
        <section className="galeria-home" id="galeria">
            {/* Etiqueta superior */}
            <motion.small
                variants={aparecer}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                ★ GALERÍA.
            </motion.small>

            {/* Encabezado: título y botón entran en cascada */}
            <motion.div
                className="titulo-galeria-home"
                variants={contenedor}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                <motion.h2 variants={aparecer}>
                    GALERÍA EN PISTA & <span>MAREA VERDE #10.</span>
                </motion.h2>

                <motion.a variants={aparecer} href="/galeria" className="btn-mas-fotos">
                    Ver más multimedia
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right-dashed">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12h.5m3 0h1.5m3 0h6" />
                        <path d="M15 16l4 -4" />
                        <path d="M15 8l4 4" />
                    </svg>
                </motion.a>
            </motion.div>

            {/* Fotos: aparecen una tras otra */}
            <motion.ul
                className="pre-galeria"
                variants={contenedor}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                <motion.li variants={soloFade}>
                    <img src={img1} alt="" />
                </motion.li>
                <motion.li variants={soloFade}>
                    <img src={img2} alt="" />
                </motion.li>
            </motion.ul>
        </section>
    )
}