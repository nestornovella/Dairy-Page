import { actionTypes } from "../actions/actions";


const initailState = {
    cart: [],
    totalCart: 0,
    handleCart: false
}

function rootReducer(state = initailState, actions) {
    switch (actions.type) {
        case actionTypes.CHANGE_CART_STATUS:
            return ({
                ...state,
                handleCart: !state.handleCart
            })
        case actionTypes.UPDATE_CART:
            return ({
                ...state,
                cart: actions.payload
            })
        case actionTypes.ADD_TO_CART:
            if(state.cart.find(prod => prod.id == actions.payload.id && prod.name == actions.payload.name)){
                return{
                    ...state
                }
            }
            return ({
                ...state,
                cart: [...state.cart, { ...actions.payload, subTotal: 0, cantidad: 1, selected: +actions.payload.selected }]
            })
        case actionTypes.DELETE_PRODUCT:
            return {
                ...state,
                cart: [...state.cart].filter(prod => (prod.id + prod.selected) != actions.payload)
            }

        case actionTypes.SET_TOTAL:
            return {
                ...state,
                totalCart: actions.payload
            }
        case actionTypes.UPDATE_UNITS_TOTAL:

            const cartChanged = [...state.cart].map(e => {
                if((e.name + e.selected) == (actions.payload.name + actions.payload.selected)){
                    return {...e, cantidad: actions.payload.cantidad, subTotal: actions.payload.subTotal}
                }else return e
            })
            return {
                ...state,
                cart: cartChanged
            }

        default:
            return state;
    }
}


export default rootReducer 