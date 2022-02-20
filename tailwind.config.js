const defaultConfig = require('tailwindcss/defaultConfig')
const formsPlugin = require('@tailwindcss/forms')

module.exports = {
	content: ['index.html', 'src/**/*.tsx'],
	theme: {
		fontFamily: {
			sans: ['Inter', ...defaultConfig.theme.fontFamily.sans]
		},
		screens: {
			over70vh: { min: '70vh' }
		},
		extend: {
			width: {
				'half-screen': '50vh'
			}
		}
	},
	experimental: { optimizeUniversalDefaults: true },
	plugins: [formsPlugin]
}
