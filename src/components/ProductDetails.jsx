import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Productdetail() {
	let params = useParams();
	let productId = parseInt(params.id) - 1;
	let product = useSelector((state) => state.allProducts.productLists[productId]);
	const { id, title, image, price, description, category } = product;
	return (
		<div className="container maincontainer">
			<div className="row">
				<div className="product__category text-capitalize">{category}</div>
				<div className="d-flex product" key={id}>
					<div className="col-4 border product__img">
						<img src={image} alt="" />
					</div>
					<div className="col-8 product__detail">
						<h2 className="product__name">{title}</h2>
						<div className="product__price">${price}</div>
						<div className="product__description">{description}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
