import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Switch, Route } from 'react-router-dom';
import createHistory from "history/createBrowserHistory"

import App from './containers/App';
import HomePage from './containers/HomePage';

const history = createHistory();


ReactDOM.render(
    <Router history={history}>
        <App>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/city" component={(props) => <div>City</div>}/>
            </Switch>
        </App>
    </Router>,
    document.getElementById('root')
);

registerServiceWorker();
