import React from 'react';
import Link from "react-router-dom/es/Link";
import API from '../../../DailyForecastsPage/api';
import './FormInput.css';
import DailyForecastsPageView from "../../../DailyForecastsPage/View";

const FormInputLayout = ({ city, country, onInputChange, onSubmit, buildLink }) => (
    <div className="FormContainer">
        <form action="" onSubmit={onSubmit}>
            <h3>Simply Weather</h3>
            <p>View the current weather for your location</p>
            <input type="text" name="city" value={city}
                   onChange={onInputChange} placeholder="city" required />
            <input type="text" name="country" value={country}
                   onChange={onInputChange} placeholder="country-code" required />
            <button type="submit" value={API}>Submit</button>
        </form>
    </div>



);

export default FormInputLayout;