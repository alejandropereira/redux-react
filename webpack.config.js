module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    historyApiFallback: true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-0'],
        },
      },
    ],
  },
};
