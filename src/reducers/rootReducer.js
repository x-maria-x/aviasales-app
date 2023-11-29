import { combineReducers } from 'redux'

import { filterReducer } from './filterReducer'
import { sortReducer } from './sortReducer'
import { fetchDataReducer } from './fetchDataReducer'

export const rootReducer = combineReducers({
  filters: filterReducer,
  sort: sortReducer,
  fetchData: fetchDataReducer,
})
