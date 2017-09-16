
module.exports = ({ css = false }) => {
  function loadCss (css) {
    return css ? [
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }
    ] : []
  }
  return [ ...loadCss(css) ]
}
