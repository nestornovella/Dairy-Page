import { useSelector } from "react-redux";

function useSendData() {
    const cart = useSelector(store => store.cart);
    const totalCart = useSelector(store => store.totalCart);

    let template = '::::::PEDIDO::::::%0A';

    console.log(cart);

    cart.forEach(prod => {
        template += ` %0APRODUCTO: ${prod.variety ? (prod.name + " " + prod.variety[prod.selected] ): prod.name} CANTIDAD: ${prod.cantidad} SUBTOTAL: ${prod.subTotal}%0A `;
        
    });

    template += `-----------------------------------------------------------%0ATotal: ${totalCart}` 
    

    return template;
}

export default useSendData;