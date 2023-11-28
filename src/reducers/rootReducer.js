import { actionTypes } from '../actions/actionTypes'

const initialFilters = {
  all: true,
  zero: true,
  one: true,
  two: true,
  three: true,
}
const initialState = {
  sort: 'cheap',
  filters: { ...initialFilters },
}

export const reducer = (state = initialState, action) => {
  const newState = { ...state }
  switch (action.type) {
    case actionTypes.UPDATE_SORT:
      return { ...state, sort: action.payload }
    case actionTypes.UPDATE_FILTERS:
      if (action.payload === 'all' && !state.filters.all) {
        return { ...newState, filters: { ...initialFilters } }
      }
      if (action.payload === 'all' && state.filters.all) {
        return { ...newState, filters: { all: false, zero: false, one: false, two: false, three: false } }
      }
      if (['zero', 'one', 'two', 'three'].includes(action.payload)) {
        newState.filters[action.payload] = !state.filters[action.payload]
        newState.filters.all = Object.entries({ ...newState.filters })
          .filter((item) => item[0] !== 'all')
          .every((item) => item[1] === true)
      }
      return newState
    default:
      return state
  }
}
