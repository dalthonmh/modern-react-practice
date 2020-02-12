// Los hooks reducer deben exportar el estado inicial y el reducer en sí
import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  statePropHook: false,
  stateProp2: false
}

export const HooksReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.SUCCESS:
        return {
          ...state,
          statePropHook: true,
          stateProp2: true
        }
      case ACTION_TYPES.FAILURE:
        return {
          ...state,
          statePropHook: false,
          stateProp2: false
        }
      default:
        return state
    }
}
