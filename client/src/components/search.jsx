import { useRef } from "react";
import enviosLogo from "../assets/enviosLogo.png"


function Search({ callback }) {
    const inputValue = useRef(null)


    function setValue() {
        callback(inputValue.current.value)
    }

    function cleanInput() {
        inputValue.current.value = ""
        callback(inputValue.current.value)
    }


    return (
        <div className="row d-flex justify-content-center mt-3 mb-0" >
            <div className="row mb-5 d-flex justify-content-center initialLogo">
                <img style={{ maxWidth: "500px" }} src="https://vendiendoofertas.files.wordpress.com/2016/07/logo-vendiendo-ofertas-fondo-transparente1.png" alt="" />
            </div>
            <div className="col-sm-12 col-xl-9  p-3 rounded-4 barraBusquedaContainer" >
                <div className="form-group barraBusqueda">
                    <input ref={inputValue} type="text"
                        className="form-control  mx-2" name="" id="" aria-describedby="helpId" placeholder="" />
                    <button onClick={() => setValue()} type="button" className="btn btn-dark mx-2"><img width={30} src="https://cdn-icons-png.flaticon.com/512/4305/4305549.png" alt="" /></button>
                    <button onClick={() => cleanInput()} type="button" className="btn btn-dark mx-2"><img width={30} src="https://cdn-icons-png.freepik.com/512/3221/3221897.png" alt="" /></button>
                    <div className="row enviosLogo">
                        <img src={enviosLogo} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;