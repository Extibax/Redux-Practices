import {
  SHOW_PRODUCTS,
  SHOW_PRODUCT,
  ADD_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT
} from "../actions/types";

/* Cada reducer tiene su propio state */

const initialState = {
  products: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}
