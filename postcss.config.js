// post-css is a way to make final modification to your .css output.
// Most common uses people are familiar with like autoprefixer. When you are using modern css rules,
// you need to cross browser support for like fallback support, autoprefixer will add like --webkit etc.

module.exports = {
  plugins: [require('postcss-preset-env')]
}