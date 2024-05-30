



function Entrega() {

    const currentDate = () => {
        const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']
        const currDate = new Date()
        // quiero obtener el proximo dia lunes
        const nextMonday = new Date(currDate.setDate(currDate.getDate() + (1 + 7 - currDate.getDay()) % 7));
        const date = nextMonday.getDate().length > 1 ? nextMonday.getDate() : `0${nextMonday.getDate()}`;
        const month = meses[nextMonday.getMonth()];
        return `Lunes ${date} ${month}`
    }
    
    return (
        <div className="row fechaEntregaContainer ">
            {<p className="m-0">se toma pedidos para el
                <span style={{ color: 'yellow', fontSize: "18px" }}>👉  {currentDate()}</span>
            </p>}
        </div>
    );
}

export default Entrega;