const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },

    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },

    plugins: [
      // new WorkboxWebpackPlugin.InjectManifest({
      //   swSrc: "./src/js/service-worker.js",
      //   swDest: "service-worker.js",
      // }),
      new HtmlWebpackPlugin({
        template: "./index.html",
        filename: "./index.html",
        chunks: ["main"],
      }),
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "service-worker.js",
      }),
      new WebpackPwaManifest({
        name: "Your App Name",
        short_name: "App",
        description: "Your App Description",
        background_color: "#ffffff",
        crossorigin: "use-credentials",
        icons: [
          {
            src: path.resolve("src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),
    ],
    // TODO: Add CSS loaders and babel to webpack.
    module: {
              // CSS and JS loaders
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/transform-runtime",
              ],
            },
          },
        },
      ],
            },
          };
        
    }


// TODO: Add CSS loaders and babel to webpack.

// module.exports = () => {
//   return {
//     mode: 'development',
//     entry: {
//       main: './src/js/index.js',
//       install: './src/js/install.js'
//     },
//     output: {
//       filename: '[name].bundle.js',
//       path: path.resolve(__dirname, 'dist'),
//     },
//     plugins: [
      
//     ],

//     module: {
//       rules: [
        
//       ],
//     },
//   };
// };
