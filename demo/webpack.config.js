module.exports = {
  mode: "development",
  entry: "./demo/index.jsx",
  module: {
    rules:
      [
        {
          test: /\.js?/,
          exclude: /node_modules/,
          use: 'babel-loader?presets=react',
        }
      ]
  },
  output: {
    filename: "demo.js"
  }
};
