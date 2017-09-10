
module.exports = {
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css?modules'
      },
      {
        test: /\.(gif|png|ico)$/,
        loader: 'url?name=[name]-[hash:8].[ext]&limit=10240'
      },
      {
        test: /\.(jpe?g|mp4|otf|svg|ttf|woff|woff2|eot)(?:$|\?)/,
        loader: 'file?name=[name]-[hash:8].[ext]'
      }
    ]
  }
}
