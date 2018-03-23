import React from 'react';

import Jumbotron from './components/Jumbotron';
import FormInput from './components/FormInput';
import './HomePageLayout.css';

const HomePageLayout = (props) => (
    <div>
        <div>
            <Jumbotron />
            <FormInput {...props} />
        </div>
    </div>
);

export default HomePageLayout;
