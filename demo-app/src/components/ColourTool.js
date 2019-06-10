import React, { useState } from 'react';

export const ColourTool = ({ colourList: initialColourList }) => {

    // useState returns an array, the first value of which returns the value, the second value is a function to update the value
    const [colourForm, setColourForm] = useState({
        colour: '',
        hexcode: ''
    });

    const [colours, setColours] = useState(initialColourList.slice());

    const listItems = (itemList, itemFormatterFn) => itemList.map((item, index) =>
        <li key={index}>{itemFormatterFn(item)}</li>
    );

    /*  without this function the real DOM cannot update the virtual DOM. 
        The virtual DOM cannot be updated by the real DOM, 
        it can trigger a re-rendering, which is what this function does */
    const change = (e) => setColourForm(e.target.value);

    const addColour = () => {
        setColours(colours.concat(colourForm.colour));
        setColourForm({
            colour: '',
            hexcode: '',
        })
    }

    return <>
        <header>
            <h1>Colour Tool</h1>
        </header>
        <ul>
            {listItems(colours, item => item.toUpperCase())}
        </ul>
        <form>
            <div>
                <label>New Colour </label>
                <input type="text" id="new-colour-input" value={colourForm.colour} onChange={change} />
                <button type="button" onClick={addColour}>Add</button>
            </div>
        </form>
    </>;
};