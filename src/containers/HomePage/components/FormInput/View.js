import React from 'react';
import FormLayout from './Layout';
import { Link } from 'react-router-dom';


class FormView extends React.Component {
    state = {
        city: '',
        country: '',
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { history } = this.props;
        const { city, country } = this.state;

        console.log('Event: Form Submit', city);
        console.log('Event: Form Submit', country);

        history.push({
            pathname: "/daily-forecasts",
            search: `?city=${city}&country=${country}`,
        })
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