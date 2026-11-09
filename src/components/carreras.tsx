const RESULTADOS_CARRERAS = [
    {posicion: 6, titulo: "DEBUT EN LAS CARRERAS", lugar: 'Circuito de no se donde', fecha: '10/10/2026'}
]

export const Carreras = () => {
    return (
        <section className="carreras" id="carreras">
            <small>★ RESULTADOS.</small>
            <h2>CARRERA A <span>CARRERA.</span></h2>
            <p>Repasa mis últimos resultados y descubre cómo va evolucionando cada carrera.</p>
            <ul className="resultados-carreras">
                {
                    RESULTADOS_CARRERAS.map((carrera, index) => (
                        <li key={index}>
                            <span>#{String(carrera.posicion).padStart(2, '0')}</span>
                            <div>
                                <h4>{carrera.titulo}</h4>
                                <span>{carrera.lugar} · {carrera.fecha}</span>
                            </div>
                        </li>
                    ))
                }

                 <li>
                            <span>¿?</span>
                            <div>
                                <h4>PRÓXIMA CARRERA</h4>
                                <span>Por definir</span>
                            </div>
                        </li>
            </ul>
        </section>
    )
}