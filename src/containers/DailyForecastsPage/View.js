import React, {Component} from 'react';

import DailyForecastsPageLayout from './Layout';
import API from './api';


class DailyForecastsPageView extends Component {
    state = {
        forecasts: null
    };

    componentDidMount() {
        const { search } = this.props.location;
        const queryParams = new URLSearchParams(search);
        const city = queryParams.get('city');
        const country = queryParams.get('country');

        API.fetchDailyForecasts({ city, country })
            .then((response) => response.json())
            .then((forecasts) => this.setState({ forecasts }))
            .catch((error) => console.log(error))
    }

    render() {
        return <DailyForecastsPageLayout {...this.state} />;
    }
}

export default DailyForecastsPageView;
