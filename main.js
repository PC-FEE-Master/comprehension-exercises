/*
        - data-access-primitives.js
        - data-access-non-primitives.js
        - operators.js
        - objects.js
        - primitive-methods.js
        - non-primitive-methods.js
        - conditionals.js
        - conditionals-non-primitives.js
        - loops.js
        - functions.js
        - functions-2.js
        - functions-advanced.js
        - array-methods-functional.js
        - es6.js
        - objects-advanced.js
    */
    function singleScript(scriptName, directory) {
    var s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = `./${directory}/${scriptName}.js`
    document.body.appendChild(s)
}
const list = [
    {
        label: 'data access 1',
        script: 'data-access-primitives'
    },
    {
        label: 'data access 2',
        script: 'data-access-non-primitives'
    },
    {
        label: 'operators',
        script: 'operators'
    },
    {
        label: 'objects',
        script: 'objects'
    },
    {
        label: 'primitive-methods',
        script: 'primitive-methods'
    }
]
const getHashOrDefault = () => window.location.hash.slice(1) || list[0].script
const currHash = getHashOrDefault()
const showSolution = document.location.search === '?solution=true'
const directory = showSolution ? 'solutions' : 'tests'
singleScript(currHash, directory)
document.getElementById('tabs').innerHTML = list.map(item => {
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