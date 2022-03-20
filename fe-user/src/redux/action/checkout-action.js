import Axios from "axios";
import { 
    ADD_TRANSACTION,
    START_GET_TRANSACTION,
    GET_TRANSACTION,
    END_GET_TRANSACTION,
    UPLOAD_RECEIPT
} from "./type";

const API_URL = "http://localhost:2000";

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
            const respond = await Axios.get(API_URL + query);

            dispatch({ type: GET_TRANSACTION, payload: respond.data.data });
            dispatch({ type: END_GET_TRANSACTION });
        } catch (error) {
            dispatch({ type: END_GET_TRANSACTION });
            console.log(error);
        }
    }
}

export const updateReceipt = (invoice, body) => {
    return async (dispatch) => {
        try {
            const query = `/uploadReceipt/${invoice}`;
            const respond = Axios.post(API_URL + query, body);

            dispatch({ type: UPLOAD_RECEIPT, payload: respond.data });
        } catch (error) {
            console.log(error);
        }
    }
}