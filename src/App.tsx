import './App.css'
import './responsive.css'
import { useEffect } from 'react'
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom'
import { Home } from './components/home'
import { Header } from './components/header'
import { Cinta } from './components/cinta'
import { Presentacion } from './components/presentacion'
import { Moto } from './components/moto'
import { GaleriaHome } from './components/galeria-home'
import { Galeria } from './components/galeria'
import { Carreras } from './components/carreras'
import { Colaboradores } from './components/colaboradores'
import { Contacto } from './components/contacto'
import { Footer } from './components/footer'

// Hace scroll a la sección del hash (#contacto) o arriba si no hay hash
const ScrollManager = () => {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // setTimeout para esperar a que la página nueva esté pintada
      const id = hash.slice(1)
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

const Layout = () => (
  <>
    <ScrollManager />
    <Header />
    <Outlet />
    <Footer />
  </>
)

// Landing: todas las secciones en una sola página
const Landing = () => (
  <>
    <Home />
    <Cinta />
    <Presentacion />
    <Moto />
    <GaleriaHome />
    <Carreras />
    <Colaboradores />
    <Contacto />
  </>
)

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default App