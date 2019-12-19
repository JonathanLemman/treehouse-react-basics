import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';


const Header = () => {
    return (
        <header>
            <h1>Scoreboard</h1>
            <span className="stats">Players: 1</span>
        </header>
    );
};


ReactDOM.render(
    <Header />,
    document.getElementById('root')
);


