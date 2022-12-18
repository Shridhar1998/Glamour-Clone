// import { setToast } from "../../../utils/extraFunctions";
// import { getCartTotal } from "../../../utils/getCartTotal";
// import { handleCartDuplicate } from "../../../utils/handleCartDuplicate";
// import { getItem, setItem } from "../../../utils/localstorage";
// import { getItemSession, removeItemSession, setItemSession } from "../../../utils/sessionStorage";
import { DELETE_CART_ITEM, GET_CART_DETAILS, REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "./actionType";
import axios from 'axios'
// import { ADD_TO_CART_SUCCESS, APPLY_COUPON_SUCCESS, REMOVE_COUPON_SUCCESS, REMOVE_FROM_CART, UPDATE_CART_DETAILS } from "./actionTypes";

// export const addToCartSuccess = (payload) => {
//     return { type: ADD_TO_CART_SUCCESS, payload };
// };

// export const removeFromCart = (payload) => {
//     return { type: REMOVE_FROM_CART, payload };
// };

// export const applyCouponSuccess = (payload) => {
//     return { type: APPLY_COUPON_SUCCESS, payload };
// };

// export const removeCouponSuccess = (payload) => {
//     return { type: REMOVE_COUPON_SUCCESS, payload };
// };

// export const updateCartDetails = () => {
//     return { type: UPDATE_CART_DETAILS };
// }

export const getCartDetails = (id) => async(dispatch)=> {
    let res = await axios.get(`http://localhost:8080/cart/${id}`)
    console.log("res",res.data)
    return dispatch({type: GET_CART_DETAILS, payload: res.data})
}

// getCartDetails()
export const removeCartItem = (id) => async(dispatch)=> {
    let res = await axios.delete(`http://localhost:8080/cart/${id}`)
    // console.log("res",res.data)
    return dispatch({type: REMOVE_FROM_CART, payload: res.data})
}

export const updateQuantity = (id,value) => async(dispatch)=> {
    let res = await axios.patch(`http://localhost:8080/cart/${id}`,{quantity:value})
    console.log("resupdate",res.data)
    return dispatch({type: UPDATE_CART_QUANTITY,payload:res.data})
}


export const deleteCartItem = (id) => async(dispatch)=> {
    let res = await axios.delete(`http://localhost:8080/cart/${id}`)
    console.log("resdelete",res.data)
    return dispatch({type: DELETE_CART_ITEM,payload:res.data})
}

// export const addToCartRequest = (data, toast, operation = 'add') => (dispatch) => {
//     let cartData = getItem('cartProducts') || [];
//     cartData = handleCartDuplicate(cartData, data, operation);
//     setItem('cartProducts', cartData);
//     const discountPercent = getItemSession('discountPercent');
//     const orderSummary = getCartTotal(cartData, discountPercent);
//     setItem('orderSummary', orderSummary);
//     dispatch(addToCartSuccess({ cartData, orderSummary }));

//     if (operation === 'add') {
//         setToast(toast, 'Item added to the cart', 'success');
//     } else if (operation === 'reduce') {
//         setToast(toast, 'Item quantity reduced', 'success');
//     }
// };




// export const removeFromCartRequest = (index, toast) => (dispatch) => {
//     const cartData = getItem('cartProducts');
//     cartData.splice(index, 1);
//     setItem('cartProducts', cartData);
//     const discountPercent = getItemSession('discountPercent');
//     const orderSummary = getCartTotal(cartData, discountPercent);
//     orderSummary.subTotal === 0 && removeItemSession('discountPercent');
//     setItem('orderSummary', orderSummary);
//     dispatch(removeFromCart({ index, orderSummary }));
//     setToast(toast, 'Item removed from the cart', 'success');
// };

// export const applyCouponRequest = (discountPercent, toast) => (dispatch) => {
//     const cartData = getItem('cartProducts');
//     setItemSession('discountPercent', discountPercent)
//     const orderSummary = getCartTotal(cartData, discountPercent);
//     setItem('orderSummary', orderSummary);
//     dispatch(applyCouponSuccess(orderSummary));
//     setToast(toast, 'Coupon Applied Successfully', 'success', 2000, `You got ${discountPercent}% discount`);
// };

// export const removeCouponRequest = (toast) => (dispatch) => {
//     const cartData = getItem('cartProducts');
//     removeItemSession('discountPercent');
//     const orderSummary = getCartTotal(cartData, 0);
//     setItem('orderSummary', orderSummary);
//     dispatch(removeCouponSuccess(orderSummary));
//     setToast(toast, 'Coupon Removed Successfully', 'success');
// };