import { motion, useReducedMotion, type Variants } from "motion/react";
import logo from '../assets/images/logo.png'

/**
 * Configuración del viewport: se anima una sola vez, cuando el 15 % del footer es visible.
 * (Valor bajo porque el footer es alto en móvil y con más tardaría en dispararse.)
 */
const viewport = { once: true, amount: 0.15 };

/**
 * Contenedor: no anima nada por sí mismo, solo escalona la entrada de sus hijos.
 */
const contenedor: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

/**
 * Elemento hijo: fade + subida corta.
 */
const aparecer: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * Footer: los tres bloques (info, menú y copyright) entran en cascada.
 * Se anima al entrar en pantalla. Respeta prefers-reduced-motion.
 */
export const Footer = () => {
    // Si el usuario tiene animaciones reducidas, todo se muestra directamente
    const reducir = useReducedMotion();
    const inicial = reducir ? "show" : "hidden";

    return (
        <motion.footer
            className="footer-principal"
            variants={contenedor}
            initial={inicial}
            whileInView="show"
            viewport={viewport}
        >
            <motion.div className="first-info" variants={aparecer}>
                <img src={logo} alt="Logo" />
                <p><strong>J. González #10 · 11 años · Piloto MX 85CC</strong></p>
                <p>Joven piloto con pasión por el motocross, compitiendo en la categoría MX85 y trabajando cada día para seguir creciendo dentro de este deporte. Dedicación, esfuerzo y ambición sobre dos ruedas, con la mirada puesta en nuevos retos y objetivos en cada carrera.</p>
            </motion.div>

            <motion.div className="secciones-web" variants={aparecer}>
                <p>MENÚ</p>
                <div>
                    <a href="#inicio">Inicio</a>
                    <a href="#sobremi">Sobre mí</a>
                    <a href="#moto">Moto</a>
                    <a href="#galeria">Galería</a>
                    <a href="#carreras">Carreras</a>
                    <a href="#patrocinadores">Patrocinadores</a>
                    <a href="#contacto">Contacto</a>
                </div>
            </motion.div>

            <motion.div className="copyright-footer" variants={aparecer}>
                <p>© 2026 J. González #10. Todos los derechos reservados.</p>
                <p>Web realizada por Myno Studio | Daniel Ruiz Soto.</p>
            </motion.div>
        </motion.footer>
    )
}