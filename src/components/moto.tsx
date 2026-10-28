import { IconoVelocidad } from "./icons/iconoVelocidad";
import { IconoDash } from "./icons/iconoDash";
import { IconoSettings } from "./icons/iconoSettings";
import { IconoMotor } from "./icons/iconoMotor"; 
import { IconoSound } from "./icons/iconoSound";
import { IconoColor } from "./icons/iconoColor";

const specifications = [
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

export const Moto = () => {
    return (
        <section className="moto">
            <small>★ LA MOTO.</small>
            <div className="titulo-moto">
                <h2>LA MÁQUINA VERDE: <span>KAWASAKI KX 85CC.</span></h2>
                <div>
                    <small>CONFIGURACIÓN NACIONAL MX85.</small>
                    <p>2-STROKE COMPETITION SETUP.</p>
                </div>
            </div>

            <ul className="info-moto">
                {
                    specifications.map((data, index) => {
                        const Icono = data.icon;
                        return (
                            <li key={index}>
                                <div>
                                    <small>{data.category}</small>
                                    <Icono/>
                                </div>
                                <h4>{data.title}</h4>
                                <p>{data.description}</p>
                                <footer className="footer-stat-moto">
                                    <span>{data.footerLabel}</span>
                                    <span>{data.footerValue}</span>
                                </footer>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}