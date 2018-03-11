const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ANALYZE } = process.env;

module.exports = {
	webpack: function webpack(config) {
		if (ANALYZE) {
			config.plugins.push(
				new BundleAnalyzerPlugin({
					analyzerMode: 'static',
					analyzerPort: 8888,
					openAnalyzer: true
				})
			);
		}

		return config;
	}
};
