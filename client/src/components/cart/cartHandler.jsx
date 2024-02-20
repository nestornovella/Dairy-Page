import React, { useEffect, useRef, useState } from "react";
import Cart from "./cart";
import carritoImagen from "../../assets/carrito.png"
import './../../App.css';
import { useSelector } from "react-redux";

function CartHandler({ pedido, deleteProductCart }) {
    const cart = useSelector(store => store.cart)

    const [showCart, setShowCart] = useState(false);
    const [updated, setUpdated] = useState(true)
    let handler = useRef(null)


    useEffect(() => {
        if (showCart) {
            handler.current.className = "row showCart"
        } else {
            handler.current.className = "row dontShowCart"
        }
        console.log(handler.current)
    }, [showCart])

    function handleCart() {
        setShowCart(prevShowCart => !prevShowCart)
    }

    useEffect(()=>{
        
            setUpdated(true)
            console.log(updated)
            setTimeout(()=>{
            setUpdated(false)
            console.log(updated)
        },600)
    },[cart])


    return (
        <div>
            <div className="row cartOpenButton">
                <button onClick={handleCart} style={{ backgroundColor: "transparent", border: "none", borderRadius: "10%", }}>
                    <img width={200} src={carritoImagen} alt="" />
                </button>
                {cart.length &&<button className={`cartCounter ${updated ? "updatedCart" : ''}`}>{cart.length}</button>}
            </div>
            <div ref={handler} className="row dontShowCart">
                <Cart handleCart={handleCart} deleteProductCart={deleteProductCart} data={pedido} />
            </div>

        </div>
    );
}

export default CartHandler;
