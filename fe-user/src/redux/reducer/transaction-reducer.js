import { 
    START_GET_TRANSACTION,
    GET_TRANSACTION,
    END_GET_TRANSACTION 
} from "../action/type";

const INITIAL_STATE = {
    data: [],
    loading: false
}

export const TransactionReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case START_GET_TRANSACTION:
            return { ...state, loading: true }
        case GET_TRANSACTION:
            return { ...state, data: action.payload }
        case END_GET_TRANSACTION:
            return { ...state, loading: false }
        default:
            return state
    }
}