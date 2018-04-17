import React from 'react';

export default class AddOption extends React.Component {
    // class binding syntax (to use, we needed to install 'npm install babel-plugin-transform-class-properties')
    state = {
        error: undefined
    };
    // the above replaces this way of doing things...
    // constructor(props) {
    //     super(props);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.state = {
    //         error: undefined
    //     }
    // }

    handleAddOption = (e) => {
        e.preventDefault();
        
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error: error }));

        if(!error){
            e.target.elements.option.value = '';
        }
    };

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