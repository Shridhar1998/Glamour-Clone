import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./Auth/auth.reducer";
import { cartReducer } from "./cart/reducer";

const rootReducer = combineReducers({
	auth: authReducer,
	cart: cartReducer
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
