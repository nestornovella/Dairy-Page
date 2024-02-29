import { useSelector } from 'react-redux';
import './../../App.css';
import CartRender from './cartRender';
import useSendData from '../../hooks/templateWhatsapp';



function Cart({ handleCart, data, deleteProductCart }) {
    
    const cartProducts = useSelector(store => store.cart)
    const totalCart = useSelector(store => store.totalCart)
    const send = `https://api.whatsapp.com/send?phone=+541125420570&text=${useSendData()}`

    return (
        <div className="cartContainer container">
            <div onClick={handleCart} className="row"><button className='btn p-3' style={{backgroundColor:'#C62271', color:"white", fontWeight:"900"}}>Cerrar</button></div>
            <CartRender deleteProductCart={deleteProductCart} data={data} />
            <div className='row'>
                {
                    cartProducts.length 
                        ?
                        <div className='row d-flex m-auto'>
                            {cartProducts.length && <h2 className="text-light">Total: {totalCart}</h2>}
                            <a className='btn btn-primary' href={send} ><img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png" alt="" />Enviar Pedido</a>
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