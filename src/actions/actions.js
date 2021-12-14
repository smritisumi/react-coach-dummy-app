import { ActionTypes } from './action-types';

export const SetCategory = (category) => {
	return {
		type : ActionTypes.SET_CATEGORY,
		payload : category
	}
}

export const SetProductList = (products) => {
	return {
		type : ActionTypes.SET_PRODUCTLIST,
		payload : products
	}
}

export const SetProduct = (product) => {
	return {
		type : ActionTypes.SET_PRODUCT,
		payload : product		
	}
}