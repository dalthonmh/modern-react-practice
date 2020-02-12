// Los hooks reducer deben exportar el estado inicial y el reducer en sí
import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  stateChange: '',
  stateSubmit: ''
}

export const UserHookReducer = (state = initialState, action) => {
    switch(action.type) {
      case ACTION_TYPES.USER_INPUT_CHANGE:
        return {
          ...state,
          stateChange: action.payload
        }
      case ACTION_TYPES.USER_INPUT_SUBMIT:
        return {
          ...state,
          stateSubmit: action.payload
        }
      default:
        return state
    }
}
