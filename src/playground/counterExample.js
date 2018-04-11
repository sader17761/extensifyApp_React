/* ----> COUNTER APPLICATION <---- */
// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// };

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };

// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     //takes 2 arguments, the 1st 'what' you want to render, and the 2nd 'where' you want to render it
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();

console.log("Counter Example is Running!");

class Counter extends React.Component {
    constructor(props) {
        //must call super otherwise we'll break things
        super(props);  
        //allows us access to 'this.props' in our methods...example 'handleAddOne()'
        this.handleAddOne = this.handleAddOne.bind(this); 
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        try {
            // returns a string value that needs to be converted before we set the state...
            const count = parseInt(localStorage.getItem('count'), 10);
            // first checks if count is a number before we set the state...
            if(!isNaN(count)) {
                this.setState(() => ({ count }));
            }
        } catch (e) {
            // here we will do nothing.
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        // this checks to see if the values are different before we use localStorage
        if(prevState.count !== this.state.count){
            localStorage.setItem('count', this.state.count);
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1 // can not use ++ to increment the state value
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            if(prevState.count > 0){
                return {
                    count: prevState.count - 1
                };
            }
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));