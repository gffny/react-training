import React from 'react';
import PropTypes from 'prop-types';

import { CarTableRow } from './CarTableRow';

export const CarTable = ({ carList: initialCarList }) => {
    return <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Make</th>
                <th>Model</th>
                <th>Year</th>
                <th>Colour</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {initialCarList.map(item => <CarTableRow car={item} />)}
        </tbody>
    </table>
};

CarTable.propTypes = {
    carList: PropTypes.arrayOf(
        {
            make: PropTypes.string.isRequired,
            model: PropTypes.string.isRequired,
            year: PropTypes.number.isRequired,
            colour: PropTypes.string.isRequired,
            priceDenom: PropTypes.string.isRequired,
            priceVal: PropTypes.number.isRequired
        }
    ).isRequired
};
