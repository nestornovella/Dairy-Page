import { useSelector } from "react-redux";

function useSendData() {
    const cart = useSelector(store => store.cart);
    const totalCart = useSelector(store => store.totalCart);
    const date = new Date()
    const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const actualDate = date.getDay() + " " + month[+date.getMonth()]+ " " + date.getFullYear()



    let template = `::::::PEDIDO ${actualDate}::::::%0A`;
    cart.forEach(prod => {
        template += ` %0APRODUCTO: ${prod.variety ? (prod.name + " " + prod.variety[prod.selected]) : prod.name} CANTIDAD: ${prod.cantidad} SUBTOTAL: ${prod.subTotal}%0A `;

    });

    template += `-----------------------------------------------------------%0ATotal: ${totalCart}`


    return template;
}

export default useSendData;