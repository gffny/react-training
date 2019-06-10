import React, { useState } from 'react';

export const ColourTool = ({ colourList }) => {

    // useState returns an array, the first value of which returns the value, the second value is a function to update the value
    const [newColourInput, setNewColourInput] = useState('');

    const listItems = (itemList, itemFormatterFn) => itemList.map((item, index) =>
        <li key={index}>{itemFormatterFn(item)}</li>
    );

    /*  without this function the real DOM cannot update the virtual DOM. 
        The virtual DOM cannot be updated by the real DOM, 
        it can trigger a re-rendering, which is what this function does */
    const change = (e) => setNewColourInput(e.target.value);

    return <>
        <header>
            <h1>Colour Tool</h1>
        </header>
        <ul>
            {listItems(colourList, item => item.toUpperCase())}
        </ul>
        <form>
            <div>
                <label>New Colour </label>
                <input type="text" id="new-colour-input" value={newColourInput} onChange={change} />
            </div>
        </form>
    </>;
};