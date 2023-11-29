import { actionTypes } from '../actions/actionTypes'

export const sortReducer = (state = 'cheap', action) => {
  switch (action.type) {
    case actionTypes.UPDATE_SORT:
      return action.payload
    default:
      return state
  }
}
