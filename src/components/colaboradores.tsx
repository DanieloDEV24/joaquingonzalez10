// import mynoLogo from '../assets/images/logoMyno.png'

interface Marca {
    nombre: string;
    logo: string;
}
const MARCAS: Marca[] = [
    // { nombre: 'Myno Studio', logo: mynoLogo }
]

export const Colaboradores = () => {
    return (
        <section className="colaboradores" id="patrocinadores">
            <small>★ COLABORADORES.</small>
            <h2>RODAMOS <span>JUNTOS.</span></h2>
            <p>Las marcas que hacen posible cada carrera. ¿Quieres estar aquí?</p>
            <ul className="marcas">
                {
                    MARCAS.length === 0 ? 
                    <>
                        <li className="anade-tu-marca"> + TU LOGO AQUÍ</li>
                        <li className="anade-tu-marca"> + TU LOGO AQUÍ</li>
                        <li className="anade-tu-marca"> + TU LOGO AQUÍ</li>
                        <li className="anade-tu-marca">+ TU LOGO AQUÍ</li>
                    </>
                    : 
                    MARCAS.map((marca, index) => (
                        <li className="marca" key={index}>
                            <img src={marca.logo} alt={marca.nombre} />
                            <h4>{marca.nombre}</h4>
                        </li>
                    ))
                    
                }
            </ul>

            <footer className="btns-marca">
                <a href="">
                    Quiero colaborar
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right-dashed"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12h.5m3 0h1.5m3 0h6" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                </a>
            </footer>
        </section>
    )
}