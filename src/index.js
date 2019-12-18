import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

const desc = 'just learned how to create a react element and render it to the DOM.';
const myTitleID = 'main-title';
const name = 'Lemon';

const header = (
    <header>
        <h1 id={myTitleID}>{name}'s First React Element</h1>
        <p>{desc}</p>
    </header>
);


ReactDOM.render(
    header,
    document.getElementById('root')
);


