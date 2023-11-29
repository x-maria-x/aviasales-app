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
    const filterZeroTickets = ticketsList.filter((ticket) => ticket.segments[0].stops.length === 0)
    const filterOneTickets = ticketsList.filter((ticket) => ticket.segments[0].stops.length === 1)
    const filterTwoTickets = ticketsList.filter((ticket) => ticket.segments[0].stops.length === 2)
    const filterThreeTickets = ticketsList.filter((ticket) => ticket.segments[0].stops.length === 3)

    let filtredTickets = []
    if (filter.zero) filtredTickets = [...filtredTickets, ...filterZeroTickets]
    if (filter.one) filtredTickets = [...filtredTickets, ...filterOneTickets]
    if (filter.two) filtredTickets = [...filtredTickets, ...filterTwoTickets]
    if (filter.three) filtredTickets = [...filtredTickets, ...filterThreeTickets]
    if (filter.all) filtredTickets = ticketsList

    if (sort === 'cheap') {
      return [...filtredTickets].sort((a, b) => a.price - b.price)
    }
    if (sort === 'fast') {
      return [...filtredTickets].sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    }
    return filtredTickets
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
