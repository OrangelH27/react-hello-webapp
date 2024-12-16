import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="container-fluid d-flex justify-content-center">
				<Link to="/" className="text-decoration-none">
					<span className="navbar-brand mb-0 h1">Contact List</span>
				</Link>
			</div>
		</nav>
	);
};