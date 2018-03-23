import React, {Component} from 'react';

import { groupBy } from '../../utils/collections';

import DailyForecastsPageLayout from './Layout';
import API from './api';


class DailyForecastsPageView extends Component {
    state = {
        dailyForecasts: [],
    };

    componentDidMount() {
        const { search } = this.props.location;
        const queryParams = new URLSearchParams(search);
        const city = queryParams.get('city');
        const country = queryParams.get('country');

        API.fetchDailyForecasts({ city, country })
            .then((response) => response.json())
            .then(({ list }) => this.groupHourlyForecastsByDay(list))
            .then((dailyForecasts) => this.setState({ dailyForecasts }))
            .catch((error) => console.log(error))
    }

    groupHourlyForecastsByDay = (hourlyForecasts) => {
        const weekDays = {
            0: "Sunday",
            1: "Monday",
            2: "Tuesday",
            3: "Wednesday",
            4: "Thursday",
            5: "Friday",
            6: "Saturday",
        };

        return groupBy(hourlyForecasts, (item) => {
            const dtInMilliSeconds = item.dt * 1000;
            const date = new Date(dtInMilliSeconds);
            const day = date.getDay();
            return weekDays[day];
        });
    };

    render() {
        console.log(this.state);
        return <DailyForecastsPageLayout {...this.state} />;
    }
}

export default DailyForecastsPageView;
