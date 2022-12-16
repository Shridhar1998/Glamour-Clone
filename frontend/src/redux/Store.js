import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./Auth/auth.reducer";

const rootReducer = combineReducers({
	auth: authReducer,
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
