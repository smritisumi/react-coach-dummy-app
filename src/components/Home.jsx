import React from "react";
import { Link } from "react-router-dom";
import product from '../image/product.png';

export default function Home() {

	return (
		<div className="wrapper home">
			<div className="col-12 d-flex container maincontainer">
				<div className="row col-6">
					<Link to="/productlisting">
						<img src={product} alt="" />
					</Link>
				</div>
				<div className="row col-6">
					<div className="d-flex flex-column justify-content-center align-items-center">
						<p>THE HOLIDAY COUNTDOWN</p>
						<h2>BAGS UNDER $250</h2>						
						<Link to="/productlisting">Shop Now</Link>
					</div>
				</div>
			</div>
		</div>
	);
	
}