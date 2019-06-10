import React from 'react';
import ReactDOM from 'react-dom';
import { ColourTool } from './components/ColourTool';
import { CarTool } from './components/CarTool';

const colourList = [
    'blue', 'green', 'orange', '#00A1E1 (Plastiq Blue)', 'maroon', 'hot pink'
];

const carList = [
    {
        id: 0,
        make: 'VW',
        model: 'Golf',
        year: 1998,
        colour: 'Red',
        priceDenom: 'EUR',
        priceVal: 4000
    },
    {
        id: 1,
        make: 'Porche',
        model: 'Carrera',
        year: 2019,
        colour: 'Black',
        priceDenom: 'USD',
        priceVal: 90000
    }
];


ReactDOM.render(
    <>
        <ColourTool colourList={colourList} />
        <CarTool carList={carList} />
    </>,
    document.querySelector('#root'),
);