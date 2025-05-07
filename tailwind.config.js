module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        gradient: {
          start: '#6b46c1',
          end: '#b794f4',
        },
      },
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(var(--tw-gradient-stops))',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}