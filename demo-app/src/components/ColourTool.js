import React, { useState } from 'react';

import { ToolHeader } from './ToolHeader';
import { UnorderedList } from './UnorderedList';

export const ColourTool = ({ colourList: initialColourList }) => {

    // useState returns an array, the first value of which returns the value, the second value is a function to update the value
    const [colourForm, setColourForm] = useState({
        colour: '',
        hexcode: ''
    });

    const [colours, setColours] = useState(initialColourList.slice());

    const listItems = (itemList) => itemList.map((item) =>
        <li key={item.id}>{item.colour} {item.hexcode}</li>
    );

    /*  without this function the real DOM cannot update the virtual DOM. 
        The virtual DOM cannot be updated by the real DOM, 
        it can trigger a re-rendering, which is what this function does */
    const change = (col) => {
        setColourForm({ ...colourForm, [col.target.id]: col.target.type === 'number' ? Number(col.target.value) : col.target.value });
    };
    const addColour = () => {
        setColours(
            [
                ...colours,
                {
                    id: Math.max(...colours.map(c => c.id), 0) + 1,
                    colour: colourForm.colour,
                    hexcode: colourForm.hexcode
                }
            ]
        );
        setColourForm({
            colour: '',
            hexcode: '',
        })
    }

    return <>
        <ToolHeader headerText="Color Tool" />
        <ul>
            {listItems(colours)}
        </ul>
        <ul>
            <UnorderedList itemList={["a", "b", "c"]} />
        </ul>
        <form>
            <div>
                <label>New Colour </label>
                <input type="text" id="colour" value={colourForm.colour} onChange={change} />
                <label>Hexcode </label>
                <input type="text" id="hexcode" value={colourForm.hexcode} onChange={change} />
                <button type="button" onClick={addColour}>Add</button>
            </div>
        </form>
    </>;
};