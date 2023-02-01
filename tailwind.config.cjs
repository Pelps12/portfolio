const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Bodoni Moda', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#25bcab',

					secondary: '#21b78c',

					accent: '#f2a7c1',

					neutral: '#231F2E',

					'base-100': '#333748',

					info: '#A7DCE6',

					success: '#55E794',

					warning: '#F38C16',

					error: '#FB3A18'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
