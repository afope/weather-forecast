import React from 'react';
import FormLayout from './Layout';



class FormView extends React.Component {
    state = {
        city: '',
        country: '',
        link: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const inputCity = this.state.city;
        const inputCountry = this.state.country;
        const link = `http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=2dbaca56af8c355ab68d62c4714ab889&q=${this.state.city},${this.state.country}`;
        console.log('Event: Form Submit', this.state.city);
        console.log('Event: Form Submit', this.state.country);
        const buildLink = (link) => link;
        console.log('Event: Form Submit', link);

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