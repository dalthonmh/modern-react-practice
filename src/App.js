import React, { useState } from 'react';
import Routes from './routes';
import Context from './utils/context';


const App = () => {

  const [stateGlobal, setStateGlobal] = useState(0);

  const incrementStateGlobal = () => {
    setStateGlobal(stateGlobal + 1)
  }

  const decrementStateGlobal = () => {
    setStateGlobal(stateGlobal - 1)
  }

    return(
      <div>
      React
      <Context.Provider
        value={{ 
          myStateGlobal: stateGlobal,
          incStateGlobal: incrementStateGlobal,
          decStateGlobal: decrementStateGlobal
         }}
      >
        <Routes />
      </Context.Provider>
      </div>
    )
}


export default App;
