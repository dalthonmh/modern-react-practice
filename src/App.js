import React, { useState, useReducer } from 'react';
import Routes from './routes';
import Context from './utils/context';
import * as Reducer from './store/hooks_state/hooks_reducer';
import * as HookReducer from './store/hooks_state/hooks_input_reducer';
import * as ACTIONS from './store/actions/actions';


const App = () => {

  const [stateGlobal, setStateGlobal] = useState(0);

  const [stateContextGlobal, dispatchContextGlobal] = useReducer(Reducer.HooksReducer, Reducer.initialState);

  const [stateContext, dispatchContext] = useReducer(HookReducer.UserHookReducer, HookReducer.initialState);



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

  const handleUseStateChangeContext = (event) => {
      dispatchContext(ACTIONS.user_input_change(event.target.value));
  }

  const handleUseStateSubmitContext = (event) => {
      event.preventDefault();
      dispatchContext(ACTIONS.user_input_submit(event.target.useContext.value));
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
          dispatchContextFalse: handleContextDispatchFalse,

          stateContextChange: stateContext.stateChange,
          stateContextSubmit: stateContext.stateSubmit,
          handleUseChangeContext: (event) => handleUseStateChangeContext(event),
          handleUseChangeSubmit: (event) => handleUseStateSubmitContext(event)

         }}
      >
        <Routes />
      </Context.Provider>
      </div>
    )
}


export default App;
