import React from 'react';
import './DailyForecasts.css';
import DailyForecastsPageView from "./View";


const DailyForecastPageLayout = () => (
    <div className="row">
        <h1>Daily Forecasts</h1>
        <div className="column">
            <div className="card">
                    <div className="container">
                        <h2 key={DailyForecastsPageView.day}>Monday</h2>
                        <p>12:00am</p>
                        <img src="img1.jpg" alt="Jane" ></img>
                    </div>
            </div>
        </div>

        <div className="column">
            <div className="card">
                    <div className="container">
                        <h2>Tuesday</h2>
                        <p>12:00am</p>
                        <img src="img1.jpg" alt="Jane"></img>
                    </div>
            </div>
        </div>

        <div className="column">
            <div className="card">
                    <div className="container">
                        <h2>Wednesday</h2>
                        <p>12:00am</p>
                        <img src="img1.jpg" alt="Jane"></img>
                    </div>
            </div>
        </div>

        <div className="column">
            <div className="card">
                    <div className="container">
                        <h2>Thursday</h2>
                        <p>12:00am</p>
                        <img src="img1.jpg" alt="Jane"></img>
                    </div>
            </div>
        </div>

        <div className="column">
            <div className="card">
                    <div className="container">
                        <h2>Friday</h2>
                        <p>12:00am</p>
                        <img src="img1.jpg" alt="Jane"></img>
                    </div>
            </div>
        </div>
    </div>
        );

export default DailyForecastPageLayout;