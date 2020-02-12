import React, { useState, useReducer, useContext } from 'react';
import * as HookReducer from '../store/hooks_state/hooks_input_reducer';
import * as ACTIONS from '../store/actions/actions';

const HooksForm = () => {

    const [valueChange, setValueChange] = useState('');
    const [valueSubmit, setValueSubmit] = useState('');

    const handleUseStateChange = (event) => {
        setValueChange(event.target.value);
    }

    const handleUseStateSubmit = (event) => {
        event.preventDefault();
        setValueSubmit(event.target.useState.value);
    }

    const [stateReducer, dispatchReducer] = useReducer(HookReducer.UserHookReducer, HookReducer.initialState)

    const handleUseStateChangeReducer = (event) => {
        dispatchReducer(ACTIONS.user_input_change(event.target.value));
    }

    const handleUseStateSubmitReducer = (event) => {
        event.preventDefault();
        dispatchReducer(ACTIONS.user_input_submit(event.target.useStateChange.value));
    }

    return (
        <div>
            <hr/>
            <form onSubmit={handleUseStateSubmit}>
                <label htmlFor="">React useState: </label>
                <input id='useState' type="text" onChange={handleUseStateChange} />
                <button type="submit">Submit</button>
            </form>
            <div>
                <h2>React useState: </h2>
                <p>Change: {valueChange}</p>
                <p>Submit: {valueSubmit}</p>
            </div>
            <br/>
            <hr/>
            <br/>
            <form onSubmit={handleUseStateSubmitReducer}>
                <label htmlFor="">React useState reducer: </label>
                <input id='useStateChange' type="text" onChange={handleUseStateChangeReducer} />
                <button type="submit">Submit</button>
            </form>
            <div>
                <h2>React useState: </h2>
                <p>Change: {stateReducer.stateChange}</p>
                <p>Submit: {stateReducer.stateSubmit}</p>
            </div>
        </div>
    )
}

export default HooksForm