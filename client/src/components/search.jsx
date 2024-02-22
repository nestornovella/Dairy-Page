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
            <div className="col-sm-12 col-xl-9  p-3 rounded-4" style={{backgroundColor:"#C62271"}}>
                <div className="form-group barraBusqueda">
                    <input ref={inputValue} type="text"
                        className="form-control mx-2"  name="" id="" aria-describedby="helpId" placeholder="" />
                    <button onClick={() => setValue()} type="button" className="btn btn-dark mx-2">buscar</button>
                    <button onClick={() => cleanInput()} type="button" className="btn btn-dark mx-2"><img width={30} src="https://cdn-icons-png.freepik.com/512/3221/3221897.png" alt="" /></button>
                
                </div>
            </div>
        </div>
    );
}

export default Search;