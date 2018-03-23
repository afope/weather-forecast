import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"

import App from './containers/App';
import HomePage from './containers/HomePage';
import DailyForecastsPage from './containers/DailyForecastsPage';

import 'sanitize.css/sanitize.css';

const history = createHistory();


ReactDOM.render(
    <Router history={history}>
        <App>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/daily-forecasts" component={DailyForecastsPage} />
            </Switch>
        </App>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
