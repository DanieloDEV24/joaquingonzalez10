import { motion, useReducedMotion, type Variants } from "motion/react";

/**
 * Contenedor: no anima nada por sí mismo, solo escalona la entrada de sus hijos.
 */
const contenedor: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};

/**
 * Línea del título: aparece con fade y sube unos píxeles.
 */
const lineaTitulo: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
};

/**
 * Aparición genérica (fade + subida corta) para subtítulo y botones.
 */
const aparecer: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

/**
 * Flecha del botón: se desplaza a la derecha cuando el padre (<a>) está en hover.
 */
const flecha: Variants = {
    rest: { x: 0 },
    hover: { x: 6, transition: { type: "spring", stiffness: 400, damping: 18 } },
};

/**
 * Home del sitio. Entrada escalonada y microinteracciones en los botones.
 * Respeta prefers-reduced-motion mostrando todo directamente.
 */
export const Home = () => {
    // Si el usuario tiene animaciones reducidas en el sistema, saltamos la entrada
    const reducir = useReducedMotion();

    return (
        <motion.section
            className="home"
            variants={contenedor}
            initial={reducir ? "show" : "hidden"}
            animate="show"
        >
            <h1>
                {/* Cada línea del título entra con su propia variante */}
                <motion.span variants={lineaTitulo}>JOAQUÍN</motion.span>
                <motion.span variants={lineaTitulo}>GONZÁLEZ.</motion.span>
            </h1>

            <motion.p className="texto-home" variants={aparecer}>
                Piloto de motocross. Aquí no se frena: se acelera.
            </motion.p>

            <motion.footer className="botones-home" variants={aparecer}>
                {/* Botón principal: escala al hover, se hunde al pulsar y propaga "hover" a la flecha */}
                <motion.a
                    href="/#carreras"
                    className="btn-primario"
                    initial="rest"
                    whileHover="hover"
                    whileTap={{ scale: 0.96 }}
                >
                    VER CARRERAS
                    <motion.svg
                        variants={flecha}
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right-dashed"
                    >
                        {/* Fondo transparente del icono (requerido por Tabler) */}
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        {/* Línea discontinua horizontal de la flecha */}
                        <path d="M5 12h.5m3 0h1.5m3 0h6" />
                        {/* Mitad inferior de la punta */}
                        <path d="M15 16l4 -4" />
                        {/* Mitad superior de la punta */}
                        <path d="M15 8l4 4" />
                    </motion.svg>
                </motion.a>

                {/* Botón secundario: mismo feedback de hover/tap, sin flecha */}
                <motion.a
                    href="/#galeria"
                    className="btn-secundario"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                >
                    GALERÍA
                </motion.a>
            </motion.footer>
        </motion.section>
    );
};