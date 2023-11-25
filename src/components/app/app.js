import React from 'react'

import Logo from '../logo'
import Filter from '../filter/filter'
import Sort from '../sort'
import TicketList from '../ticket-list'

import style from './app.module.scss'

function App() {
  return (
    <div className={style.app}>
      <div className={style['app-wrapper']}>
        <Logo />
        <Filter />
        <Sort />
        <TicketList />
      </div>
    </div>
  )
}

export default App
