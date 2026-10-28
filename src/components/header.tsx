import logo from '../assets/images/logo.png'

export const Header = () => {
    return (
        <header className="header-principal">
           <a href="/" className="contenedor-logo">
             <img src={logo} alt="Logo de Joaquín González" className="logo" />
           </a>

            <nav className="navegacion">
                <a href="" className="menu-link">Inicio</a>
                <a href="" className="menu-link">Sobre mí</a>
                <a href="" className="menu-link">Galeria</a>
                <a href="" className="menu-link">Carreras</a>
                <a href="" className="menu-link menu-contacto">Contacto</a>
            </nav>
        </header>
    )
}