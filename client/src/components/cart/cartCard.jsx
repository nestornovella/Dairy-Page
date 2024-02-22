import { useEffect, useState } from "react";
import { deleteProduct, updateUnitsTotal } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";
import restar from "../../assets/restar.png"
import sumar from "../../assets/sumar.png"

function CartCard({agregarPedido, variety, selected, id, image, name, price }) {
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
        dispatch(updateUnitsTotal({name, cantidad:units, subTotal, selected}))
       
    },[units])

    return (
            <tr >
                <td><img width={60} src={image[selected]} alt="" /></td>
                <td><p className="text-secondary textCart" style={{marginTop:'10px'}}>{variety ? `${name} ${variety[selected]}` : name}</p></td>
                <td><button onClick={restUnits} className=" " style={{border:'none', background:'transparent'}}><img width={35} src={sumar} alt="" /></button></td>
                <td><p className="text-secondary textCart" style={{marginTop:'10px'}}>Cant: <span>{units}</span></p></td>
                <td><button onClick={addUnist} className=" " style={{border:'none', background:'transparent'}}><img width={35} src={restar} alt="" /></button></td>
                <td><button onClick={()=>dispatch(deleteProduct(id+selected))} className="btn  rounded-4"><img width={30}src="https://cdn-icons-png.flaticon.com/512/7347/7347206.png" alt="" /></button></td>
            </tr>
           
         
    );
}

export default CartCard;
   