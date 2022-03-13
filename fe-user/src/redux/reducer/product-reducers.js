import { GET_PRODUCT, GET_CATEGORY, GET_PRODUCT_DETAIL} from "../action/type";

const INITIAL_STATE = {
    data: [],
    category: [],
    product_detail: []
}

export const ProductReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_PRODUCT:
            return { ...state, data: action.payload }
        case GET_CATEGORY:
            return { ...state, category: action.payload }
        case GET_PRODUCT_DETAIL:
            return { ...state, product_detail: action.payload }
        default:
            return state;
    }
}