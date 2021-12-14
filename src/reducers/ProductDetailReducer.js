import { ActionTypes } from '../actions/action-types';
let id;
export const ProductDetailReducer = (state = {...id}, action) => {
	switch (action.type) {
		case ActionTypes.SET_PRODUCT:
			console.log('within productdetail reducer');
			return {
				...state.id,
				id: action.payload.id
			};
		default:
			return state;
	}
}