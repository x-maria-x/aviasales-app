import React from 'react'

import style from './filter.module.scss'

function Filter() {
  return (
    <div className={style.filter}>
      <div className={style['filter-wrapper']}>
        <p className={style['filter-title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        <label className={style['filter-item']}>
          <input type="checkbox" />
          <span>Все</span>
        </label>
        <label className={style['filter-item']}>
          <input type="checkbox" />
          <span>Без пересадок</span>
        </label>
        <label className={style['filter-item']}>
          <input type="checkbox" />
          <span>1 пересадка</span>
        </label>
        <label className={style['filter-item']}>
          <input type="checkbox" />
          <span>2 пересадки</span>
        </label>
        <label className={style['filter-item']}>
          <input type="checkbox" />
          <span>3 пересадки</span>
        </label>
      </div>
    </div>
  )
}

export default Filter
