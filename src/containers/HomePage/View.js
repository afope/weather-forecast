import React, { Component } from 'react';

import HomePageLayout from './Layout';


export default class HomePage extends Component {
    render() {
        return <HomePageLayout {...this.props} />;
    }
}
