import { useEffect, useState } from "react";
import Cart from "./cart";
import CartCard from "./cartCard";
import { useDispatch, useSelector} from "react-redux"
import { setDiscount, setTotal } from "../../redux/actions/actions";


function CartRender({ deleteProductCart }) {
    const dispatch = useDispatch()
    const cart = useSelector( store => store.cart)
    

   
    console.log(cart, "cart====")
   
    useEffect(()=>{
        if(cart.length){
            dispatch(setTotal(cart.reduce((acc, curr)=> acc + curr.subTotal, 0)))
            dispatch(setDiscount(cart.reduce((acc, curr) =>  curr.totalDisc + acc, 0)))
        }
    },[cart])

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
                    {cart && cart.map((prod )=> {
                        return <CartCard key={prod.id} discount={prod.discount} variety={prod.variety} selected={prod.selected} id={prod.id}  deleteProductCart={deleteProductCart} 
                        price={prod.price} image={prod.image} name={prod.name} />
                    })}
                </tbody>
            </table>
            
        </div>
    );
}

export default CartRender;