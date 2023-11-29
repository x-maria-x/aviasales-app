import React from 'react'
import { useSelector } from 'react-redux'
import { Offline, Online } from 'react-detect-offline'

import TicketItem from '../ticket-item'
import TypicalButton from '../typical-button'

import style from './ticket-list.module.scss'

function TicketList({ ticketsData, showMoreTickets }) {
  const { stopFetching } = useSelector((state) => state.fetchData)

  let id = 0

  const tickets = ticketsData.map((props) => <TicketItem key={id++} {...props} />)

  return (
    <div className={style['ticket-list']}>
      <Online>
        {!ticketsData.length && stopFetching && (
          <div className={style['inform-card']}>
            <span>Рейсов, подходящих под заданные фильтры, не найдено</span>
          </div>
        )}
        {tickets}
        {!!tickets.length && <TypicalButton fn={showMoreTickets} text="ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!" />}
      </Online>
      <Offline>
        <div className={style['inform-card']}>
          <span>Отсутствует соединение с интернетом!</span>
        </div>
      </Offline>
    </div>
  )
}

export default TicketList
