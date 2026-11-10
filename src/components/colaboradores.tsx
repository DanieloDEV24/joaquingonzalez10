// import mynoLogo from '../assets/images/logoMyno.png'
import { motion, useReducedMotion, type Variants } from "motion/react";

interface Marca {
    nombre: string;
    logo: string;
}
const MARCAS: Marca[] = [
    // { nombre: 'Myno Studio', logo: mynoLogo }
]

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
 * Sección "Colaboradores": encabezado, marcas y botón de contacto.
 * Cada bloque se anima al entrar en pantalla. Respeta prefers-reduced-motion.
 */
export const Colaboradores = () => {
    // Si el usuario tiene animaciones reducidas, todo se muestra directamente
    const reducir = useReducedMotion();
    const inicial = reducir ? "show" : "hidden";

    return (
        <section className="colaboradores" id="patrocinadores">
            {/* Etiqueta, título y descripción */}
            <motion.small
                variants={aparecer}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                ★ COLABORADORES.
            </motion.small>

            <motion.h2
                variants={aparecer}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                RODAMOS <span>JUNTOS.</span>
            </motion.h2>

            <motion.p
                variants={aparecer}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                Las marcas que hacen posible cada carrera. ¿Quieres estar aquí?
            </motion.p>

            {/* Marcas: aparecen una tras otra */}
            <motion.ul
                className="marcas"
                variants={contenedor}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                {MARCAS.length === 0 ? (
                    <>
                        <motion.li className="anade-tu-marca" variants={aparecer}>+ TU LOGO AQUÍ</motion.li>
                        <motion.li className="anade-tu-marca" variants={aparecer}>+ TU LOGO AQUÍ</motion.li>
                        <motion.li className="anade-tu-marca" variants={aparecer}>+ TU LOGO AQUÍ</motion.li>
                        <motion.li className="anade-tu-marca" variants={aparecer}>+ TU LOGO AQUÍ</motion.li>
                    </>
                ) : (
                    MARCAS.map((marca) => (
                        <motion.li className="marca" key={marca.nombre} variants={aparecer}>
                            <img src={marca.logo} alt={marca.nombre} />
                            <h4>{marca.nombre}</h4>
                        </motion.li>
                    ))
                )}
            </motion.ul>

            {/* Botón */}
            <motion.footer
                className="btns-marca"
                variants={aparecer}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                <a href="">
                    Quiero colaborar
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right-dashed">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12h.5m3 0h1.5m3 0h6" />
                        <path d="M15 16l4 -4" />
                        <path d="M15 8l4 4" />
                    </svg>
                </a>
            </motion.footer>
        </section>
    )
}