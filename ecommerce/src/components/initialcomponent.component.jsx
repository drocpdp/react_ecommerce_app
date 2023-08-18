import React from 'react';
import { useState } from 'react';

const InitialComponent = () => {

    const typedInput = 'Initial input';
    const [enteredText, changeText] = useState({typed: 'Enter text'});

    return(
        <div>
            <label>Enter text here</label>
            <input 
                type="text"
                onChange={e=> {
                    changeText({typed:e.target.value})
                }}
            >
            </input>
            <hr/>
            <h1>{enteredText.typed}</h1>
        </div>
    )
}

export default InitialComponent;