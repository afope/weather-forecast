import React, { Component } from 'react';

import AppLayout from './Layout';


export default class App extends Component {
    render() {
        return <AppLayout {...this.props} />;
    }
}
