/* ----> COUNTER APPLICATION <---- */
let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    //takes 2 arguments, the 1st 'what' you want to render, and the 2nd 'where' you want to render it
    ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();