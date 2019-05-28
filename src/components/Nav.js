import React from "react";
import { Link } from "gatsby";

const Nav = () => {
	return (
		<nav className="main-nav">
			<Link to="/" className="main-nav-item" activeClassName="active">
				Page 1
			</Link>
			<Link
				to="/page-2"
				className="main-nav-item"
				activeClassName="active"
			>
				Page 2
			</Link>
		</nav>
	);
};

export default Nav;
