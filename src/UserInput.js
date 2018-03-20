import React from 'react';
import './UserInput.css';

class UserInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        const input = this.state.value;
        console.log(input);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="UserInput">
                <label>
                    {this.props.name}
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default UserInput;