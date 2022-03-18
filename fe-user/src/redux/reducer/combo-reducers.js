import { GET_COMBO_BANK, START_GET_COMBO_BANK, END_GET_COMBO_BANK } from "../action/type";

const INITIAL_STATE = {
    bank: [],
    bankLoading: false
}

export const ComboReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_COMBO_BANK:
            return { ...state, bank: action.payload }
        case START_GET_COMBO_BANK:
            return { ...state, bankLoading: true }
        case END_GET_COMBO_BANK:
            return { ...state, bankLoading: false }
        default:
            return state;
    }
}