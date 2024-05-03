import { useSelector } from "react-redux";
import fecha from "../data/fechaDeEntrega.json"
import sellerList from '../data/vendedores.json'

function useSendData() {
    const cart = useSelector(store => store.cart);
    const totalCart = useSelector(store => store.totalCart);
    const totalDiscount = useSelector(store => store.discount)
    const seller = useSelector(store => store.seller)
    const foundedSeller = sellerList.filter( sel => sel.name.includes(seller))
    const date = new Date()
    const month = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    const actualDate = date.getDate() + " " + month[+date.getMonth()] + " " + date.getFullYear()



    let template = `::::::PEDIDO ${actualDate}::::::%0A`;
    cart.forEach(prod => {
        template += ` %0APRODUCTO: ${prod.name} CANTIDAD: ${prod.cantidad} SUBTOTAL: ${prod.subTotal}%0A `;

    });
    template += `%0A-----------------------------------------------------------%0ADescuento: -${totalDiscount}`
    template += `%0A-----------------------------------------------------------%0ATotal: ${totalCart - totalDiscount}`
    template += `%0A-----------------------------------------------------------%0ASe entrega apartir del Lunes ${fecha.date}`


    let template2 = `::::::PEDIDO ${actualDate}::::::%0A`
    cart.forEach(prod => {
        template2 += ` %0APRODUCTO: ${prod.name} CANTIDAD: ${prod.cantidad}`;

    });
    template2 += `%0A-----------------------------------------------------------%0ASe entrega apartir del Lunes ${fecha.date}`

    return foundedSeller[0].showPrice ? template : template2;
}

export default useSendData;