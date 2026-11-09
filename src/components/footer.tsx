import logo from '../assets/images/logo.png'

export const Footer = () => {
    return (
        <footer className="footer-principal">
            <div className="first-info">
                <img src={logo} alt="Logo" />
                <p><strong>J. González #10 · 11 años · Piloto MX 85CC</strong></p>
                <p>Joven piloto con pasión por el motocross, compitiendo en la categoría MX85 y trabajando cada día para seguir creciendo dentro de este deporte. Dedicación, esfuerzo y ambición sobre dos ruedas, con la mirada puesta en nuevos retos y objetivos en cada carrera.</p>
            </div>

            <div className="secciones-web">
                <p>MENÚ</p>
                <div>
                    <a href="">Inicio</a>
                    <a href="">Sobre mí</a>
                    <a href="">Moto</a>
                    <a href="">Galería</a>
                    <a href="">Carreras</a>
                    <a href="">Patrocinadores</a>
                    <a href="">Contacto</a>
                </div>
            </div>

            <div className="copyright-footer">
                <p>© 2026 J. González #10. Todos los derechos reservados.</p>
                <p>Web realizada por Myno Studio | Daniel Ruiz Soto. </p>
            </div>
        </footer>
    )
}