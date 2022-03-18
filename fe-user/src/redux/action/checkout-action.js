import Axios from "axios";
import { GET_PRODUCT, GET_CATEGORY, GET_PRODUCT_DETAIL, GET_WAREHOUSE, START_GET_PRODUCT_DETAIL, END_GET_PRODUCT_DETAIL } from "./type";

const API_URL = "http://localhost:2000";

export const addTransaction = (params) => {
    return async (dispatch) => {
        try {
            const query = '/addTransaction';
            const respond = await Axios.post(API_URL + query)
        } catch (error) {
            console.log(error);
        }
    }
}