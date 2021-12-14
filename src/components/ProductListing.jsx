import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import FilterProduct from './FilterProduct';
import InfiniteScroll from "react-infinite-scroll-component";

export default function ProductListing() {
	const products = useSelector((state) => state.allProducts.productLists);
	
	const [allItems, setAllItems] = useState(products);
	const [lastPosition, setLastPosition] = useState(0);

	const perPage = 8;
	const loadProducts = useCallback(() => {
		setTimeout(() => {
			setAllItems(currentProducts => [...currentProducts, ...currentProducts]);
		}, 2000);
		setLastPosition(lastPosition + perPage);		
	},[lastPosition]);

	const allProductList = allItems.map((productitem) => {
		const { id, title, image, price, category } = productitem;
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
						<InfiniteScroll dataLength={allItems.length} next={loadProducts} hasMore={true} loader={<h4>loading...</h4>}>
							<div className="col-12 d-flex flex-wrap">
								{allProductList}
							</div>
						</InfiniteScroll>
					</div>
				</div>
			</div>
		</div>
	);
}