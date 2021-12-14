import React, { Component } from "react";
import {Link} from 'react-router-dom';
import logo from '../image/logo.png';
import Navbar from "./Navbar";

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="container">
					<Link to="/" className="logo"><img src={logo} alt="Ecommerce"/></Link>
					<Navbar />
				</div>
			</header>
		);
	}
}