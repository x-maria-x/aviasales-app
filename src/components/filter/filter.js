import React from 'react'
import { connect, useSelector } from 'react-redux'

import { updateFilters } from '../../actions/actionCreators'

import style from './filter.module.scss'

function Filter(props) {
  const filters = useSelector((state) => state.filters)

  return (
    <div className={style.filter}>
      <div className={style['filter-wrapper']}>
        <p className={style['filter-title']}>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
        <label className={style['filter-item']}>
          <input type="checkbox" name="filter" checked={filters.all} onChange={() => props.updateFilters('all')} />
          <span>Все</span>
        </label>
        <label className={style['filter-item']}>
          <input type="checkbox" name="filter" checked={filters.zero} onChange={() => props.updateFilters('zero')} />
          <span>Без пересадок</span>
        </label>
        <label className={style['filter-item']}>
          <input type="checkbox" name="filter" checked={filters.one} onChange={() => props.updateFilters('one')} />
          <span>1 пересадка</span>
        </label>
        <label className={style['filter-item']}>
          <input type="checkbox" name="filter" checked={filters.two} onChange={() => props.updateFilters('two')} />
          <span>2 пересадки</span>
        </label>
        <label className={style['filter-item']}>
          <input type="checkbox" name="filter" checked={filters.three} onChange={() => props.updateFilters('three')} />
          <span>3 пересадки</span>
        </label>
      </div>
    </div>
  )
}

function mapStatetoProps(state) {
  return {
    state,
    filters: state.filters,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateFilters: (arg) => dispatch(updateFilters(arg)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Filter)
