/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { deleteProduct, updateUnitsTotal } from "../../redux/actions/actions";
import { useDispatch } from "react-redux";


function CartCard({variety, selected, id, image, name, price, discount }) {
    const [units, setUnits]= useState(1)
    const dispatch = useDispatch()

    function addUnist(){
        setUnits(prev=> prev+1)
    }

    
    function restUnits(){
        setUnits(prev => (prev > 1 ) ? prev - 1 :1)
    }

    useEffect(()=>{
        // eslint-disable-next-line react/prop-types
        let disc = {total:0}
        let subTotal = price.slice(1).trim() * units
        if(discount.active){
            if(discount.type == "cuantity"){
                const discMultilier = Math.floor(units / discount.disc[0]) 
                disc.total = discMultilier * price.slice(1).trim()
            }
            if(discount.type == "porcent"){
                disc.total = (price.slice(1).trim() * discount.disc) / 100 * units
            }
        }

        dispatch(updateUnitsTotal({name, cantidad:units, subTotal, selected, totalDisc: disc }))
       
    },[units])

    return (
            <tr >
                <td><img width={60} src={image[selected]} alt="" /></td>
                <td><p className="text-secondary textCart" style={{marginTop:'10px'}}>{variety ? `${name} ${variety[selected]}` : name}</p></td>
                <td><button style={{width:"40px"}} onClick={restUnits} className="btn btn-outline-primary rounded-5 border-2 ">-</button></td>
                <td><p className="text-secondary textCart" style={{marginTop:'10px'}}>Cant: <span>{units}</span></p></td>
                <td><button style={{width:"40px"}} onClick={addUnist} className="btn btn-outline-primary border-2  rounded-5">+</button></td>
                <td><button  onClick={()=>dispatch(deleteProduct(id+selected))} className="btn btn- rounded-4"><img width={30}src="https://cdn-icons-png.flaticon.com/512/323/323609.png" alt="" /></button></td>
            </tr>
           
         
    );
}

export default CartCard;
   