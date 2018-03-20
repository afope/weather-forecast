import React from 'react';
import './App.css';
import WeatherFc from './WeatherFc';
import UserInput from './UserInput';

const App = () => {
    return (
        <div className="App">
            <WeatherFc/>
            <UserInput name="City: "/>
            <UserInput name="Country: "/>
        </div>
        )

};

export default App;
