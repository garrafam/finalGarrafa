import cart from "../imagen/carrito-de-compras.png"
export function Card() {
    return (
        <>
            <img className="imgcarr" src={cart} alt="imagencarrito" />
            <span>  0</span>
        </>
    )
}