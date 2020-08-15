import { SET_CATEGORIES, SET_CATEGORIES_SELECTED, SET_USER_TOKEN } from '../types';

export default (state, action) => {
	switch (action.type) {
		case SET_CATEGORIES:
			return {
				...state,
				categories: action.payload,
			};
		case SET_CATEGORIES_SELECTED:
			return {
				...state,
				categoriesSelected: action.payload,
			};
		case SET_USER_TOKEN:
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
};
