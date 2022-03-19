import Axios from "axios";
import { START_AUTH, END_AUTH, USER_LOGIN, USER_LOGOUT } from "./type";

const API_URL = process.env.REACT_APP_API_URL + "/api/auth";
export const AuthUserLogin = (body) => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_AUTH });

      // Do login request, DESTRUCTURING HANYA MENGAMBIL .data saja dari keseluruhan respond api
      const { data, headers } = await Axios.post(API_URL + "/login", body);
      console.log("res data :", data);
      console.log("headers :", headers);

      // Save token to local storage
      const TOKEN = headers.authorization.split(" ")[1]; // dI SPLIT KARENA KITA MAU HILANGIN SI TULISAN bEARER NYA UNTUK NGAMBIL TOKENNYA SAJA
      localStorage.setItem("token", TOKEN);

      /* 
      Respond.data yang dikirim api adalah:
      
      {
        "status": 200,
        "type": "Login Success",
        "data": {
            "id": 34,
            "uid": "122c9c6",
            "username": 34,
            "email": "bagoes.tyo@gmail.com"
	  }
}
      
      */
      dispatch({ type: USER_LOGIN, payload: data.data });

      dispatch({ type: END_AUTH, payload: "" });
    } catch (error) {
      /* 
      Respond.data yang dikirim dari API adalah :

      {
        "error": {
            "message": "Password incorrect!"
      }
}
      */
      console.log(error.response);
      const message = error.response && error.response.data.error.message; // Ini seperti bentuk singkat if, kalo ada error.respond maka execute error.respond.data.error.message
      dispatch({ type: END_AUTH, payload: message });
    }
  };
};

export const AuthUserKeepLogin = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_AUTH });

      //Do keep login
      // 1. Ambil dahulu TOKEN nya dari localstorage
      const TOKEN = localStorage.getItem("token");
      // 2. Configurasi headernya, karena TOKEN baiknya dikirim lewat headers bukan body agar tidak mudah di hack orang luar
      const CONFIG = { headers: { "x-access-token": TOKEN } };
      const { data } = await Axios.get(API_URL + "/keeplogin", CONFIG);

      dispatch({ type: USER_LOGIN, payload: data.data });

      dispatch({ type: END_AUTH, payload: "" });
    } catch (error) {
      console.log(error.response);
      const message = error.response && error.response.data.error.message; // Ini seperti bentuk singkat if, kalo ada error.respond maka execute error.respond.data.error.message
      dispatch({ type: END_AUTH, payload: message });
    }
  };
};

export const AuthUserLogOut = () => {
  return async (dispatch) => {
    dispatch({ type: START_AUTH });
    localStorage.removeItem("token");

    dispatch({ type: USER_LOGOUT });

    dispatch({ type: END_AUTH, payload: "" });
  };
};

export const AuthUserRegister = (body) => {
  return async (dispatch) => {
    try {
      dispatch({ type: START_AUTH });

      await Axios.post(API_URL + "/register", body);

      dispatch({ type: END_AUTH, payload: "" });
    } catch (error) {
      console.log(error.response);
      const message = error.response && error.response.data.error.message;
      dispatch({ type: END_AUTH, payload: message });
    }
  };
};
