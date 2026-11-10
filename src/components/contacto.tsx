import { motion, useReducedMotion, type Variants } from "motion/react";

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
 * Sección "Contacto": encabezado y lista de vías de contacto.
 * Cada bloque se anima al entrar en pantalla. Respeta prefers-reduced-motion.
 */
export const Contacto = () => {
    // Si el usuario tiene animaciones reducidas, todo se muestra directamente
    const reducir = useReducedMotion();
    const inicial = reducir ? "show" : "hidden";

    return (
        <section className="contacto" id="contacto">
            {/* Etiqueta, título y descripción */}
            <motion.small
                variants={aparecer}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                ★ CONTACTO.
            </motion.small>

            <motion.h2
                variants={aparecer}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                ¿ME ACOMPAÑAS <span>DESDE EL INICIO?</span>
            </motion.h2>

            <motion.p
                variants={aparecer}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                Busco apoyos para crecer en mi primera temporada. Cuéntame qué tienes en mente y lo hablamos.
            </motion.p>

            {/* Vías de contacto: aparecen una tras otra */}
            <motion.ul
                className="contacto"
                variants={contenedor}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                <motion.li variants={aparecer}>
                    <small>Correo electrónico</small>
                    <a href="mailto:antoniogonzalezhidalgo1986@gmail.com">antoniogonzalezhidalgo1986@gmail.com</a>
                </motion.li>

                <motion.li variants={aparecer}>
                    <small>Teléfono</small>
                    <a href="tel:+34622066341">622 06 63 41</a>
                </motion.li>

                <motion.li variants={aparecer}>
                    <small>Redes sociales</small>
                    <div className="redes-sociales">
                        <a href="">Tik tok</a>
                        <a href="">Instagram</a>
                    </div>
                </motion.li>
            </motion.ul>
        </section>
    )
}