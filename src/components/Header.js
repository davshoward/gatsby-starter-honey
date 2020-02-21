import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import { Nav, Icon } from ".";

const Header = ({ title }) => {
	return (
		<header id="header" className="header" role="banner">
			<div className="container">
				<div className="main-bar">
					<Link to="/" className="logo">
						<Icon name="logo" />
						{title}
					</Link>
					<Nav />
				</div>
			</div>
		</header>
	);
};

Header.propTypes = {
	title: PropTypes.string,
};

export default Header;
