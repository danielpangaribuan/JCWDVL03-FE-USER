import { 
    GET_PROVINCE, 
    START_GET_PROVINCE, 
    END_GET_PROVINCE, 
    START_GET_CITY_BY_PROV_ID, 
    GET_CITY_BY_PROV_ID, 
    END_GET_CITY_BY_PROV_ID,
    START_GET_ONGKIR,
    GET_ONGKIR,
    END_GET_ONGKIR
} from "../action/type";

const INITIAL_STATE = {
    province: [],
    city: [],
    loadingProv: false,
    loadingCity: false,
    checkoutDetail: [],
    loadingCheckoutDetail: false
}

export const LocationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case START_GET_PROVINCE:
            return { ...state, loadingProv: true }
        case GET_PROVINCE:
            return { ...state, province: action.payload }
        case END_GET_PROVINCE:
            return { ...state, loadingProv: false }


        case START_GET_CITY_BY_PROV_ID:
            return { ...state, loadingCity: true }
        case GET_CITY_BY_PROV_ID:
            return { ...state, city: action.payload }
        case END_GET_CITY_BY_PROV_ID:
            return { ...state, loadingCity: false }


        case START_GET_ONGKIR:
            return { ...state, loadingCheckoutDetail: true }
        case GET_ONGKIR:
            return { ...state, checkoutDetail: action.payload }
        case END_GET_ONGKIR:
            return { ...state, loadingCheckoutDetail: false }
        default:
            return state
    }
}