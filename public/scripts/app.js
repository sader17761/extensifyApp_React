'use strict';

// this file will contain our JSX - we will manually write this.

console.log('App.js is running');

var app = {
    title: 'This is a new challenge',
    subtitle: 'This is the subtitle text',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    // prevents full page reset, or data being passed via the url.
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

var resetList = function resetList() {
    app.options = [];
    renderApp();
};

// const user = {
//     name: "Corey Sader",
//     age: 43,
//     location: 'Prior Lake, MN'
// };

// function getLocation(location) {
//     if(location) {
//         return <p>Location: {location}</p>;
//     }
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : "Anonymous"}</h1>
//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );

var appRoot = document.getElementById('app');

var renderApp = function renderApp() {
    // JSX - JavaScript XML - Language Extension - () not necessary
    var template = React.createElement(
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: resetList },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (item) {
                return React.createElement(
                    'li',
                    { key: item },
                    item
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Button'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

renderApp();
