const ITEMS_CINTA = ["DORSAL 10", "AQUÍ NO SE FRENA", "BARRO, POLVO Y GAS"]

export const Cinta = () => {
    return (
        <div className="cinta-wrapper">
            <div className="cinta">
                <div className="cinta-track">
                    {[0, 1].map(elemento => (
                        <div className="cinta-grupo" key={elemento} haria-hidden={elemento === 1}>
                    {
                        [...Array(3)].flatMap(() => ITEMS_CINTA).map((texto, index) => (
                            <span className="cinta-item" key={index}>
                                {texto}
                                <span className="cinta-estrella">★</span>
                            </span>
                        ))
                    }
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}