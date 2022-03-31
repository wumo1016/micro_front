function SystemJS() {}

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.async = true
    script.onload = resolve
    script.onerror = reject
    document.head.appendChild(script)
  })
}

SystemJS.prototype.import = function (path) {
  return new Promise((resolve, reject) => {
    const baseUrl = window.location.href.slice(
      0,
      window.location.href.lastIndexOf('/')
    )
    if (path.startsWith('.')) {
      resolve(baseUrl + path.slice(1))
    }
  }).then(url => {
    return loadScript(url)
  })
}

SystemJS.prototype.register = function (modules, callback) {
  console.log(modules, callback)
}

var System = new SystemJS()
