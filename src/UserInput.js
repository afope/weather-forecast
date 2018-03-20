import React from 'react';
import './UserInput.css';

class Form extends React.Component {
    state = {
        city: '',
        country: ''
    };
    handleSubmit = (event) => {
        event.preventDefault();
        const inputCity = this.state.city;
        const inputCountry = this.state.country;
        console.log('Event: Form Submit', this.state.city);
        console.log('Event: Form Submit', this.state.country);

    };
    render () {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.city}
                       onChange={(event) => this.setState({city: event.target.value})}  placeholder="city" required />
                <input type="text" value={this.state.country}
                       onChange={(event) => this.setState({country: event.target.value})} placeholder="country" required />
                <button type="submit">Submit</button>
            </form>

        );
    }
}

export default Form;