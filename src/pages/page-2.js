import React from "react";
import { Layout, SEO } from "../layout";

const SecondPage = () => (
	<Layout>
		<SEO title="Page two" />
		<section className="section-padding">
			<div className="container rhythm">
				<h1>Hi from the second page</h1>
				<p>Welcome to page 2</p>
			</div>
		</section>
	</Layout>
);

export default SecondPage;
