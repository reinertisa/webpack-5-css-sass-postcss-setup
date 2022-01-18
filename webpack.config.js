const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  plugins: [new MiniCssExtractPlugin()],

  module: {

    rules: [
      {
        // css-loader tells webpack how to deal with this type of syntax with file
        // css-loader helps us to build it but add the output in html file.
        // style-loader is a way to inject inline style into the page.
        test: /\.(s[ac]|c)ss$/i,
        // use: ["style-loader", "css-loader", "sass-loader"],
        // instead of injected styles using style loader, we can use mini-css-extract-plugin
        // to create actual .css - (you will main.css in dist folder) file and then we can import these css file into index.html 
        // using <link...> html element.
        // style-loader inject css rules into <style> html element.
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader"
        ],
      }
    ]
  },
  // you want to see other devtool options. Check documentation
  // https://webpack.js.org/configuration/devtool/
  devtool: "source-map"
 
}