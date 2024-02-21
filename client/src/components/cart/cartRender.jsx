import { useEffect, useState } from "react";
import Cart from "./cart";
import CartCard from "./cartCard";
import { useDispatch, useSelector} from "react-redux"
import { setTotal, updateCart } from "../../redux/actions/actions";


function CartRender({ data, deleteProductCart }) {
    const [pedido, setPedido] = useState([])
    const dispatch = useDispatch()
    const cart = useSelector( store => store.cart)
    

    useEffect(()=>{
        //dispatch(updateCart(pedido))
    },[pedido])

    function agregarPedido(prod) {
            // dispatch(updateCart(
         
            // [...cart.filter(pro => pro.name != prod.name), prod]
            // ))
        
    }

    if(cart.length){
        dispatch(setTotal(cart.reduce((acc, curr)=> acc + curr.subTotal, 0)))
    }

    // setTimeout(()=>{
    //     console.log(pedido)
    // },200)
    return (
        <div className="row cartRenderContainer"  >
            <table className="table text-center  " >
                <thead >
                    <tr >
                        <th >Img.</th>
                        <th>Prod</th>
                        <th>-</th>
                        <th>Cant.</th>
                        <th>+</th>
                        <th>Elim.</th>
                    </tr>
                </thead>
                <tbody>
                    {cart && cart.map((prod, index )=> {
                        return <CartCard key={index} agregarPedido={agregarPedido} deleteProductCart={deleteProductCart} 
                        price={prod.price} image={prod.image} name={prod.name} />
                    })}
                </tbody>
            </table>
            
        </div>
    );
}

export default CartRender;