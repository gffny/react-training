import React from 'react';
import PropTypes from 'prop-types';

export const CarTableRow = ({ car: initialCar }) => {
    return <tr><td>{initialCar.id}</td><td>{initialCar.make}</td><td>{initialCar.model}</td><td>{initialCar.year}</td><td>{initialCar.colour}</td><td>{initialCar.priceDenom} {initialCar.priceVal}</td></tr>
};

CarTableRow.propTypes = {
    // use shape
    car: PropTypes.shape({
        make: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        colour: PropTypes.string.isRequired,
        priceDenom: PropTypes.string.isRequired,
        priceVal: PropTypes.number.isRequired
    })
};