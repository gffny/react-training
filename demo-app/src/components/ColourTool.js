import React from 'react';

export const ColourTool = ({ colourList }) => {

    const listItems = (itemList, itemFormatterFn) => itemList.map((item, index) =>
        <li key={index}>{itemFormatterFn(item)}</li>
    );

    return <>
        <header>
            <h1>Colour Tool</h1>
        </header>
        <ul>
            {listItems(colourList, item => item.toUpperCase())}
        </ul>
    </>;
};