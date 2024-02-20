import { useEffect, useState } from "react";
import { deleteProduct, updateUnitsTotal } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";



function CartCard({agregarPedido, image, name, price, deleteProductCart }) {
    const [units, setUnits]= useState(1)
    const dispatch = useDispatch()

    function addUnist(){
        setUnits(prev=> prev+1)
    }

    function restUnits(){
        setUnits(prev => (prev > 1 ) ? prev - 1 :1)
    }

    useEffect(()=>{
        const subTotal = price.slice(1).trim() * units
        dispatch(updateUnitsTotal({name, cantidad:units, subTotal}))
        agregarPedido({image,name, units, price, subTotal})
    },[units])

    return (
            <tr>
                <td><img width={60} src={image} alt="" /></td>
                <td> <p className="text-secondary">{name}</p></td>
                <td><button onClick={restUnits} className="btn btn-dark">-</button></td>
                <td><p>Unidades: <span>{units}</span></p></td>
                <td><button onClick={addUnist} className="btn btn-dark">+</button></td>
                <td><button onClick={()=>dispatch(deleteProduct(name))} className="btn  rounded-4"><img width={30}src="https://cdn-icons-png.flaticon.com/512/7347/7347206.png" alt="" /></button></td>
            </tr>
           
         
    );
}

export default CartCard;
   {/* <img width={40} src={image} alt="" />
            <p className="text-secondary">{name}</p>
            <button className="btn">+</button>
            <p>cantidad <span>0</span></p>
            <button className="btn">-</button>
            <button className="btn btn-danger">X</button> */}