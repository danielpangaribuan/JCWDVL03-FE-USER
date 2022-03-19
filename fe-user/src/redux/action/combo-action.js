import Axios from "axios";
import { GET_COMBO_BANK, START_GET_COMBO_BANK, END_GET_COMBO_BANK } from "./type";

const API_URL = process.env.REACT_APP_API_URL;

export const getComboBank = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: START_GET_COMBO_BANK });
            const query = '/comboBank';
            const respond = await Axios.get(API_URL + query);
            dispatch({ type: GET_COMBO_BANK, payload: respond.data.data });

            dispatch({ type: END_GET_COMBO_BANK });
        } catch(error) {
            dispatch({ type: END_GET_COMBO_BANK });
            console.log(error)
        }
    }
}