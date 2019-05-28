import React, { Component } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";

import "../styles/style.css";
import { Header, Footer, Nav } from "../components";

class Layout extends Component {
	render() {
		const { children } = this.props;

		return (
			<StaticQuery
				query={graphql`
					query {
						site {
							siteMetadata {
								title
							}
						}
					}
				`}
				render={data => (
					<React.Fragment>
						<div id="skiptocontent" className="visuallyhidden">
							<a href="#main">skip to main content</a>
						</div>

						<div id="layout-svgs" className="layout-svgs" />

						<div
							id="site-container"
							className="site-container"
							role="document"
						>
							<Header title={data.site.siteMetadata.title} />

							<main id="main" className="main" role="main">
								{children}
							</main>

							<div
								id="fallback-main-nav"
								className="fallback-main-menu"
							>
								<Nav />
							</div>

							<Footer title={data.site.siteMetadata.title} />
						</div>
					</React.Fragment>
				)}
			/>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
