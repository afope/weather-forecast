import React from 'react';
import './HourlyForecasts.css';

const HourlyForecasts = ({hourlyForecasts}) => {
    const getTime = (timestamp) => {
        const dateInMilliseconds = timestamp * 1000;
        const date = new Date(dateInMilliseconds);
        const hours = date.getHours();
        return `${hours} : 00`;
    };

    return (<div>
        {hourlyForecasts.map((hourForecast, index) => (
            <div key={index} className="hour-forecast">
                <h4>{getTime(hourForecast.dt)}</h4>
                <i className={"owf owf-" + hourForecast.weather[0].id}>{hourForecast.weather[0].main}</i>
            </div>
        ))}
    </div>)
};

export default HourlyForecasts;
