import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function FilterProduct() {
	let products = useSelector((state) => state.allProducts.productLists);
	const categoryList = [...new Set(products.map(data => data.category))]	
	return (
		<div>
			{categoryList.map(({id}, index)=>
				<div>
					<Link to={`/productlisting/${categoryList[index]}`} key={index}>
						{categoryList[index]}
					</Link>
				</div>
			)}
		</div>		
	);
}
