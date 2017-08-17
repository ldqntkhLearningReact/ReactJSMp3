var path = require('path');
//Thư mục sẽ chứa tập tin được biên dịch
var BUILD_DIR = path.resolve(__dirname, 'assets/react');
//Thư mục chứa dự án - các component React
var APP_DIR = path.resolve(__dirname, 'App');
 
var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve : {
      alias : {
          reducer : path.resolve(__dirname, 'App/reducers/indexReducer.js')
      }
  },
  module: {
      loaders : [
          {
              loader : 'babel-loader',
              test : /\.jsx?$/,
              exclude : /node_modules/,
              query:
              {
                  presets:['react']
              }
          }
      ]
  }
};
 
module.exports = config;