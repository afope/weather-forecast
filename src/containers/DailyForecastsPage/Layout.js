import React from 'react';
import './DailyForecasts.css';
import DailyForecastsPageView from "./View";
import HourlyForecasts from './components/HourlyForecasts';

const DailyForecastPageLayout = ({ dailyForecasts }) => (
    <div className="row">
        <h1>Daily Forecasts</h1>
        {Object.keys(dailyForecasts).map(function(day, index){
           return <div className="column" key={index}>
                <div className="card">
                    <div className="container">
                        <h2>{day}</h2>
                        <HourlyForecasts hourlyForecasts={dailyForecasts[day]} />
                    </div>
                </div>
            </div>
        })}
        {console.log(dailyForecasts, 'props in layout')}
    </div>
);

export default DailyForecastPageLayout;