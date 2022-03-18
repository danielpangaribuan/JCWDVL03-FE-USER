import { GET_PRODUCT, GET_CATEGORY, GET_PRODUCT_DETAIL, START_GET_PRODUCT_DETAIL, END_GET_PRODUCT_DETAIL } from "../action/type";

const INITIAL_STATE = {
    data: [],
    category: [],
    product_detail: [],
    checkout: [],
    product_detail_loading: false
}

export const ProductReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_PRODUCT:
            return { ...state, data: action.payload }
        case GET_CATEGORY:
            return { ...state, category: action.payload }
        case GET_PRODUCT_DETAIL:
            return { ...state, product_detail: action.payload }
        case START_GET_PRODUCT_DETAIL:
            return { ...state, product_detail_loading: true }
        case END_GET_PRODUCT_DETAIL:
            return { ...state, product_detail_loading: false }
        case "GET_CHECKOUT_ITEM":
            return { ...state, checkout_item: action.payload }
        default:
            return state;
    }
}