console.log('buildItVisible.js is running');

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            title: "Visibility Toggle",
            details: "This is where you will find all of the details to this application.",
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility 
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && <p>{this.state.details}</p>}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: "Visibility Toggle",
//     details: "This is where you will find all of the details to this application.",
//     isHidden: true
// }

// const appRoot = document.getElementById('app');

// const showHide = () => {
//     app.isHidden = !app.isHidden; //flips boolean value
//     render();
// };

// const render = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={showHide}>
//                 {app.isHidden === true ? "Show Details" : "Hide Details"}
//             </button>
//             {app.isHidden === false && <p>{app.details}</p>}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();