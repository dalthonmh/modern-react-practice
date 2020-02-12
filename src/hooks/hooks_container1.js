import React, { useState, useEffect } from 'react';


const HooksContainer1 = () => {

    // const countStateValue = useState(0); // Returns a pair
    // const stateValue = countStateValue[0]; // First item in a pair
    // const setValue = countStateValue[1]; // Second item in a pair
    const [stateValue, setValue] = useState(0);
    const [useEffectValue, setUseEffectValue] = useState(null)

    useEffect(() => {
        setTimeout(() => {setUseEffectValue('Hola mundo')}, 3000 )
    }, [stateValue]) // esta variable hace que regrese al punto anterior o estado inicial que es 'Hola mundo'

    const incrementValue = () => {
        setValue(stateValue + 1)
    }

    const decrementValue = () => {
        setValue(stateValue - 1)
    }

    const changeUseStateValue = () => {
        setUseEffectValue('some string')
    }

    return(
      <div>
        React Hooks
        <br/>
        <button onClick={() => incrementValue()}>Inc Local State</button>
        <button onClick={() => decrementValue()}>Dec Local State</button>
        <button onClick={() => changeUseStateValue()}>Change use state value</button>
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
      </div>
    )
}


export default HooksContainer1;
