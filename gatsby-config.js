const config = require("./config");

module.exports = {
	siteMetadata: {
		title: config.title,
		description: config.description,
		author: config.author,
		siteUrl: config.url,
		social: config.social,
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: "gatsby-plugin-svgr",
			options: {
				prettier: true,
				svgo: true,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: config.manifest,
		},
		`gatsby-plugin-catch-links`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: config.googleAnalyticsId,
				anonymize: true,
				respectDNT: true,
			},
		},
		`gatsby-plugin-postcss`,
		{
			resolve: "gatsby-plugin-web-font-loader",
			options: {
				google: {
					families: ["Quicksand:400,700"],
				},
			},
		},
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: config.url,
				sitemap: `${config.url}/sitemap.xml`,
				env: {
					development: {
						policy: [{ userAgent: "*", disallow: ["/"] }],
					},
					production: {
						policy: [{ userAgent: "*", allow: "/" }],
					},
				},
			},
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: config.url,
			},
		},
		{
			resolve: "gatsby-plugin-react-axe",
			options: {},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
};
