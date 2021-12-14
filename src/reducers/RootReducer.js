import { combineReducers } from 'redux';
import { CategoryReducer } from './CategoryReducer';
import { ProductListReducer } from './ProductListReducer';
import { ProductDetailReducer } from './ProductDetailReducer';

export const RootReducer =  combineReducers({
	allCategory : CategoryReducer,
	allProducts : ProductListReducer,
	product : ProductDetailReducer
});