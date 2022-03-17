import Axios from "axios";
import { 
    GET_PROVINCE, 
    START_GET_PROVINCE, 
    END_GET_PROVINCE, 
    GET_CITY_BY_PROV_ID, 
    START_GET_CITY_BY_PROV_ID, 
    END_GET_CITY_BY_PROV_ID,
    START_GET_ONGKIR,
    GET_ONGKIR,
    END_GET_ONGKIR
} from "./type";

const API_URL = "http://localhost:2000";

export const getProvince = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: START_GET_PROVINCE })
            const query = '/provinsi';
            const respond = await Axios.get(API_URL + query);

            dispatch({ type: GET_PROVINCE, payload: respond.data.rajaongkir.results });
            // console.log(respond.data.rajaongkir.results);
            dispatch({ type: END_GET_PROVINCE })
        } catch (error) {
            dispatch({ type: END_GET_PROVINCE })
            console.log(error)
        }
    }
}

export const getCityByProvID = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: START_GET_CITY_BY_PROV_ID })
            const query = `/kota/${id}`;
            const respond = await Axios.get(API_URL + query);

            dispatch({ type: GET_CITY_BY_PROV_ID, payload: respond.data.rajaongkir.results });
            dispatch({ type: END_GET_CITY_BY_PROV_ID })
        } catch (error) {
            dispatch({ type: END_GET_CITY_BY_PROV_ID })
            console.log(error);
        }
    }
}

export const getDelivery = (destination, params) => {
    return async (dispatch) => {
        try {
            // %5B1,2,3%5D
            dispatch({ type: START_GET_ONGKIR });
            console.log(params)
            const query = `/ongkos/${destination}`;
            const respond = await Axios.get(API_URL + query, { params });

            dispatch({ type: GET_ONGKIR, payload: respond.data.data });
            console.log(respond.data.data)
            dispatch({ type: END_GET_ONGKIR });
        } catch (error) {
            dispatch({ type: END_GET_ONGKIR });
            console.log(error);
        }
    }
}