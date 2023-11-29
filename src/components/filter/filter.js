import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { updateFilters } from '../../actions/actionCreators'

import style from './filter.module.scss'

export default function Filter() {
  const filters = useSelector((state) => state.filters)
  const dispatch = useDispatch()

  const handleChange = (arg) => {
    dispatch(updateFilters(arg))
  }

  return (
    <div className={style.filter}>
      <div className={style['filter-wrapper']}>
        <p className={style['filter-title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        <label className={style['filter-item']}>
          <input type="checkbox" name="filter" checked={filters.all} onChange={() => handleChange('all')} />
          <span>Все</span>
        </label>
        <label className={style['filter-item']}>
          <input type="checkbox" name="filter" checked={filters.zero} onChange={() => handleChange('zero')} />
          <span>Без пересадок</span>
        </label>
        <label className={style['filter-item']}>
          <input type="checkbox" name="filter" checked={filters.one} onChange={() => handleChange('one')} />
          <span>1 пересадка</span>
        </label>
        <label className={style['filter-item']}>
          <input type="checkbox" name="filter" checked={filters.two} onChange={() => handleChange('two')} />
          <span>2 пересадки</span>
        </label>
        <label className={style['filter-item']}>
          <input type="checkbox" name="filter" checked={filters.three} onChange={() => handleChange('three')} />
          <span>3 пересадки</span>
        </label>
      </div>
    </div>
  )
}
