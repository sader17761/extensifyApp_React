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

const onRemoveAll = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

// this will allow us to re-render our data to the DOM when 'state' changes...
const renderApp = () => {
    // JSX - JavaScript XML - Language Extension - () not necessary
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
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