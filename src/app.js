console.log("Running app.js");

//stateless functional components don't manage state - only concerned with presentation
//class based components manage state

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this); //binds to the current instance
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        };
    }

    /* ----> LIFECYCLE METHODS <---- */
    /* NOTE: Here we will be working with local storage */
                             
    // meant for managing life cycle...only available to us in a class component...this will allow us to fetch data.
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options){
                this.setState(() => ({ options: options }));
            }
        } catch (e) {
            // Do nothing at all
        } 
    }

    //will only work after state or prop values change...this will allow us to save data.
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('Local Storage: ', localStorage.getItem('options'));
        }
        
    }

    //this will fire just before your component goes away...usually not used all that much.
    componentWillUnmount() {
        console.log('Component will unmount!');
    }

    /* ----> END LIFECYCLE METHODS <---- */

    handleDeleteOptions() {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });

        //this is a shorter way to write the same thing above 'this.setState'...implicitely returning an object...
        this.setState(() => ({ options: [] }));
    };

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }));
    }

    handlePick() {
        //generates a random number between 0 and length of state array (options)
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        //randomly selects an option from 'this.state.options' using random number
        const option = this.state.options[randomNum];
        console.log(option);
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.';
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     }
        // });

        //alternative to above...
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer!';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}

// STATELESS FUNCTIONAL COMPONENT...
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

// this is how to set up default properties
Header.defaultProps = {
    title: 'Indecision'
};

// CLASS BASED COMPONENT...
// class Header extends React.Component{ // using extends here allows us to use everything related to React
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }

// STATELESS FUNCTIONAL COMPONENT...
const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
}

// CLASS BASED COMPONENT...
// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button 
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOptions}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         );
//     }
// }

// STATELESS FUNCTIONAL COMPONENT...
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            <ul>
                {
                    // props.options.map((option) => <li key={option}>{option}</li>)
                    props.options.map((option) => (
                        <Option 
                            key={option} 
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                    />))
                }
            </ul>
        </div>
    );
}

// CLASS BASED COMPONENT...
// class Options extends React.Component {
//     // constructor(props) {
//     //     super(props);  
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this); //allows us access to 'this.props' in our methods...example 'handleRemoveAll()'
//     // }

//     // handleRemoveAll() {
//     //     console.log(this.props.options);
//     //     //alert("handleRemoveAll works!");
//     // }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 <ul>
//                     {
//                         // this.props.options.map((option) => <li key={option}>{option}</li>)
//                         this.props.options.map((option) => <Option key={option} optionText={option} />)
//                     }
//                 </ul>
//                 {/* <Option /> */}
//             </div>
//         );
//     }
// }

// STATELESS FUNCTIONAL COMPONENT...
const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
                Remove
            </button>
        </div>
    );
}

// CLASS BASED COMPONENT...
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 Option: {this.props.optionText}
//             </div>
//         );
//     }
// }

// CLASS BASED COMPONENT...
class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        // gets option from the form
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        // this.setState(() => {
        //     return {
        //         error: error // this is identical to this 'error'
        //     }
        // });

        //alternative to above...
        this.setState(() => ({ error: error }));

        if(!error){
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// this is an example of a 'STATELESS FUNCTIONAL COMPONENT'...faster than class based components...easier to read/write/test
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

// ReactDOM.render(<User name="Corey Sader" />, document.getElementById('app'));

// options here is default input
// ReactDOM.render(<IndecisionApp options={['options 1', 'options 2']}/>, document.getElementById('app'));

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));