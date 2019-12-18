import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

const title = <h1>My first react element!</h1>;

const desc = <p> just learned how to create a react element and render it to the DOM.</p>;

const header = React.createElement(
    'header',
    null,
    title,
    desc
);

console.log(title);

ReactDOM.render(
    header,
    document.getElementById('root')
);


