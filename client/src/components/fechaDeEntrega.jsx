import currentDate from "../hooks/parseDate";




function Entrega() {

    
    
    return (
        <div className="row fechaEntregaContainer ">
            {<p className="m-0">se toma pedidos para el
                <span style={{ color: 'yellow', fontSize: "18px" }}>👉  {currentDate()}</span>
            </p>}
        </div>
    );
}

export default Entrega;