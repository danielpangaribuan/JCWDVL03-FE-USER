import Axios from "axios";
import { GET_PRODUCT, GET_CATEGORY, GET_PRODUCT_DETAIL } from "./type";

const API_URL = "http://localhost:2000";

export const getProduct = (params) => {
    return async (dispatch) => {
        try {
            const query = '/products';
            const respond = await Axios.get(API_URL + query, { params });

            dispatch({ type: GET_PRODUCT, payload: respond.data.data });
        } catch (error) {
            console.log(error)
        }
    }
}

export const getCategory = () => {
    return async (dispatch) => {
        try {
            const query = '/category';
            const respond = await Axios.get(API_URL + query);

            dispatch({ type: GET_CATEGORY, payload: respond.data.data });
        } catch (error) {
            console.log(error);
        }
    }
}

export const getProductDetail = (id) => {
    return async (dispatch) => {
        try {
            const query = `/productsDetail/${id}`;
            const respond = await Axios.get(API_URL + query);

            dispatch({ type: GET_PRODUCT_DETAIL, payload: respond.data.data });
            console.log(respond.data.data);
        } catch (error) {
            console.log(error)
        }
    }
}