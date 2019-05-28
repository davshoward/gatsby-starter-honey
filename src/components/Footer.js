import React from "react";
import PropTypes from "prop-types";

const Footer = ({ title }) => {
	return (
		<footer id="footer" className="footer" role="contentinfo">
			<div className="container">
				<span className="copyright">
					© Copyright {title} {new Date().getFullYear()}
				</span>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	title: PropTypes.string.isRequired,
};

export default Footer;
