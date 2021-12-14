import React from "react";
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import FilterProduct from "./FilterProduct";

export default function CategoryList() {
	let params = useParams();
	let categoryName = params.category;
	let products = useSelector((state) => state.allProducts.productLists);	
	console.log(products);
	const categoryList = products.filter(item => item.category.indexOf(categoryName) !== -1)
		.map((categotyItem) => {
		const { id, title, image, price, category } = categotyItem;
		return (
			<div className="col-4 product-tile" key={id}>
				<Link to={`/productdetail/${id}`} key={id}>
					<div className="product-tile__img">
						<img src={image} alt="" />
					</div>
					<div className="product-tile__name">{title}</div>
					<div className="product-tile__price">${price}</div>
					<div className="product-tile__swatches">{category}</div>
				</Link>
			</div>
		);
	});

	return (
		<div className="container maincontainer">
			<div className="row">
				<h2>Welcome to PLP page</h2>
				<div className="product-container d-flex">
					<div className="col-3">
						<FilterProduct />
					</div>
					<div className="col-9 d-flex flex-wrap">						
						<div className="col-12 d-flex flex-wrap">
							{categoryList}
						</div>						
					</div>
				</div>
			</div>
		</div>
	);
}