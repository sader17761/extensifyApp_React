'use strict';

// this file will contain our JSX - we will manually write this.

console.log('App.js is running');

var app = {
    title: 'This is a new challenge',
    subtitle: 'This is the subtitle text',
    options: ['One', 'Two']

    // JSX - JavaScript XML - Language Extension - () not necessary
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
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

var user = {
    name: "Corey Sader",
    age: 43,
    location: 'Prior Lake, MN'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

//takes 2 arguments, the 1st 'what' you want to render, and the 2nd 'where' you want to render it
ReactDOM.render(template, appRoot);
