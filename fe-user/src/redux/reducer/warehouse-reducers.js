import { GET_WAREHOUSE } from "../action/type";

const INITIAL_STATE = {
    data: []
}

export const WarehouseReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_WAREHOUSE:
            return { ...state, data: action.payload }
        default:
            return state
    }
}