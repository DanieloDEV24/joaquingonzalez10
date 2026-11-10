import { motion, useReducedMotion, type Variants } from "motion/react";
import imagenJoaquin from '../assets/images/imagen-joaquin.jpeg'
import imagenMoto from '../assets/images/imagen-moto.jpeg'
import { IconoMedalla } from './icons/iconoMedalla';
import { IconoCasco } from './icons/iconoCasco';
import { IconoMoto } from './icons/iconoMoto';

/**
 * Datos de las tarjetas inferiores (referentes, espíritu y moto).
 */
const datos = [
  { label: "Referentes", titulo: "Eli Tomac • Jorge Prado", texto: "Me fijo en cómo pilotan y atacan cada curva. Quiero aprender de los mejores.", icono: IconoMedalla },
  { label: "Espíritu Team Green", titulo: "Verde Kawasaki", texto: "Kawasaki me apasiona desde siempre. Verde en la moto, en el equipo y en la cabeza.", icono: IconoCasco },
  { label: "Mi máquina", titulo: "Kawasaki KX · 85 cc", texto: "La moto con la que estoy aprendiendo y mejorando en cada carrera.", icono: IconoMoto },
];

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
 * Sección "Sobre mí": estadísticas, bloque imagen + texto y tarjetas de datos.
 * Cada bloque se anima al entrar en pantalla. Respeta prefers-reduced-motion.
 */
export const Presentacion = () => {
    // Si el usuario tiene animaciones reducidas, todo se muestra directamente
    const reducir = useReducedMotion();
    const inicial = reducir ? "show" : "hidden";

    return(
        <section className="presentacion" id="sobremi">
            {/* Estadísticas: entran escalonadas */}
            <motion.dl
                className="stats"
                variants={contenedor}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                <motion.div className="stat" variants={aparecer}>
                    <dd className="stat-number">01</dd>
                    <dt className="stat-label">Carreras</dt>
                </motion.div>

                <motion.div className="stat" variants={aparecer}>
                    <dd className="stat-number">P6</dd>
                    <dt className="stat-label">Mejor posición</dt>
                </motion.div>

                <motion.div className="stat" variants={aparecer}>
                    <dd className="stat-number">85</dd>
                    <dt className="stat-label">Cilindrada cc</dt>
                </motion.div>

                <motion.div className="stat" variants={aparecer}>
                    <dd className="stat-number">#10</dd>
                    <dt className="stat-label">Dorsal</dt>
                </motion.div>
            </motion.dl>

            <div className="info-presentacion">
                {/* Imágenes: fade del bloque completo, sin mover las imágenes */}
                <motion.div
                    className="images-presentacion"
                    variants={soloFade}
                    initial={inicial}
                    whileInView="show"
                    viewport={viewport}
                >
                    <span>DORSAL #10</span>
                    <img src={imagenJoaquin} alt="Imagen de Joaquín montado en la moto" className="imagen-cuerpo" />
                    <img src={imagenMoto} alt="Imagen de la moto en el remorque" className="imagen-moto" />
                </motion.div>

                {/* Texto: etiqueta, título y párrafos entran en cascada */}
                <motion.div
                    className="texto-presentacion"
                    variants={contenedor}
                    initial={inicial}
                    whileInView="show"
                    viewport={viewport}
                >
                    <motion.small variants={aparecer}>★ SOBRE MÍ.</motion.small>

                    <motion.h2 variants={aparecer}>
                        EL CAMINO <span>ACABA</span> DE EMPEZAR.
                    </motion.h2>

                    <motion.p variants={aparecer}>Acabo de empezar a competir en motocross y vengo con muchas ganas de demostrar lo que puedo hacer. Cada entrenamiento y cada carrera me enseñan algo nuevo, y eso es lo que me hace mejorar.</motion.p>

                    <motion.p variants={aparecer}>Detrás de cada vuelta hay esfuerzo, constancia y una familia que me acompaña en cada circuito. Este es el comienzo: entrenar, aprender de cada carrera y mejorar vuelta a vuelta.</motion.p>

                    <motion.p variants={aparecer}>Mi objetivo es crecer como piloto paso a paso, disfrutando de cada salida de parrilla y aprendiendo de cada curva. Si quieres acompañarme desde el principio, escríbeme.</motion.p>
                </motion.div>
            </div>

            {/* Tarjetas: aparecen una tras otra */}
            <motion.ul
                className="grid-datos-info"
                variants={contenedor}
                initial={inicial}
                whileInView="show"
                viewport={viewport}
            >
                {datos.map((dato, index) => {

                    const Icono = dato.icono

                    return (
                        <motion.li key={index} variants={aparecer}>
                            <div>
                                <small>{dato.label}</small>
                                <Icono/>
                            </div>

                            <div>
                                <h4>{dato.titulo}</h4>
                                <p>{dato.texto}</p>
                            </div>
                        </motion.li>
                    )
                })}
            </motion.ul>
        </section>
    )
}