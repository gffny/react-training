import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';

export const CarTool = ({ carList: initialCarList }) => {
    const carListItemFn = carListItem =>
        <tr key={carListItem.id} data-id={carListItem.id}>
            <th>{carListItem.id}</th>
            <td>{carListItem.make}</td>
            <td>{carListItem.model}</td>
            <td>{carListItem.year}</td>
            <td>{carListItem.colour}</td>
            <td>{carListItem.priceDenom} {carListItem.priceVal}</td>
        </tr>;

    const [newCarInput, setNewCarInput] = useState({
        make: '',
        model: '',
        year: '',
        colour: '',
        priceDenom: '',
        priceVal: ''
    });

    const [carList, setCarList] = useState(initialCarList.slice());

    const change = (car) => {
        setNewCarInput({ ...newCarInput, [car.target.id]: car.target.type === 'number' ? Number(car.target.value) : car.target.value });
    };

    const addCar = () => {
        setCarList(
            [
                ...carList,
                {
                    id: Math.max(...carList.map(c => c.id), 0) + 1,
                    make: newCarInput['make'],
                    model: newCarInput['model'],
                    year: newCarInput['year'],
                    priceVal: newCarInput['priceVal'],
                    priceDenom: newCarInput['priceDenom']
                }
            ]
        );
    };

    return <>
        <ToolHeader headerText="Car Tool" />
        <table>
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
                {carList.map(car => carListItemFn(car))}
            </tbody>
        </table>
        <form>
            <table>
                <tbody>
                    <tr>
                        <th>
                            <label htmlFor="make">Make </label>
                        </th>
                        <td>
                            <input type="text" id="make" value={newCarInput.make} onChange={change} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor="new-car-model">Model </label>
                        </th>
                        <td>
                            <input type="text" id="model" value={newCarInput.model} onChange={change} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor="nyear">Year </label>
                        </th>
                        <td>
                            <input type="text" id="year" value={newCarInput.year} onChange={change} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor="colour">Colour </label>
                        </th>
                        <td>
                            <input type="text" id="colour" value={newCarInput.colour} onChange={change} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor="price">Price (denomination) </label>
                        </th>
                        <td>
                            <input type="text" id="priceDenom" value={newCarInput.priceDenom} onChange={change} />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label htmlFor="priceVal">Price (value) </label>
                        </th>
                        <td>
                            <input type="text" id="priceVal" value={newCarInput.priceVal} onChange={change} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type="button" onClick={addCar}>Add Car</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </>;
};