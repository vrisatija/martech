module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'ibm-semi-bold': ['IBMPlexSerif-SemiBold'],
      'ibm-regular': ['IBMPlexSerif-Regular'],
      'poppins-regular': ['Poppins-Regular'],
      'poppins-semi-bold': ['Poppins-SemiBold'],
    },
    extend: {
      screens: {
        '1.5xl': '1408px',
        tablet: '640px',
        laptop: '1024px',
      },
      width: {
        'button-border': '0.5px',
      },
      spacing: {
        0.25: '1px',
        0.75: '3px',
        9: '2.25rem',
        14.5: '3.625rem',
        18: '4.5rem',
        60: '15rem',
        62.24: '15.56rem',
        76.25: '19.0625rem',
        85: '21.25rem',
        91.75: '22.9375rem',
      },
      borderWidth: {
        0.2: '0.2px',
      },
      colors: {
        gray: {
          100: '#D8D8D8',
          150: '#E3E3E3',
          250: '#979797',
          350: '#AAAAAA',
        },
        blue: {
          900: '#051C2C',
          100: '#00D3FD',
          150: '#00CCFD',
          175: '#00A8F9',
          200: '#2251FF',
        },
        white: {
          DEFAULT: '#FFFFFF',
          100: 'rgba(255,255,255,0.05)',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
