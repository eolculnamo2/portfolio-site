const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const browserConfig = {
    entry: './src/index.js',
    output: {
        path: path.resolve('./assets/dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    optimization: {
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10,
                name: 'vendors'
              },
            styles: {
              name: 'style',
              test:  /\.s?css$/,
              chunks: 'all',
              enforce: true
            }
          }
    
        }
    },
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        publicPath: '/',
        compress: true,
        port: 3000,
        proxy: {
            '/': 'http://127.0.0.1:8080/'
          }
      },
    plugins: [
              new CleanWebpackPlugin(['assets/dist'], {exclude: 'sitemap.xml'}),
            //   new MiniCssExtractPlugin({
            //     // Options similar to the same options in webpackOptions.output
            //     // both options are optional
            //     filename: "style.css",
            //     chunkFilename: "[name].css"
            //   })
            ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname,'src'),
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env','@babel/preset-react']
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader'
                
            },
            // {
            //     test: /\.(sa|sc|c)ss$/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         'css-loader',
            //         'sass-loader',
            //       ],
            //  },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
}

const serverConfig = {
    entry: "./server.js",
    target: "node",
    output: {
      path: __dirname,
      filename: "index.js",
      libraryTarget: "commonjs2"
    },
    devtool: "cheap-module-source-map",
    module: {
      rules: [
        {
            test: /\.(png|jpg|gif)$/,
            loader: 'url-loader'
            
        },
        {
            test: /\.(sa|sc|c)ss$/,
            loader: 'css-loader/locals'
        },
        {
            test: /js$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            query: { presets: ['@babel/preset-env','@babel/preset-react'] }
        }
      ]
    }
  };

module.exports = browserConfig //, serverConfig];