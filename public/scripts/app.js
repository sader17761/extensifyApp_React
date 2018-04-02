'use strict';

// this file will contain our JSX - we will manually write this.

console.log('App.js is running');

// JSX - JavaScript XML - Language Extension - () not necessary
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info.'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Corey Sader'
    ),
    React.createElement(
        'p',
        null,
        'Age: 43'
    ),
    React.createElement(
        'p',
        null,
        'Location: Prior Lake, MN'
    )
);

var appRoot = document.getElementById('app');

//takes 2 arguments, the 1st 'what' you want to render, and the 2nd 'where' you want to render it
ReactDOM.render(templateTwo, appRoot);
