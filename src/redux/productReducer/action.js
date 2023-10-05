import axios from "axios";
import {
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
} from "./actionTypes";

export const getProducts = (paramObj) => (dispatch) => {
  dispatch({ type: GET_PRODUCT_REQUEST });
  axios
    .get("https://e-com-json-server.onrender.com/products", paramObj)
    .then((res) => {
      dispatch({ type: GET_PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: GET_PRODUCT_FAILURE });
    });
};
