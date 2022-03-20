import { 
    START_GET_TRANSACTION,
    GET_TRANSACTION,
    END_GET_TRANSACTION,
    START_UPLOAD_RECEIPT,
    END_UPLOAD_RECEIPT
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
        case START_UPLOAD_RECEIPT:
            return { ...state, loading: true }
        case END_UPLOAD_RECEIPT:
            return { ...state, loading: false}
        default:
            return state
    }
}