import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function FilterProduct() {
	let products = useSelector((state) => state.allProducts.productLists);
	
	let categoryList = products.map((categotyItem) => {
		let { category, id } = categotyItem;
		return (
			<div key={id}>				
				<Link to={`/productlisting/${category}`} key={id}>
					{category}
				</Link>
			</div>
			
		);
	});

	return (
		<>{categoryList}</>
	);
}