const singleScript = (scriptName, directory) => {
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = `./${directory}/${scriptName}.js`
    document.body.appendChild(s)
}
const getHashOrDefault = () => window.location.hash.slice(1) || SCRIPT_LIST[0].script
const currHash = getHashOrDefault()
const showSolution = document.location.search === '?solution=true'
const directory = showSolution ? 'solutions' : 'tests'
singleScript(currHash, directory)
document.getElementById('tabs').innerHTML = SCRIPT_LIST.map(item => {
    const active = currHash === item.script
    return `
        <a href="#${item.script}" class="${active ? 'active' : ''}">${item.label}</a>
    `
}).join('')
document.getElementById('tabs').addEventListener('click', function (e) {
    const elHref = e.target.getAttribute('href').slice(1)
    if (currHash === elHref) {
        document.location.search = showSolution ? '' : '?solution=true'
    } else {
        setTimeout(() => {
            document.location.search = ''
            window.location.reload()
        }, 0)
    }

    // set timeout hack due to waiting for hash to exist
    
})