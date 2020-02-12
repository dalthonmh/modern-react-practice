import React, { useState, useEffect, useReducer, useContext } from 'react';
import Context from '../utils/context';
import * as Reducer from '../store/hooks_state/hooks_reducer';
import * as ACTIONS from '../store/actions/actions';

const HooksContainer1 = () => {

    // const countStateValue = useState(0); // Returns a pair
    // const stateValue = countStateValue[0]; // First item in a pair
    // const setValue = countStateValue[1]; // Second item in a pair
    const [stateValue, setValue] = useState(0);
    const [useEffectValue, setUseEffectValue] = useState(null);
    // const [state, dispatch] = useReducer(Reducer, initial state)
    const [state, dispatch] = useReducer(Reducer.HooksReducer, Reducer.initialState);

    useEffect(() => {
        setTimeout(() => {setUseEffectValue('Hola mundo')}, 3000 )
    }, [stateValue]) // esta variable hace que regrese al punto anterior o estado inicial que es 'Hola mundo'

    const context = useContext(Context);


    const incrementValue = () => {
        setValue(stateValue + 1)
    }

    const decrementValue = () => {
        setValue(stateValue - 1)
    }

    const changeUseStateValue = () => {
        setUseEffectValue('some string')
    }

    const handleDispatchTrue = () => {
        dispatch(ACTIONS.success())
    }

    const handleDispatchFalse = () => {
        dispatch(ACTIONS.failure())
    }


    return(
      <div>
        React Hooks
        <br/>
        <button onClick={() => incrementValue()}>Inc Local State</button>
        <button onClick={() => decrementValue()}>Dec Local State</button>
        <button onClick={() => changeUseStateValue()}>Change use state value</button>
        <button onClick={() => handleDispatchTrue()}>statePropHook true</button>
        <button onClick={() => handleDispatchFalse()}>statePropHook false</button>
        <button onClick={() => context.incStateGlobal()}>Inc Global state</button>
        <button onClick={() => context.decStateGlobal()}>Dec Glbal state</button>

        <button onClick={() => context.dispatchContextTrue()}>Dispatch Context True</button>
        <button onClick={() => context.dispatchContextFalse()}>Dispatch Context False</button>
        <br/>
        <div>
            <p>Local State: {stateValue}</p>
        </div>
        <br/>
        <div>{ useEffectValue
                ? <p>{useEffectValue}</p>
                : <p>No value</p>
            }
        </div>
        <br/>
        <div>
            {
                state.statePropHook
                ? <p>statePropHook: True</p>
                : <p>statePropHook: False</p>
            }
        </div>
        <br/>
        <div>
            <p>Global State: {context.myStateGlobal}</p>
        </div>
        <br/>
        <div>{
                context.reducerGlobalState
                ? <p>reducerGlobalState: True</p>
                : <p>reducerGlobalState: False</p>
            }
        </div>
        <br/>
      </div>
    )
}


export default HooksContainer1;
