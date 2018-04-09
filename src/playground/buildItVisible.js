console.log('buildItVisible.js is running');

const app = {
    title: "Visibility Toggle",
    details: "This is where you will find all of the details to this application.",
    isHidden: true
}

const appRoot = document.getElementById('app');

const showHide = () => {
    app.isHidden = !app.isHidden; //flips boolean value
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={showHide}>
                {app.isHidden === true ? "Show Details" : "Hide Details"}
            </button>
            {app.isHidden === false && <p>{app.details}</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();