import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getSearchId, getTickets } from '../../actions/actionCreators'
import Logo from '../logo'
import Filter from '../filter/filter'
import Sort from '../sort'
import TicketList from '../ticket-list'

import style from './app.module.scss'

function App() {
  const dispatch = useDispatch()

  const { searchId, tickets, stopFetching } = useSelector((state) => state.fetchData)
  const filter = useSelector((state) => state.filters)
  const sort = useSelector((state) => state.sort)
  const [limit, setLimit] = useState(5)

  useEffect(() => {
    if (!searchId) {
      dispatch(getSearchId())
    }
    if (searchId && !stopFetching) {
      dispatch(getTickets(searchId))
    }
  }, [searchId, tickets, stopFetching, dispatch])

  useEffect(() => {
    setLimit(5)
  }, [filter, sort])

  const filterAndSortTickets = (ticketsList) => {
    const filteredTickets = ticketsList.reduce((acc, ticket) => {
      if (filter.all) {
        acc.push(ticket)
      } else if (filter.zero && ticket.segments[0].stops.length === 0) {
        acc.push(ticket)
      } else if (filter.one && ticket.segments[0].stops.length === 1) {
        acc.push(ticket)
      } else if (filter.two && ticket.segments[0].stops.length === 2) {
        acc.push(ticket)
      } else if (filter.three && ticket.segments[0].stops.length === 3) {
        acc.push(ticket)
      }
      return acc
    }, [])

    if (sort === 'cheap') {
      return [...filteredTickets].sort((a, b) => a.price - b.price)
    }
    if (sort === 'fast') {
      return [...filteredTickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    }

    return filteredTickets
  }

  const ticketsData = filterAndSortTickets(tickets).slice(0, limit)

  return (
    <div className={style.app}>
      <div className={style['app-wrapper']}>
        <Logo />
        <Filter />
        <Sort />
        <TicketList ticketsData={ticketsData} showMoreTickets={() => setLimit((lim) => lim + 5)} />
      </div>
    </div>
  )
}

export default App
