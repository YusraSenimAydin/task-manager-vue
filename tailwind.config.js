module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#6B7280',
        accent: '#34D399',
        background: '#F3F4F6',
        text: '#111827',
        error: '#EF4444',
      },
    },
  },
  plugins: [],
}
