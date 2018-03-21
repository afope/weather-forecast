import React from 'react';

const FormInputLayout = ({ city, country, onInputChange, onSubmit }) => (
    <form action="" onSubmit={onSubmit}>
        <input type="text" name="city" value={city}
               onChange={onInputChange} placeholder="city" required />
        <input type="text" name="country" value={country}
               onChange={onInputChange} placeholder="country" required />
        <button type="submit">Submit</button>
    </form>
);

export default FormInputLayout;