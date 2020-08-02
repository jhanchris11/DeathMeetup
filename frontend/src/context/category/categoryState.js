import React, { useReducer } from "react";
import contextCategory from "./categoryContext";
import reducerCategory from "./categoryReducer";

import { SET_CATEGORIES, SET_CATEGORIES_SELECTED } from "../types";

function CategoryState(props) {
  const initialState = {
    categories: [],
    categoriesSelected: []
  };

  const [state, dispatch] = useReducer(reducerCategory, initialState);

  const setCategories = (categories) => {
    dispatch({
      type: SET_CATEGORIES,
      payload: categories
    });
  };

  const setCategoriesSelected = (categoriesSelected) => {
    dispatch({
      type: SET_CATEGORIES_SELECTED,
      payload: categoriesSelected
    });
  };

  return (
    <contextCategory.Provider
      value={{
        categories: state.categories,
        categoriesSelected: state.categoriesSelected,
        setCategories,
        setCategoriesSelected
      }}
    >
      {props.children}
    </contextCategory.Provider>
  );
}

export default CategoryState;
