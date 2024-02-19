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
        <div className="row d-flex justify-content-center mt-5 " >
            <div className="col-sm-12 col-xl-9 bg-dark p-3 rounded-4">
                <div class="form-group d-flex">
                    <input ref={inputValue} type="text"
                        class="form-control mx-2" name="" id="" aria-describedby="helpId" placeholder="" />
                    <button onClick={() => setValue()} type="button" class="btn btn-outline-primary mx-2">buscar</button>
                    <button onClick={() => cleanInput()} type="button" class="btn btn-outline-primary mx-2">🧹</button>
                
                </div>
            </div>
        </div>
    );
}

export default Search;