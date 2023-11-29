import { actionTypes } from '../actions/actionTypes'

const initialState = { searchId: null, tickets: [], stopFetching: false }

export const fetchDataReducer = (state = initialState, action) => {
  const { tickets, stopFetching } = action
  const filteredTickets = tickets ? tickets.filter((el) => !el.error) : tickets
  switch (action.type) {
    case actionTypes.GET_SEARCH_ID:
      return { ...state, searchId: action.payload }
    case actionTypes.GET_TICKETS:
      return { ...state, tickets: [...state.tickets, ...filteredTickets], stopFetching }
    default:
      return state
  }
}
