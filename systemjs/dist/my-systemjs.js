function SystemJS() {}

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    // script.async = true
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

SystemJS.prototype.register = async function (modules, callback) {
  const fn = function (data) {
    console.log(123);
    console.log(data);
  }
  const { setters, execute } = callback(fn)
  const scriptList = document.querySelectorAll('script')
  const target = [...scriptList].find(dom => dom.type === 'systemjs-importmap')
  if (!target) return
  try {
    const { imports } = JSON.parse(target.innerHTML.trim())
    await Promise.all(
      modules.map(async key => {
        await loadScript(imports[key])
        return 1
      })
    )
    setters[0](window.React)
    setters[1](window.ReactDOM)
    const data = execute()
  } catch {}
}

var System = new SystemJS()
