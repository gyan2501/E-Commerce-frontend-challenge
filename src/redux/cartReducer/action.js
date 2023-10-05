import axios from "axios";
import {
  ADD_CART_SUCCESS,
  GET_CART_SUCCESS,
  CART_FAILURE,
  CART_REQUEST,
  DELETE_CART_SUCCESS,
} from "./actionTypes";


export const addCart = (data) => (dispatch) => {
  dispatch({ type: CART_REQUEST });
  axios
    .post("https://e-com-json-server.onrender.com/cart", data)
    .then((response) => {
      const updatedCartData = response.data; // Assuming the response contains updated cart data
      dispatch({ type: ADD_CART_SUCCESS, payload: updatedCartData });
    })
    .catch(() => {
      dispatch({ type: CART_FAILURE });
    });
};


export const getCart = (paramObj) => (dispatch) => {
  dispatch({ type: CART_REQUEST });
  axios
    .get("https://e-com-json-server.onrender.com/cart", paramObj)
    .then((response) => {
      const fetchedCartData = response.data; // Cart data from the API response
      dispatch({ type: GET_CART_SUCCESS, payload: fetchedCartData });
    })
    .catch(() => {
      dispatch({ type: CART_FAILURE });
    });
};


export const deleteCart = (id) => (dispatch) => {
  dispatch({ type: CART_REQUEST });
  axios
    .delete(`https://e-com-json-server.onrender.com/cart/${id}`)
    .then(() => {
      dispatch(getCart());
      // Dispatch a success action for delete (optional).
      dispatch({ type: DELETE_CART_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: CART_FAILURE });
    });
};