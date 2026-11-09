import logo from '../assets/images/logo.png'
import { useState} from 'react'

export const Header = () => {
    const [abierto, setAbierto] = useState(false)

    return (
        <header className={`header-principal ${abierto ? 'is-open' : ''}`}>
           <a href="/" className="contenedor-logo">
             <img src={logo} alt="Logo de Joaquín González" className="logo" />
           </a>

            <nav className="navegacion">
                <a href="/" className="menu-link">Inicio</a>
                <a href="/#sobremi" className="menu-link">Sobre mí</a>
                <a href="/#moto" className="menu-link">Moto</a>
                <a href="/#galeria" className="menu-link">Galería</a>
                <a href="/#carreras" className="menu-link">Carreras</a>
                <a href="/#patrocinadores" className="menu-link">Patrocinadores</a>
                <a href="/#contacto" className="menu-link menu-contacto">Contacto</a>
            </nav>

            <nav className={`navegacion-movil ${abierto ? 'is-open' : ''}`}>
                <a href="/" className="menu-link">Inicio</a>
                <a href="/#sobremi" className="menu-link">Sobre mí</a>
                <a href="/#moto" className="menu-link">Moto</a>
                <a href="/#galeria" className="menu-link">Galería</a>
                <a href="/#carreras" className="menu-link">Carreras</a>
                <a href="/#patrocinadores" className="menu-link">Patrocinadores</a>
                <a href="/#contacto" className="menu-link menu-contacto">Contacto</a>
            </nav>

            <button
            // ref={botonRef}
            className={`menu-btn ${abierto ? 'is-open' : ''}`}
            type="button"
            // aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            // aria-expanded={abierto}
            aria-controls="menu-panel"
            onClick={() => setAbierto(!abierto)}
            >
                <span /> {/* línea superior (larga) */}
                <span /> {/* línea inferior (corta) */}
            </button>
        </header>
    )
}