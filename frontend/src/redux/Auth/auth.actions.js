import {
	SIGNUP_ERROR,
	SIGNUP_SUCCESS,
	SIGNUP_REQUEST,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	LOGIN_REQUEST,
	LOGOUT,
} from "./auth.actionTypes";
import axios from "axios";
import { removeItem, setItem } from "../localStorage";

const signUpApi = (payload) => (dispatch) => {
	console.log(payload);
	dispatch({ type: SIGNUP_REQUEST });
	return axios
		.post("https://glamour.onrender.com/user/signup", { ...payload })
		.then((res) => dispatch({ type: SIGNUP_SUCCESS, payload: res }))
		.catch((err) => dispatch({ type: SIGNUP_ERROR }));
};

const loginApi = (payload) => (dispatch) => {
	console.log(payload);
	dispatch({ type: LOGIN_REQUEST });
	return axios
		.post("https://glamour.onrender.com/user/login", { ...payload })
		.then((res) => {
			setItem("userId", res.data.userId);
			dispatch({ type: LOGIN_SUCCESS });
			// localStorage.setItem("token", res.data.token);
		})
		.catch((err) => dispatch({ type: LOGIN_ERROR }));
};

const logout = () => (dispatch) => {
	removeItem("token");
	removeItem("userId");
	removeItem("isAuth");
	dispatch({ type: LOGOUT });
};

export { signUpApi, loginApi, logout };
