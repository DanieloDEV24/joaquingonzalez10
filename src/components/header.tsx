import logo from '../assets/images/logo.png'
import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'

/**
 * Header principal.
 * Solo hace fade-in al cargar (sin mover el header, para no interferir con su
 * posición actual) y el logo reacciona al hover. El menú móvil conserva tu
 * lógica de apertura con la clase is-open.
 */
export const Header = () => {
    const [abierto, setAbierto] = useState(false)
    const reducir = useReducedMotion()

    return (
        <motion.header
            className={`header-principal ${abierto ? 'is-open' : ''}`}
            // Fade-in al cargar la página
            initial={reducir ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <a href="/" className="contenedor-logo">
                {/* El logo hace un pequeño giro al pasar el ratón */}
                <motion.img
                    src={logo}
                    alt="Logo de Joaquín González"
                    className="logo"
                    whileHover={{ scale: 1.06, rotate: -3 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                />
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
                <a href="/#patrocinadores" className="menu-link">Patrocinios</a>
                <a href="/#contacto" className="menu-link menu-contacto">Contacto</a>
            </nav>

            <button
                // ref={botonRef}
                className={`menu-btn ${abierto ? 'is-open' : ''}`}
                type="button"
                aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={abierto}
                aria-controls="menu-panel"
                onClick={() => setAbierto(!abierto)}
            >
                <span /> {/* línea superior (larga) */}
                <span /> {/* línea inferior (corta) */}
            </button>
        </motion.header>
    )
}