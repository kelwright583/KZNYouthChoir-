/** @type {import('tailwindcss').Config} */
const uiConfig = require('../../packages/ui/tailwind.config.js')

module.exports = {
  ...uiConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
}

