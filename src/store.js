import { configureStore } from '@reduxjs/toolkit'

import { filterReducer } from './reducers/filterReducer'
import { sortReducer } from './reducers/sortReducer'
import { fetchDataReducer } from './reducers/fetchDataReducer'

export const store = configureStore({
  reducer: { filters: filterReducer, sort: sortReducer, fetchData: fetchDataReducer },
})
