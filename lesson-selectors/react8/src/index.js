import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.querySelector('#root');

const secondsElStyles = (second) => {
    return {
        color: second % 2 === 0 ? '#000' : '#fff',
        backgroundColor: second % 2 !== 0 ? '#000' : '#fff'
    }
}

const renderSeconds = () => {
    const currentSecond = new Date().getSeconds();

    const secondsEl = (
        <div className="seconds" style={secondsElStyles(currentSecond)}>Now is {currentSecond}</div>
    );

    ReactDOM.render(secondsEl, rootEl);
}

setInterval(renderSeconds, 1000);