import Axios from "axios";
import { 
    ADD_TRANSACTION,
    START_GET_TRANSACTION,
    GET_TRANSACTION,
    END_GET_TRANSACTION 
} from "./type";

const API_URL = process.env.REACT_APP_API_URL;

export const addTransaction = (body) => {
    return async (dispatch) => {
        try {
            const query = '/addTransaction';
            const respond = await Axios.post(API_URL + query, body);

            dispatch({ type: ADD_TRANSACTION, payload: respond.data });
        } catch (error) {
            console.log(error);
        }
    }
}

export const getTransaction = (user_id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: START_GET_TRANSACTION });
            const query = `/getTransactionStatus/${user_id}`;
            const respond = await Axios.get(API_URL, query);

            dispatch({ type: GET_TRANSACTION, payload: respond.data.data });
            dispatch({ type: END_GET_TRANSACTION });
        } catch (error) {
            dispatch({ type: END_GET_TRANSACTION });
            console.log(error);
        }
    }
}