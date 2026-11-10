import type { ComponentType } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { IconoVelocidad } from "./icons/iconoVelocidad";
import { IconoDash } from "./icons/iconoDash";
import { IconoSettings } from "./icons/iconoSettings";
import { IconoMotor } from "./icons/iconoMotor";
import { IconoSound } from "./icons/iconoSound";
import { IconoColor } from "./icons/iconoColor";

interface Especificacion {
  category: string;
  title: string;
  description: string;
  icon: ComponentType;
  footerLabel: string;
  footerValue: string;
}

/**
 * Especificaciones técnicas de la moto (una tarjeta por elemento).
 */
const specifications: Especificacion[] = [
  {
    category: "POWERTRAIN",
    title: "MOTOR 84CC 2T",
    description:
      "Monocilíndrico 2 tiempos refrigerado por líquido con sistema KIPS (Kawasaki Integrated Power-valve System) para entrega de par explosivo a medio y alto régimen.",
    icon: IconoVelocidad,
    footerLabel: "VÁLVULA DE ESCAPE",
    footerValue: "KIPS ADJUSTED",
  },
  {
    category: "CHASSIS & FRAME",
    title: "PERIMETRAL ACERO",
    description:
      "Chasis perimetral tubular de acero de alta resistencia con subchasis desmontable de aluminio para aligerar pesos y resistir aterrizajes extremos.",
    icon: IconoDash,
    footerLabel: "PESO TOTAL EN ORDEN",
    footerValue: "75.0 KG FACTORY",
  },
  {
    category: "DAMPING & SUSPENSION",
    title: "SHOWA 36MM & UNI-TRAK",
    description:
      "Horquilla delantera invertida de 36 mm con compresión regulable en 20 posiciones y amortiguador trasero Uni-Trak completamente personalizable para 42 kg de piloto.",
    icon: IconoSettings,
    footerLabel: "REGLAJE JG10",
    footerValue: "HARD-PACK + MUD SPEC",
  },
  {
    category: "TRACTION & GRIP",
    title: "DUNLOP GEOMAX MX33",
    description:
      "Llantas negras de competición con neumáticos para terreno blando e intermedio, garantizando agarre letal en roderas profundas y frenadas al límite.",
    icon: IconoMotor,
    footerLabel: "DIMENSIONES",
    footerValue: '19" DEL / 16" TRAS',
  },
  {
    category: "EXHAUST SYSTEM",
    title: "FMF FACTORY FATTY",
    description:
      "Línea completa FMF Racing con silenciador Powercore 2. Sonido metálico característico, respuesta instantánea del puño de gas y reducción drástica de contrapresión.",
    icon: IconoSound,
    footerLabel: "PRESTACIONES",
    footerValue: "+2.4 HP EN PUNTA",
  },
  {
    category: "LIVERY & GRAPHICS",
    title: "DECALS JG #10 GREEN",
    description:
      "Kit de plásticos y adhesivos ultra-resistentes de 500 micras con acabado verde flúor Kawasaki Team Green, dorsal #10 reflectante y patrocinadores oficiales integrados.",
    icon: IconoColor,
    footerLabel: "COLORWAYS",
    footerValue: "LIME GREEN / JET BLACK",
  },
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
 * Sección "La moto": encabezado y tarjetas con las especificaciones.
 * Cada bloque se anima al entrar en pantalla. Respeta prefers-reduced-motion.
 */
export const Moto = () => {
  // Si el usuario tiene animaciones reducidas, todo se muestra directamente
  const reducir = useReducedMotion();
  const inicial = reducir ? "show" : "hidden";

  return (
    <section className="moto" id="moto">
      {/* Etiqueta superior */}
      <motion.small
        variants={aparecer}
        initial={inicial}
        whileInView="show"
        viewport={viewport}
      >
        ★ LA MOTO.
      </motion.small>

      {/* Encabezado: título y subtítulo entran en cascada */}
      <motion.div
        className="titulo-moto"
        variants={contenedor}
        initial={inicial}
        whileInView="show"
        viewport={viewport}
      >
        <motion.h2 variants={aparecer}>
          LA MÁQUINA VERDE: <span>KAWASAKI KX 85CC.</span>
        </motion.h2>

        <motion.div variants={aparecer}>
          <small>CONFIGURACIÓN NACIONAL MX85.</small>
          <p>2-STROKE COMPETITION SETUP.</p>
        </motion.div>
      </motion.div>

      {/* Tarjetas: aparecen una tras otra */}
      <motion.ul
        className="info-moto"
        variants={contenedor}
        initial={inicial}
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        {specifications.map((data) => {
          const Icono = data.icon;

          return (
            <motion.li key={data.title} variants={aparecer}>
              <div>
                <small>{data.category}</small>
                <Icono />
              </div>
              <h4>{data.title}</h4>
              <p>{data.description}</p>
              <footer className="footer-stat-moto">
                <span>{data.footerLabel}</span>
                <span>{data.footerValue}</span>
              </footer>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};