import './../../App.css';
import logoAddCart from "../../assets/logoAddCart.png"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { addToCart } from '../../redux/actions/actions';
import AlertProduct from './alertProduct';


function ProductCard({ prod, price, weight, name, image, isNew }) {
    const dispatch = useDispatch()
    const [variety, setVariety] = useState(0)
    const [show, setShow] = useState(false)
    const [alertShow, setAlertShow]= useState(false)
    const [added, setAdded]= useState(false)

    const cart = useSelector( store => store.cart)

    const alertCard = useRef(null) 

    function handleVariety(event) {
        setVariety(event.target.value)
        setShow(!show)
    }

    function handleShow() {
        setShow(!show)
    }

    function showAlert(){
        setAdded(true)
        setTimeout(()=>{
            setAdded(false)
        },1800)
    }

    useEffect(()=>{
        setAlertShow(true)
        setTimeout(()=>{
            setAlertShow(false)
        },1900)
    },[cart.length])

    useEffect(() => {
        setVariety(0)
        setShow(false)
    }, [prod])

 
    return (
        <div className="col-xl-4 small col-sm-12 cardContainer"  >
            {isNew && <img className='newImage' src="https://www.desab.com.ar/wp-content/uploads/2020/11/producto-nuevo-png-1-300x297.png" alt="" />}
            {prod.active ? <button onClick={() => {dispatch(addToCart({ ...prod, selected: variety, name:`${prod.name} ${prod.variety[variety]}` })); showAlert()}} className='addButtonProduct'><img width={40} src={logoAddCart} alt="" /></button> : <p className='inactiveProduct'>Sin Stock</p>}
            <div className="card mb-3 "  >
                <div className="row g-0 d-flex align-items-center">
                    <div className="col-md-6">
                        <img src={image[variety]} width={250} className="img-fluid rounded-start" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{!prod.variety ? name : `${name} ${prod.variety[variety]}`}</h5>
                            <p className="card-text">Imagen de caracter ilustrativo. el peso de los productos es el que se encuentra especificado</p>
                            <div className="row d-flex justify-content-center p-2">
                                <div className="col-xl-12 d-flex justify-content-around ">
                                    <div type="button" className="btn btn-primary  ">{weight}</div>
                                    <div type="button" className="btn btn-secondary ">{price}</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                {alertShow && added && <AlertProduct />}
            </div>
            <div>
                {prod.variety && <div className="dropdown selectVarity">
                    <button onClick={handleShow} className="p-1 btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        variedad
                    </button>
                    <ul className={` dropdown-menu ${show ? "show" : ""}`}>
                        {prod.variety.map((e, index) => {
                            return <li key={index}><button className="dropdown-item" value={index} onClick={handleVariety}>{e}</button></li>})}
                    </ul>
                </div>}
            </div>
        </div>
    );
}

export default ProductCard;