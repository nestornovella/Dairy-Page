import fecha from "../data/fechaDeEntrega.json"


function Entrega() {
    return (
        <div className="row fechaEntregaContainer ">
            {fecha.active && <p className="m-0">se toma pedidos para el
                <span style={{ color: 'yellow', fontSize: "25px" }}>👉  {fecha.date}</span>
            </p>}
        </div>
    );
}

export default Entrega;