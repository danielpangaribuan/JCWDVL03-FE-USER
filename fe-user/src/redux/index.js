import { createStore, combineReducers, applyMiddleware } from "redux";
// import {} from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

// import semua reducers
import { AuthUserReducer } from "../redux/reducer/auth-reducers";
import { ProductReducer } from "../redux/reducer/product-reducers";

const Reducers = combineReducers({
  auth: AuthUserReducer,
  product: ProductReducer
});

// export function, ikutin dulu aja formatnya
export const createReduxStore = () =>
  createStore(Reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
