import { Config } from 'tailwindcss'

const config: Config = {
	content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#38BDF8',
				background: '#bad5ff',
				text: '#222222',
			},
		},
	},
	plugins: [],
}

export default config
