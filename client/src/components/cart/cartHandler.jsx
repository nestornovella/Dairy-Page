import React, { useEffect, useRef, useState } from "react";
import Cart from "./cart";
import carritoImagen from "../../assets/carrito.png"
import './../../App.css';

function CartHandler({ pedido, deleteProductCart }) {
    const [showCart, setShowCart] = useState(false);
    let handler = useRef(null)

    useEffect(()=>{
        if(showCart){
            handler.current.className = "row showCart"
        }else{
            handler.current.className = "row dontShowCart"
        }
        console.log(handler.current)
    },[showCart])

    function handleCart(){
        setShowCart(prevShowCart => !prevShowCart)
    }


    return (
        <div>
            <div className="row cartOpenButton"><button onClick={handleCart} style={{backgroundColor:"transparent", border:"none", borderRadius:"10%",}}><img width={200} src={carritoImagen} alt="" /></button></div>
            <div ref={handler} className="row dontShowCart">
                <Cart handleCart={handleCart} deleteProductCart={deleteProductCart} data={pedido} />
            </div>

        </div>
    );
}

export default CartHandler;
