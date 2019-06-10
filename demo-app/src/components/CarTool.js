import React from 'react';

export const CarTool = ({ carList }) => {
    const carListItemFn = carListItem =>
        <tr key={carListItem.id} data-id={carListItem.id}>
            <th>{carListItem.id}</th>
            <td>{carListItem.make}</td>
            <td>{carListItem.model}</td>
            <td>{carListItem.year}</td>
            <td>{carListItem.colour}</td>
            <td>{carListItem.priceDenom} {carListItem.priceVal}</td>
        </tr>;

    return <>
        <header>
            <h1>Car Tool</h1>
        </header>
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
    </>;
};