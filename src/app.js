// this file will contain our JSX - we will manually write this.

console.log('App.js is running');

const app = {
    title: 'This is a new challenge',
    subtitle: 'This is the subtitle text',
    options: ['One', 'Two']
}

// JSX - JavaScript XML - Language Extension - () not necessary
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);

const user = {
    name: "Corey Sader",
    age: 43,
    location: 'Prior Lake, MN'
};

function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

//takes 2 arguments, the 1st 'what' you want to render, and the 2nd 'where' you want to render it
ReactDOM.render(template, appRoot);