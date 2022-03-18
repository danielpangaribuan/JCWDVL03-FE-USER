import { createStore, combineReducers, applyMiddleware } from "redux";
// import {} from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

// import semua reducers
import { AuthUserReducer } from "../redux/reducer/auth-reducers";
import { ProductReducer } from "../redux/reducer/product-reducers";
import { WarehouseReducer } from "../redux/reducer/warehouse-reducers";
import { LocationReducer } from "../redux/reducer/location-reducers";
import { ComboReducer } from "../redux/reducer/combo-reducers";

const Reducers = combineReducers({
  auth: AuthUserReducer,
  product: ProductReducer,
  warehouse: WarehouseReducer,
  location: LocationReducer,
  combo: ComboReducer
});

// export function, ikutin dulu aja formatnya
export const createReduxStore = () =>
  createStore(Reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
