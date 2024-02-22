export const actionTypes ={
    CHANGE_CART_STATUS:"CHANGE_CART_STATUS",
    UPDATE_CART:'UPDATE_CART',
    ADD_TO_CART:'ADD_TO_CART',
    DELETE_PRODUCT:'DELETE_PRODUCT',
    SET_TOTAL:'SET_TOTAL',
    UPDATE_UNITS_TOTAL:'UPDATE_UNITS_TOTAL'
}



export function changeCartStatus(){
    return {
        type: actionTypes.CHANGE_CART_STATUS
    }
}

export function updateCart(prod){
    return {
        type: actionTypes.UPDATE_CART,
        payload: prod
    }
}

export function addToCart(product){
    return {
        type: actionTypes.ADD_TO_CART,
        payload: product
    }
}

export function deleteProduct(id){
    return {
        type: actionTypes.DELETE_PRODUCT,
        payload: id
    }

}

export function updateUnitsTotal(valuesObject){
    return{
        type: actionTypes.UPDATE_UNITS_TOTAL,
        payload:valuesObject
    }
}

export function setTotal(totalValue){
    return {
        type: actionTypes.SET_TOTAL,
        payload: totalValue
    }
}