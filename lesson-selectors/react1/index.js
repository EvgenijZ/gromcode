/* eslint-disable no-undef */

// put your code here
const root = document.querySelector('#root');

const divEl = React.createElement('div', {
    className: 'greeting'
}, 'Hello, React!');

ReactDOM.render(divEl, root);