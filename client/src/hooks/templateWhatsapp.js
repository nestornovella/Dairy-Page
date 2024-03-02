import { useSelector } from "react-redux";
import fecha from "../data/fechaDeEntrega.json"

function useSendData() {
    const cart = useSelector(store => store.cart);
    const totalCart = useSelector(store => store.totalCart);
    const date = new Date()
    const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const actualDate = date.getDate() + " " + month[+date.getMonth()]+ " " + date.getFullYear()



    let template = `::::::PEDIDO ${actualDate}::::::%0A`;
    cart.forEach(prod => {
        template += ` %0APRODUCTO: ${prod.name} CANTIDAD: ${prod.cantidad} SUBTOTAL: ${prod.subTotal}%0A `;

    });

    template += `%0A-----------------------------------------------------------%0ATotal: ${totalCart}`
    template += `%0ASe entrega apartir del Lunes ${fecha.date}`


    return template;
}

export default useSendData;