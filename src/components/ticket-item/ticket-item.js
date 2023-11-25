import React from 'react'

import logo from '../sources/img/S7 Logo.svg'

import style from './ticket-item.module.scss'

function TicketItem() {
  return (
    <div className={style['ticket-item']}>
      <div className={style['ticket-item--price']}>13 400 P</div>
      <div className={style['ticket-item--logo']}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style['ticket-item--route']}>
        <div className={style['ticket-item--route-title']}>MOW – HKT</div>
        <div className={style['ticket-item--route-description']}>10:45 – 08:00</div>
      </div>
      <div className={style['ticket-item--length']}>
        <div className={style['ticket-item--route-title']}>В ПУТИ</div>
        <div className={style['ticket-item--route-description']}>21ч 15м</div>
      </div>
      <div className={style['ticket-item--stops']}>
        <div className={style['ticket-item--route-title']}>2 ПЕРЕСАДКИ</div>
        <div className={style['ticket-item--route-description']}>HKG, JNB</div>
      </div>
      <div className={style['ticket-item--return-route']}>
        <div className={style['ticket-item--route-title']}>MOW – HKT</div>
        <div className={style['ticket-item--route-description']}>11:20 – 00:50</div>
      </div>
      <div className={style['ticket-item--return-length']}>
        <div className={style['ticket-item--route-title']}>В ПУТИ</div>
        <div className={style['ticket-item--route-description']}>13ч 30м</div>
      </div>
      <div className={style['ticket-item--return-stops']}>
        <div className={style['ticket-item--route-title']}>1 ПЕРЕСАДКА</div>
        <div className={style['ticket-item--route-description']}>HKG</div>
      </div>
    </div>
  )
}

export default TicketItem
