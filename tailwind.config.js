module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: 'var(--brand)',
        brandActive: 'var(--brandActive)',
        likeButton: 'var(--likeButton)',
        likeButtonHover: 'var(--likeButtonHover)',
        siteWidth: 'var(--siteWidth)',
      },
      maxWidth: {
        site: 'var(--siteWidth)',
      },
      borderColor: {
        default: 'var(--border)',
      },
      fontSize: {
        medium: '17px',
      },
    },
  },
  variants: {
    extend: {
      translate: ['group-hover'],
    },
  },
  plugins: [],
}
