import { GET_PRODUCT, GET_CATEGORY } from "../action/type";

const INITIAL_STATE = {
    data: [],
    category: []
}

export const ProductReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_PRODUCT:
            return { ...state, data: action.payload }
        case GET_CATEGORY:
            return { ...state, category: action.payload }
        default:
            return state;
    }
}