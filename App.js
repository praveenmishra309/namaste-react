

const heading = React.createElement(
    'h1',
    {
        id: 'heading',
        xyz: "abc",
        className: "header"
    },
    "Hello World from React"
)




const parent = React.createElement('div',
    { id: 'parent' },
    React.createElement('div', { id: 'child1' },
        // Creating a child tag
        // React.createElement('h1', {}, 'I am a h1 tag') 
        // Creating sibling elements
        [React.createElement('h1', {}, 'I am a h1 tag'), React.createElement('h2', {}, 'I am a h2 tag')]),
    React.createElement('div', { id: 'child2' },
        // Creating a child tag
        // React.createElement('h1', {}, 'I am a h1 tag') 
        // Creating sibling elements
        [React.createElement('h1', {}, 'I am a h1 tag'), React.createElement('h2', {}, 'I am a h2 tag')]),


)
console.log(heading)
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading);   
root.render(parent);   