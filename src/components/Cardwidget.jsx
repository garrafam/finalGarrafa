import { useContext } from "react"
import { Link } from "react-router-dom"
import cart from "../imagen/carrito-de-compras.png"
import { CartContext } from "../context/CartContext"

export const CardWidget = () =>{
    const {totalWidget}= useContext(CartContext)
    return (
        <Link to="/cart">
            <img className="imgcarr" src={cart} alt="Cart" />
            <span> {totalWidget}</span>
        </Link>
    )
}