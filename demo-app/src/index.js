import React from 'react';
import ReactDOM from 'react-dom';
import { ColourTool } from './components/ColourTool';
import { CarTool } from './components/CarTool';

const colourList = [
    { id: 0, colour: 'Blue', hexcode: '#0000FF' },
    { id: 1, colour: 'Green', hexcode: '#00FF00' },
    { id: 2, colour: 'Red', hexcode: '#FF0000' }
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