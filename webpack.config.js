const path = require('path');

module.exports = {
  entry: './src/index.js', // The entry point for your app
  output: {
    filename: 'bundle.js', // The output file name
    path: path.resolve(__dirname, 'Clock-Frame-For-TV'), // Change this to the folder where you want the bundled file
  },
  mode: 'development', // Set to 'production' for production builds
};
