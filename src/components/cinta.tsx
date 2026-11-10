import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

/**
 * Textos que se repiten en la cinta.
 */
const ITEMS_CINTA = ["DORSAL 10", "AQUÍ NO SE FRENA", "BARRO, POLVO Y GAS"];

/**
 * Cinta con marquee infinito.
 * Aparece con un fade al entrar en pantalla y pausa el bucle CSS
 * mientras está fuera de la vista.
 */
export const Cinta = () => {
    // Referencia al wrapper para detectar cuándo está visible
    const ref = useRef<HTMLDivElement>(null);

    // Si el usuario prefiere menos movimiento, la cinta se muestra sin animar
    const reducir = useReducedMotion();

    // "some" = basta con que entre 1 px, así funciona aunque el wrapper mida poco
    const enVista = useInView(ref, { amount: "some" });

    // Igual, pero se queda en true tras la primera vez (controla solo la entrada)
    const yaVista = useInView(ref, { amount: "some", once: true });

    return (
        <motion.div
            ref={ref}
            className="cinta-wrapper"
            // Solo opacity: no recorta (clip-path) ni pisa el transform de tu CSS
            initial={reducir ? false : { opacity: 0 }}
            animate={{ opacity: reducir || yaVista ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="cinta">
                {/* Pausa/reanuda la animación CSS del marquee según la visibilidad */}
                <div
                    className="cinta-track"
                    style={{ animationPlayState: enVista ? "running" : "paused" }}
                >
                    {/* Dos grupos idénticos para que el bucle no tenga saltos */}
                    {[0, 1].map((elemento) => (
                        <div
                            className="cinta-grupo"
                            key={elemento}
                            // El segundo grupo es solo para el bucle: se oculta a lectores de pantalla
                            aria-hidden={elemento === 1}
                        >
                            {[...Array(3)].flatMap(() => ITEMS_CINTA).map((texto, index) => (
                                <span className="cinta-item" key={index}>
                                    {texto}
                                    {/* Estrella decorativa entre textos */}
                                    <span className="cinta-estrella">★</span>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};