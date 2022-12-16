import {
	LOGIN_REQUEST,
	SIGNUP_ERROR,
	SIGNUP_REQUEST,
	SIGNUP_SUCCESS,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGOUT,
} from "./auth.actionTypes";

import { getItem, setItem } from "../localStorage";

const initialState = {
	username: "",
	token: getItem("token") || "",
	isAuth: false,
	isLoading: false,
	isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case SIGNUP_REQUEST: {
			return { ...state, isLoading: true, isError: false };
		}

		case SIGNUP_SUCCESS: {
			return {
				...state,
				username: payload.username,
				isLoading: false,
				isError: false,
			};
		}

		case SIGNUP_ERROR: {
			return { ...state, isError: true, isLoading: false };
		}

		case LOGIN_REQUEST: {
			return { ...state, isLoading: true, isError: false, isAuth: false };
		}

		case LOGIN_SUCCESS: {
			setItem("isAuth", true);
			return {
				state: { ...state, isLoading: false, isError: false, isAuth: true },
			};
		}

		case LOGIN_ERROR: {
			return { ...state, isLoading: false, isError: true, isAuth: false };
		}

		case LOGOUT: {
			return { ...state, isAuth: false };
		}

		default:
			return state;
	}
};
