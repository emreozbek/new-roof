/*eslint one-var:0*/
/*eslint no-var:0*/
var port = 3000,
  path = require("path");
module.exports = {
  entry: ["./src/App.js"],
  output: {
    filename: "./build/bundle.js"
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
    contentBase: path.join(__dirname, "build"),
    watchContentBase: true,
    port: port,
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
