import Axios from "axios";
import { ADD_ADDRESS_USER, START_ADD_ADDRESS_USER, END_ADD_ADDRESS_USER } from "./type";

const API_URL = "http://localhost:2000";

export const addAddressUser = (body) => {
    return async (dispatch) => {
        try {
            dispatch({ type: START_ADD_ADDRESS_USER });
            const query = `/addAddress`;
            const respond = await Axios.post(API_URL + query, body);

            dispatch({ type: ADD_ADDRESS_USER, payload: respond.data.data });
            dispatch({ type: END_ADD_ADDRESS_USER });
        } catch (error) {
            console.log(error);
            dispatch({ type: END_ADD_ADDRESS_USER });
        }
    }
}