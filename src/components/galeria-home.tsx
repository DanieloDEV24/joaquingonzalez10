import img1 from '../assets/images/foto1-preGaleria.png'
import img2 from '../assets/images/foto2-preGaleria.png'

export const GaleriaHome = () => {
    return (
        <section className="galeria-home" id="galeria">
            <small>★ GALERÍA.</small>
            <div className="titulo-galeria-home">
                <h2>GALERÍA EN PISTA & <span>MAREA VERDE #10.</span></h2>
                <a href="/galeria" className='btn-mas-fotos'>Ver más multimedia <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right-dashed"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 12h.5m3 0h1.5m3 0h6" /><path d="M15 16l4 -4" /><path d="M15 8l4 4" /></svg></a>
            </div>
            <ul className="pre-galeria">
                <li><img src={img1} alt="" /></li>
                <li><img src={img2} alt="" /></li>
            </ul>
        </section>
    )
}