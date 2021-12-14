import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function FilterProduct() {
	const [searchParams, setSearchParams] = useSearchParams({});
	let products = useSelector((state) => state.allProducts.productLists);

	let categoryList = products.filter((value) => {
		let filter = searchParams.get("filter");
		console.log(filter);
		if (!filter) return true;
		let catName = value.category.toLowerCase();
		return catName.startsWith(filter.toLowerCase());
	}).map((categotyItem) => {
		let { category, id } = categotyItem;
		return (
			<div key={id}>				
				<input className="my-2" type="checkbox" aria-label="filter"
					id={id}
					value={searchParams.get("filter") || ""}
					onChange={event => {
						let filter = event.target.value;
						if (filter) {
							setSearchParams({ filter });
						} else {
							setSearchParams({});
						}
					}}
				/>
				<Link to={`/productlisting/?filter=${category}`} key={id}>					
					<label htmlFor={id} className="mx-2">{category}</label>
				</Link>
			</div>		
		);
	});
	
	return (
		<>{categoryList}</>
	);
}