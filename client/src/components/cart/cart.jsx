import { useSelector } from 'react-redux';
import './../../App.css';
import CartRender from './cartRender';
import useSendData from '../../hooks/templateWhatsapp';
import fecha from "../../data/fechaDeEntrega.json"
import sellersList from "../../data/vendedores.json"
import { useEffect } from 'react';

function Cart({ handleCart, data, deleteProductCart }) {
    
    const seller = useSelector(store => store.seller)
    const phoneNumber = useSelector( store => store.phoneNumber)


    
    const cartProducts = useSelector(store => store.cart)
    const totalCart = useSelector(store => store.totalCart)
    const discount = useSelector(store => store.discount)
    let send = `https://api.whatsapp.com/send?phone=+${phoneNumber}&text=${useSendData()}`
    console.log("phone number: ", send)


    

    console.log(discount)
    return (
        <div className="cartContainer container">
            <div onClick={handleCart} className="row"><button className='btn p-3' style={{ backgroundColor: '#C62271', color: "white", fontWeight: "900" }}>Cerrar</button></div>
            <CartRender deleteProductCart={deleteProductCart} data={data} />
            <div className='row'>
                {
                    cartProducts.length
                        ?
                        <div className='row d-flex m-auto'>
                            {cartProducts.length &&
                                <>

                                    {discount ? <div className='d-flex '><h2 className="text-secondary totalTachado">Total: {totalCart} </h2> <h2 className='text-light mx-5'>Total: {totalCart - discount}</h2></div>
                                        : <h2 className="text-light">Total: {totalCart}</h2>
                                    }
                                    <h2 className='text-danger'>Descuento: -{discount} </h2>
                                </>

                            }
                            <a className='btn btn-primary' href={send} ><img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png" alt="" />Enviar Pedido</a>
                            <p className='text-light'>los pedidos se entregan apartir del {fecha.date} </p>
                        </div>

                        :
                        <img src="https://www.distritomoda.com.ar/sites/all/themes/omega_btob/images/carrito_vacio_nuevo.png" alt="" />
                    // otr imagen "https://store.wom.cl/static/emptyCart-330059ad3236dbc4007efe69452dc691.png"
                }
            </div>
        </div>
    );
}

export default Cart;