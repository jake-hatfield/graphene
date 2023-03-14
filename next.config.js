// packages
const { withSentryConfig } = require('@sentry/nextjs');

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},

	// Optional build-time configuration options
	sentry: {
		hideSourceMaps: true,
		// See the sections below for information on the following options:
		//   'Configure Source Maps':
		//     - disableServerWebpackPlugin
		//     - disableClientWebpackPlugin
		//     - hideSourceMaps
		//     - widenClientFileUpload
		//   'Configure Legacy Browser Support':
		//     - transpileClientSDK
		//   'Configure Serverside Auto-instrumentation':
		//     - autoInstrumentServerFunctions
		//     - excludeServerRoutes
		//   'Configure Tunneling to avoid Ad-Blockers':
		//     - tunnelRoute
	},
};

const sentryWebpackPluginOptions = {
	// Additional config options for the Sentry Webpack plugin. Keep in mind that
	// the following options are set automatically, and overriding them is not
	// recommended:
	//   release, url, org, project, authToken, configFile, stripPrefix,
	//   urlPrefix, include, ignore

	silent: true, // Suppresses all logs
	// For all available options, see:
	// https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
