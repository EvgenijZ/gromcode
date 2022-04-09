import React from 'react';
import ReactDOM from 'react-dom';

const rootEl = document.querySelector('#root');

const searchForm = (
    <>
        <h1>Search Form</h1>
        <div>
            <input type="text" />
            <button>Search</button>
        </div>
    </>
);

ReactDOM.render(searchForm, rootEl);

