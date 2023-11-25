import React from 'react'

import TicketItem from '../ticket-item'
import TypicalButton from '../typical-button'

import style from './ticket-list.module.scss'

function TicketList() {
  return (
    <div className={style['ticket-list']}>
      <TicketItem />
      <TicketItem />
      <TicketItem />
      <TicketItem />
      <TicketItem />
      <TypicalButton />
    </div>
  )
}

export default TicketList
