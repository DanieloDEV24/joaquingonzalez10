export const Home = () => {
    return (
        <section className="home">
            <h1>
                <span>JOAQUÍN</span>
                <span>GONZÁLEZ.</span>
            </h1>

            <p className="texto-home">Piloto de motocross. Aquí no se frena: se acelera.</p>

            <footer className="botones-home">
                <a href="/#carreras" className="btn-primario">VER CARRERAS
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right-dashed"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12h.5m3 0h1.5m3 0h6" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg>
                </a>
                <a href="/#galeria" className="btn-secundario">GALERÍA</a>
            </footer>
            
        </section>
    )
}