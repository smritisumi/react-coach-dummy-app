import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
	render() {
		return(			
			<nav className="navbar navbar-expand-lg navbar-light justify-content-center">
				<ul className="nav navbar-nav">
					<li className="nav-item text-uppercase">
					<Link to="/" className="nav-link">Home</Link>
				  </li>
				  <li className="nav-item text-uppercase">
					<Link to="/productlisting" className="nav-link">Product Listing</Link>
				  </li>
				</ul>
			</nav>
		);
	}
}