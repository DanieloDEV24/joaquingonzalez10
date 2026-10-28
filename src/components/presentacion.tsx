import imagenJoaquin from '../assets/images/imagen-joaquin.jpeg'
import imagenMoto from '../assets/images/imagen-moto.jpeg'
import { IconoMedalla } from './icons/iconoMedalla';
import { IconoCasco } from './icons/iconoCasco';
import { IconoMoto } from './icons/iconoMoto';

const datos = [
  { label: "Referentes", titulo: "Eli Tomac • Jorge Prado", texto: "Me fijo en cómo pilotan y atacan cada curva. Quiero aprender de los mejores.", icono: IconoMedalla },
  { label: "Espíritu Team Green", titulo: "Verde Kawasaki", texto: "Kawasaki me apasiona desde siempre. Verde en la moto, en el equipo y en la cabeza.", icono: IconoCasco },
  { label: "Mi máquina", titulo: "Kawasaki KX · 85 cc", texto: "La moto con la que estoy aprendiendo y mejorando en cada carrera.", icono: IconoMoto },
];

export const Presentacion = () => {
    return(
        <section className="presentacion">
            <dl className="stats">
                <div className="stat">
                    <dd className="stat-number">01</dd>
                    <dt className="stat-label">Carreras</dt>
                </div>

                <div className="stat">
                    <dd className="stat-number">P6</dd>
                    <dt className="stat-label">Mejor posición</dt>
                </div>

                <div className="stat">
                    <dd className="stat-number">85</dd>
                    <dt className="stat-label">Cilindrada cc</dt>
                </div>

                <div className="stat">
                    <dd className="stat-number">#10</dd>
                    <dt className="stat-label">Dorsal</dt>
                </div>
                </dl>

                <div className="info-presentacion">
                    <div className="images-presentacion">
                        <span>DORSAL #10</span>
                        <img src={imagenJoaquin} alt="Imagen de Joaquín montado en la moto" className="imagen-cuerpo" />
                        <img src={imagenMoto} alt="Imagen de la moto en el remorque" className="imagen-moto" />
                    </div>
                    <div className="texto-presentacion">
                        <small>★ SOBRE MÍ.</small>

                        <h2>
                            EL CAMINO <span>ACABA</span> DE EMPEZAR.
                        </h2>

                        <p>Acabo de empezar a competir en motocross y vengo con muchas ganas de demostrar lo que puedo hacer. Cada entrenamiento y cada carrera me enseñan algo nuevo, y eso es lo que me hace mejorar.</p>

                        <p>Detrás de cada vuelta hay esfuerzo, constancia y una familia que me acompaña en cada circuito. Este es el comienzo: entrenar, aprender de cada carrera y mejorar vuelta a vuelta.</p>

                        <p>Mi objetivo es crecer como piloto paso a paso, disfrutando de cada salida de parrilla y aprendiendo de cada curva. Si quieres acompañarme desde el principio, escríbeme.</p>
                    </div>
                </div>

                <ul className="grid-datos-info">
                            {datos.map((dato, index) => {
                                
                                const Icono = dato.icono

                                return (
                                    <li key={index}>
                                        <div>
                                            <Icono/>
                                        </div>  

                                        <div>
                                            <small>{dato.label}</small>
                                            <h4>{dato.titulo}</h4>
                                            <p>{dato.texto}</p>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
        </section>
    )
}