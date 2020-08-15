import React, { useReducer } from 'react';
import contextCategory from './categoryContext';
import reducerCategory from './categoryReducer';

import { SET_CATEGORIES, SET_CATEGORIES_SELECTED, SET_USER_TOKEN } from '../types';

function CategoryState(props) {
	const initialState = {
		categories: [],
		categoriesSelected: [],
		user: {
			token: '',
			auth: false,
		},
	};

	const [state, dispatch] = useReducer(reducerCategory, initialState);

	const setCategories = (categories) => {
		dispatch({
			type: SET_CATEGORIES,
			payload: categories,
		});
	};

	const setCategoriesSelected = (categoriesSelected) => {
		dispatch({
			type: SET_CATEGORIES_SELECTED,
			payload: categoriesSelected,
		});
	};
	const setUser = (user) => {
		dispatch({
			type: SET_USER_TOKEN,
			payload: user,
		});
	};
	return (
		<contextCategory.Provider
			value={{
				categories: state.categories,
				categoriesSelected: state.categoriesSelected,
				user: state.user,
				setCategories,
				setCategoriesSelected,
				setUser,
			}}
		>
			{props.children}
		</contextCategory.Provider>
	);
}

export default CategoryState;
