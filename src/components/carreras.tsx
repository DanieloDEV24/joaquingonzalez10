import { motion, useReducedMotion, type Variants } from "motion/react";

interface ResultadoCarrera {
    posicion: number;
    titulo: string;
    lugar: string;
    fecha: string;
}

const RESULTADOS_CARRERAS: ResultadoCarrera[] = [
    { posicion: 6, titulo: "DEBUT EN LAS CARRERAS", lugar: 'Circuito de no se donde', fecha: '10/10/2026' }
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
 * Sección "Carreras": encabezado y lista de resultados.
 * Cada bloque se anima al entrar en pantalla. Respeta prefers-reduced-motion.
 */
export const Carreras = () => {
    // Si el usuario tiene animaciones reducidas, todo se muestra directamente
    const reducir = useReducedMotion();
    const inicial = reducir ? "show" : "hidden";

    return (
        <section className="carreras" id="carreras">
            {/* Etiqueta superior */}
            <motion.small
                variants={aparecer}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                ★ RESULTADOS.
            </motion.small>

            {/* Título y descripción */}
            <motion.h2
                variants={aparecer}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                CARRERA A <span>CARRERA.</span>
            </motion.h2>

            <motion.p
                variants={aparecer}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                Repasa mis últimos resultados y descubre cómo va evolucionando cada carrera.
            </motion.p>

            {/* Resultados: aparecen uno tras otro */}
            <motion.ul
                className="resultados-carreras"
                variants={contenedor}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                {RESULTADOS_CARRERAS.map((carrera) => (
                    <motion.li key={`${carrera.titulo}-${carrera.fecha}`} variants={aparecer}>
                        <span>#{String(carrera.posicion).padStart(2, '0')}</span>
                        <div>
                            <h4>{carrera.titulo}</h4>
                            <span>{carrera.lugar} · {carrera.fecha}</span>
                        </div>
                    </motion.li>
                ))}

                <motion.li variants={aparecer}>
                    <span>¿?</span>
                    <div>
                        <h4>PRÓXIMA CARRERA</h4>
                        <span>Por definir</span>
                    </div>
                </motion.li>
            </motion.ul>
        </section>
    )
}