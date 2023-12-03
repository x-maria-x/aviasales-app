import React from 'react'
import { format, add } from 'date-fns'

import style from './ticket-item.module.scss'

function TicketItem({ price, carrier, segments }) {
  const [origin, destination] = segments

  const formatPrice = (p) => {
    const newPrice = p.toString().split('')
    newPrice.splice(newPrice.length - 3, 0, ' ')
    newPrice.push(' Р')
    return newPrice.join('')
  }

  const formatStops = (stops) => {
    if (stops === 0) return 'БЕЗ ПЕРЕСАДОК'
    if (stops === 1) return '1 ПЕРЕСАДКА'
    if (stops > 1) return `${stops} ПЕРЕСАДКИ`
    return null
  }

  const formatDuration = (min) => {
    const hours = Math.floor(min / 60)
    const minutes = min % 60
    return `${hours}ч ${minutes}м`
  }

  const formatStartEndTime = (startTime, duration) => {
    const parseStartTime = new Date(startTime).getTime()
    const formatStartTime = format(parseStartTime, 'HH:mm')
    const parseEndTime = add(parseStartTime, { minutes: duration })
    const formatEndTime = format(parseEndTime, 'HH:mm')
    return `${formatStartTime} – ${formatEndTime}`
  }

  return (
    <div className={style['ticket-item']}>
      <div className={style['ticket-item--price']}>{formatPrice(price)}</div>
      <div className={style['ticket-item--logo']}>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="logo" />
      </div>
      <div className={style['ticket-item--route']}>
        <div className={style['ticket-item--route-title']}>
          {origin.origin} – {origin.destination}
        </div>
        <div className={style['ticket-item--route-description']}>
          {formatStartEndTime(origin.date, origin.duration)}
        </div>
      </div>
      <div className={style['ticket-item--length']}>
        <div className={style['ticket-item--route-title']}>В ПУТИ</div>
        <div className={style['ticket-item--route-description']}>{formatDuration(origin.duration)}</div>
      </div>
      <div className={style['ticket-item--stops']}>
        <div className={style['ticket-item--route-title']}>{formatStops(origin.stops.length)}</div>
        <div className={style['ticket-item--route-description']}>{origin.stops.join(', ')}</div>
      </div>
      <div className={style['ticket-item--return-route']}>
        <div className={style['ticket-item--route-title']}>
          {destination.origin} – {destination.destination}
        </div>
        <div className={style['ticket-item--route-description']}>
          {formatStartEndTime(destination.date, destination.duration)}
        </div>
      </div>
      <div className={style['ticket-item--return-length']}>
        <div className={style['ticket-item--route-title']}>В ПУТИ</div>
        <div className={style['ticket-item--route-description']}>{formatDuration(destination.duration)}</div>
      </div>
      <div className={style['ticket-item--return-stops']}>
        <div className={style['ticket-item--route-title']}>{formatStops(destination.stops.length)}</div>
        <div className={style['ticket-item--route-description']}>{destination.stops.join(', ')}</div>
      </div>
    </div>
  )
}

export default TicketItem
