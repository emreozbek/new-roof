const config = require("./04-Config/App");
const path = require("path");

module.exports = {
  entry: "./03-Front-end/App.js",
  output: {
    filename: "./bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        loaders: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "es2015", "react", "stage-0"]
          }
        }
      },
      {
        test: /\.(eot|otf|woff|woff2|ttf|svg|jpg|jpeg|png|gif)(\?\S*)?$/,
        loader: "file-loader?name=/[path][name].[ext]"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "/00-Build"),
    publicPath: "/",
    watchContentBase: true,
    historyApiFallback: true,
    port: config.development.port,
    inline: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, x-id, Content-Length, X-Requested-With",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
    }
  }
};
