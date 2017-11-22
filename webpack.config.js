/*eslint no-var:0*/
var port = 3000; //eslint-disable-line no-var
module.exports = {
  entry: ["./src/App.js"],
  output: {
    filename: "./build/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
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
    contentBase: "./",
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
