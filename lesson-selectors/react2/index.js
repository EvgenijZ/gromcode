const rootElement = document.querySelector('#root');

const renderGreeting = elem => {

    const titleElem = React.createElement('div', { className: 'greeting__title' }, 'Hello, world!');
    const textElem = React.createElement('div', { className: 'greeting__text' }, 'I\'m learning React');
    const greetingElem = React.createElement('div', { className: 'greeting' },
        [titleElem, textElem]);

    ReactDOM.render(greetingElem, elem);
};

renderGreeting(rootElement);
