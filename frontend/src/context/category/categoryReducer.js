import { SET_CATEGORIES, SET_CATEGORIES_SELECTED  } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case SET_CATEGORIES_SELECTED:
      return {
        ...state,
        categoriesSelected: action.payload
      };
    default:
      return state;
  }
};