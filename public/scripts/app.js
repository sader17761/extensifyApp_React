'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("Running app.js");

//stateless functional components don't manage state - only concerned with presentation
//class based components manage state

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this); //binds to the current instance
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: []
        };
        return _this;
    }

    /* ----> LIFECYCLE METHODS <---- */
    /* NOTE: Here we will be working with local storage */

    // meant for managing life cycle...only available to us in a class component...this will allow us to fetch data.


    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);

                if (options) {
                    this.setState(function () {
                        return { options: options };
                    });
                }
            } catch (e) {
                // Do nothing at all
            }
        }

        //will only work after state or prop values change...this will allow us to save data.

    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
                console.log('Local Storage: ', localStorage.getItem('options'));
            }
        }

        //this will fire just before your component goes away...usually not used all that much.

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('Component will unmount!');
        }

        /* ----> END LIFECYCLE METHODS <---- */

    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            // this.setState(() => {
            //     return {
            //         options: []
            //     };
            // });

            //this is a shorter way to write the same thing above 'this.setState'...implicitely returning an object...
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOption',
        value: function handleDeleteOption(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            //generates a random number between 0 and length of state array (options)
            var randomNum = Math.floor(Math.random() * this.state.options.length);
            //randomly selects an option from 'this.state.options' using random number
            var option = this.state.options[randomNum];
            console.log(option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
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
            this.setState(function (prevState) {
                return { options: prevState.options.concat(option) };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var subtitle = 'Put your life in the hands of a computer!';

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

// STATELESS FUNCTIONAL COMPONENT...


var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'h2',
            null,
            props.subtitle
        )
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
var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'What should I do?'
        )
    );
};

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
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'Remove All'
        ),
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please add an option to get started!'
        ),
        React.createElement(
            'ul',
            null,

            // props.options.map((option) => <li key={option}>{option}</li>)
            props.options.map(function (option) {
                return React.createElement(Option, {
                    key: option,
                    optionText: option,
                    handleDeleteOption: props.handleDeleteOption
                });
            })
        )
    );
};

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
var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOption(props.optionText);
                }
            },
            'Remove'
        )
    );
};

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

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(e) {
            e.preventDefault();
            // gets option from the form
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);

            // this.setState(() => {
            //     return {
            //         error: error // this is identical to this 'error'
            //     }
            // });

            //alternative to above...
            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                e.target.elements.option.value = '';
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        null,
                        'Add Option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

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

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
