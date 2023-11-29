import { actionTypes } from '../actions/actionTypes'

const initialFilters = {
  all: true,
  zero: true,
  one: true,
  two: true,
  three: true,
}

export const filterReducer = (state = initialFilters, action) => {
  const newState = { ...state }
  switch (action.type) {
    case actionTypes.UPDATE_FILTERS:
      if (action.payload === 'all' && !state.all) {
        return { ...initialFilters }
      }
      if (action.payload === 'all' && state.all) {
        return { all: false, zero: false, one: false, two: false, three: false }
      }
      if (['zero', 'one', 'two', 'three'].includes(action.payload)) {
        newState[action.payload] = !state[action.payload]
        newState.all = Object.entries({ ...newState })
          .filter((item) => item[0] !== 'all')
          .every((item) => item[1] === true)
      }
      return newState
    default:
      return state
  }
}
