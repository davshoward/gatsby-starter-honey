import React from "react";
import { Layout, SEO } from "../layout";

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<section className="section-padding">
			<div className="container flow">
				<h1>Hi there!</h1>
				<p>Welcome to your new Gatsby Honey site.</p>
				<p>Now go build something great.</p>
			</div>
		</section>
	</Layout>
);

export default IndexPage;
