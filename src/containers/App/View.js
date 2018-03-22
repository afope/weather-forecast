import React, { Component } from 'react';

import AppLayout from './Layout';
import Header from './Header'
import Footer from './Footer';
import './App.css';



export default class App extends Component {
    render() {
        return (
            <div className="body">
                <Header />
                <AppLayout {...this.props} />
                <Footer />
            </div>
)
    }
}
