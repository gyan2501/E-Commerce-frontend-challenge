import {
  ADD_CART_SUCCESS,
  GET_CART_SUCCESS,
  CART_FAILURE,
  CART_REQUEST,
  DELETE_CART_SUCCESS,
} from "./actionTypes";

const intialState = {
  isLoading: false,
  isError: false,
  cart: [],
};

export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case CART_REQUEST:
      return { ...state, isLoading: true };

    case ADD_CART_SUCCESS:
      return { ...state, isLoading: false, cart: payload };

    case CART_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case GET_CART_SUCCESS:
      return { ...state, isLoading: false, cart: payload };
      
      case DELETE_CART_SUCCESS:
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== payload),
        };
    default:
      return state;
  }
};
