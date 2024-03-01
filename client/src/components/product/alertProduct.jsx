import { useState } from 'react';
import './../../App.css';
import { useSelector } from 'react-redux';



function AlertProduct({value}) {
    const [show, setShow]=useState(false)

    console.log(value)

    
  
    return (
        <div className='alertCard'>
            <p className='showAlert' style={{backgroundColor:value.color}}>{value.message}</p>
        </div>
    );
}

export default AlertProduct;