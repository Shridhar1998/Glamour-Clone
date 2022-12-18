import {
    legacy_createStore,
    applyMiddleware,
    compose,
    combineReducers,
  } from "redux";
  import thunk from "redux-thunk";
import { cartReducer } from "./redux/cart/reducer";
  
  const createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const rootReducer = combineReducers({
    // auth: userReducer,
    cart: cartReducer,
  });
  
  export const store = legacy_createStore(
    rootReducer,
    createCompose(applyMiddleware(thunk))
  );