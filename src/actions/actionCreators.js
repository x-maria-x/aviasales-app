import { actionTypes } from './actionTypes'

export const updateFilters = (payload) => ({ type: actionTypes.UPDATE_FILTERS, payload })

export const updateSort = (payload) => ({ type: actionTypes.UPDATE_SORT, payload })

export const getSearchId = () => async (dispatch) => {
  const response = await fetch('https://aviasales-test-api.kata.academy/search')
  const jsonData = await response.json()

  dispatch({
    type: actionTypes.GET_SEARCH_ID,
    payload: jsonData.searchId,
  })
}

export const getTickets = (searchId) => async (dispatch) => {
  try {
    const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    if (response.ok) {
      const jsonData = await response.json()
      dispatch({
        type: actionTypes.GET_TICKETS,
        tickets: jsonData.tickets,
        stopFetching: jsonData.stop,
      })
    } else {
      dispatch({ type: actionTypes.GET_TICKETS, tickets: [{ error: 'error' }] })
    }
  } catch (error) {
    dispatch({ type: actionTypes.GET_TICKETS, tickets: [{ error: 'error' }] })
  }
}
