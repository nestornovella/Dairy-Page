import { useState } from 'react';
import './../../App.css';
import { useSelector } from 'react-redux';



function AlertProduct({inCart}) {
    const [show, setShow]=useState(false)

    

    
  
    return (
        <div className='alertCard'>
            {inCart ? <p className='showAlert'>el producto ya se ingreso</p> : <p className='showAlert'>producto guardado</p> }
        </div>
    );
}

export default AlertProduct;