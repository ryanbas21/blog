module.exports = {
	setupFiles: ['<rootDir>/jest.setup.js'],
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	testMatch: ['**/*.test.(ts|tsx)'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	moduleNameMapper: {
		'\\.(scss|svg)$': '<rootDir>/__mocks__/empty-module.js'
	},
	collectCoverageFrom: [
		'!jest.config.js',
		'!jest.setup.js',
		'!next.config.js',
		'**/*.{js,jsx,ts,tsx}',
		'!coverage/**'
	],
	transform: {
		'.(ts|tsx|js|jsx)$': 'typescript-babel-jest'
	}
};
