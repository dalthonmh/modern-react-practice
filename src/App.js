import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as Reducer from './store/hooks_state/hooks_reducer';
import * as ACTIONS from './store/actions/actions';


const App = () => {

  const [stateGlobal, setStateGlobal] = useState(0);

  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState)

  const incrementStateGlobal = () => {
    setStateGlobal(stateGlobal + 1)
  }

  const decrementStateGlobal = () => {
    setStateGlobal(stateGlobal - 1)
  }

  const handleContextDispatchTrue = () => {
      dispatchContextGlobal(ACTIONS.success())
  }

  const handleContextDispatchFalse = () => {
      dispatchContextGlobal(ACTIONS.failure())
  }

    return(
      <div>
      React
      <Context.Provider
        value={{ 
          myStateGlobal: stateGlobal,
          incStateGlobal: incrementStateGlobal,
          decStateGlobal: decrementStateGlobal,

          reducerGlobalState: stateContextGlobal.stateProp2,
          dispatchContextTrue: handleContextDispatchTrue,
          dispatchContextFalse: handleContextDispatchFalse
         }}
      >
        <Routes />
      </Context.Provider>
      </div>
    )
}


export default App;
