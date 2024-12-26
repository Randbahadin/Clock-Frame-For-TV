const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your app
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'public'), // Output directory
  },
  mode: 'development', // Set to 'production' for production builds
};
