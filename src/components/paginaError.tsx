import '../paginaError.css'

export default function NotFound() {
  return (
    <main className="nf">

      <div className="nf__content">
        <p className="nf__badge">Dorsal #404</p>

        <h1 className="nf__code" aria-label="Error 404">
          <span aria-hidden="true">4</span>
          <span className="nf__code-digit--outline" aria-hidden="true">0</span>
          <span aria-hidden="true">4</span>
        </h1>

        <h2 className="nf__title">
          <span>Te has salido</span>
          <span className="nf__title--outline">de la pista.</span>
        </h2>

        <p className="nf__text">
          Esta página no existe o la han movido. Vuelve al circuito y sigue
          acelerando.
        </p>

        <div className="nf__actions">
          <a href="/" className="nf__btn nf__btn--primary">Volver al inicio</a>
          <a href="/#carreras" className="nf__btn nf__btn--ghost">Ver carreras</a>
        </div>
      </div>
    </main>
  )
}