import React from 'react';
import Link from "react-router-dom/es/Link";
import API from '../../../DailyForecastsPage/api';
import DailyForecastsPageView from "../../../DailyForecastsPage/View";

const FormInputLayout = ({ city, country, onInputChange, onSubmit, buildLink }) => (
    <div>


        <form action="" onSubmit={onSubmit}>
            <input type="text" name="city" value={city}
                   onChange={onInputChange} placeholder="city" required />
            <Link to={`/${city}`}>{city && `Go to /${city.toLowerCase()}`}</Link>
            <input type="text" name="country" value={country}
                   onChange={onInputChange} placeholder="country-code" required />
            <Link to={`/${country}`}>{country && `Go to /${country.toLowerCase()}`}</Link>
            <button type="submit" value={API}>Submit</button>
        </form>
    </div>



);

export default FormInputLayout;