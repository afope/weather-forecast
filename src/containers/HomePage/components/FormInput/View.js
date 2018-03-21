import React from 'react';
import FormLayout from './Layout';


class FormView extends React.Component {
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

    handleInputChange = ({ target: { name, value } }) => this.setState({ [name]: value });

    render () {
        return (
            <FormLayout
                {...this.props}
                {...this.state}
                onSubmit={this.handleSubmit}
                onInputChange={this.handleInputChange}
            />
        );
    }
}

export default FormView;