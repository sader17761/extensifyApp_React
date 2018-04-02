// this file will contain our JSX - we will manually write this.

console.log('App.js is running');

// JSX - JavaScript XML - Language Extension - () not necessary
var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info.</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
        <h1>Corey Sader</h1>
        <p>Age: 43</p>
        <p>Location: Prior Lake, MN</p>
    </div>
);

var appRoot = document.getElementById('app');

//takes 2 arguments, the 1st 'what' you want to render, and the 2nd 'where' you want to render it
ReactDOM.render(templateTwo, appRoot);