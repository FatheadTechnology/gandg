// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: { grid: false } //Trying to prefix grid for IE just makes it look even worse
  }
};
