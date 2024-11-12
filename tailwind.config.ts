import { Config } from 'tailwindcss'

const config: Config = {
	content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#8fb100',
			},
		},
	},
	plugins: [],
}

export default config
