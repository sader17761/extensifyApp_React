// this file will contain our JSX - we will manually write this.

console.log('App.js is running');

const app = {
    title: 'This is a new challenge',
    subtitle: 'This is the subtitle text',
    options: []
}

const onFormSubmit = (e) => {
    // prevents full page reset, or data being passed via the url.
    e.preventDefault(); 
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const resetList = () => {
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

const appRoot = document.getElementById('app');

const renderApp = () => {
    // JSX - JavaScript XML - Language Extension - () not necessary
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button onClick={resetList}>Remove All</button>
            {
                // numbers.map((number) => {
                //     return <p key={number}>Number: {number}</p>;
                // })
            }
            <ol>
                {
                    app.options.map((item) => <li key={item}>{item}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}> 
                <input type="text" name="option"/>
                <button>Add Button</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderApp();