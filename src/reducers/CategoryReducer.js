import { ActionTypes } from '../actions/action-types';
let category;
export const CategoryReducer = (state = {...category}, action) => {
	switch (action.type) {
		case ActionTypes.SET_CATEGORY:
			console.log('within category list reducer');
			return {
				...state.category,
				category: action.payload,
			};
		default:
			return state;
	}
}