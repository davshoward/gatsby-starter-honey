import React from "react";
import { Layout, SEO } from "../layout";

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<section className="section-padding">
			<div className="container flow">
				<h1>NOT FOUND</h1>
				<p>
					You just hit a route that doesn&#39;t exist... the sadness.
				</p>
			</div>
		</section>
	</Layout>
);

export default NotFoundPage;
