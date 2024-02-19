import { useRef } from "react";



function Search({ callback }) {
    const inputValue = useRef(null)


    function setValue() {
        callback(inputValue.current.value)
    }

    function cleanInput(){
        inputValue.current.value = ""
        callback(inputValue.current.value)
    }


    return (
        <div className="row d-flex justify-content-center mt-2 mb-0" >
            <img style={{maxWidth:"500px"}} src="https://vendiendoofertas.files.wordpress.com/2016/07/logo-vendiendo-ofertas-fondo-transparente1.png" alt="" />
            <div className="col-sm-12 col-xl-9 bg-dark p-3 rounded-4">
                <div className="form-group d-flex">
                <a href="https://api.whatsapp.com/send?phone=+541125420570"><img width={50} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png" alt="" /></a>
                    <input ref={inputValue} type="text"
                        className="form-control mx-2" name="" id="" aria-describedby="helpId" placeholder="" />
                    <button onClick={() => setValue()} type="button" className="btn btn-outline-primary mx-2">buscar</button>
                    <button onClick={() => cleanInput()} type="button" className="btn btn-outline-primary mx-2">🧹</button>
                
                </div>
            </div>
        </div>
    );
}

export default Search;