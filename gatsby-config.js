module.exports = {
	/**
	 * Plugins
	 */
	plugins: [
		{
			resolve: `gatsby-theme-jamfire-conference`,
			options: {
				branding: {
					siteName: process.env.GATSBY_SITE_NAME,
					shortName: process.env.GATSBY_SHORT_NAME,
				},
				firebase: {
					apiKey :process.env.GATSBY_FIREBASE_API_KEY,
					appOd :process.env.GATSBY_FIREBASE_APP_ID,
					authDomain :process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
					databaseUrl :process.env.GATSBY_FIREBASE_DATABASE_URL,
					measurementId :process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
					messagingSenderId :process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
					projectId :process.env.GATSBY_FIREBASE_PROJECT_ID,
					storageBucket :process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
				},
				netlify: {
					siteUrl: process.env.GATSBY_NETLIFY_SITE_URL,
					displayUrl: process.env.GATSBY_NETLIFY_DISPLAY_URL,
					backendName: process.env.GATSBY_NETLIFY_BACKEND_NAME,
					backendRepo: process.env.GATSBY_NETLIFY_BACKEND_REPO,
					backendBranch: process.env.GATSBY_NETLIFY_BACKEND_BRANCH,
				}
			}
		}
	],
}