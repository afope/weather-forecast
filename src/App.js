import React from 'react';
import './App.css';
import WeatherFc from './WeatherFc';
import UserInput from './UserInput';
import AppRouter from './AppRouter';

const App = () => {
    return (
        <div className="App">
            <WeatherFc/>
            <UserInput/>
            <AppRouter/>
        </div>
        )

};

export default App;
