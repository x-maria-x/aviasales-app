import React from 'react'
// import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

import { updateSort } from '../../actions/actionCreators'

import style from './sort.module.scss'

export default function Sort() {
  const dispatch = useDispatch()

  const handleChanhe = (arg) => {
    dispatch(updateSort(arg))
  }

  return (
    <div className={style.sort}>
      <input
        className={style['sort-item']}
        type="radio"
        name="sort"
        id="cheap"
        value="cheap"
        defaultChecked
        onClick={() => handleChanhe('cheap')}
      />
      <label htmlFor="cheap">
        <span>САМЫЙ ДЕШЕВЫЙ</span>
      </label>

      <input
        className={style['sort-item']}
        type="radio"
        name="sort"
        id="fast"
        value="fast"
        onClick={() => handleChanhe('fast')}
      />
      <label htmlFor="fast">
        <span>САМЫЙ БЫСТРЫЙ</span>
      </label>
    </div>
  )
}
