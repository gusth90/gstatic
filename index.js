var pages   = require.context('./pages', false, /\.pug$/)
var styles  = require.context('./layouts', false, /\.styl$/)

pages.keys().forEach(function (pageKey) {
  var pagePath = pageKey.split('.')[1]

  if (pagePath === '/index') {
    pagePath = '/'
  }

  if (window.location.pathname === pagePath) {
    var page = pages(pageKey)

    styles.keys().forEach(function (styleKey) {
      var stylePath = styleKey.split('.')[1].substring(1)

      page = page.replace(new RegExp('<link( rel=\"stylesheet\")? href=\"\/?' + stylePath + '\.css\??.*?\"( \/|\/)?>', 'gi'), '<style>' + styles(styleKey) + '</style>')
    })

    document.getElementsByTagName('html')[0].innerHTML = page
  }
})
