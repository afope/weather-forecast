import React from 'react';

import Jumbotron from './components/Jumbotron';
import FormInput from './components/FormInput';
import './HomePageLayout.css';

const HomePageLayout = () => (
    <div class="Home">
        <div className="HomePageLayout">
            <Jumbotron />
            <FormInput />
        </div>
    </div>

);

export default HomePageLayout;
