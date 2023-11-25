import React from 'react'

import style from './sort.module.scss'

function Sort() {
  return (
    <div className={style.sort}>
      <input className={style['sort-item']} type="radio" name="sort" id="cheap" value="cheap" checked />
      <label htmlFor="cheap">
        <span>САМЫЙ ДЕШЕВЫЙ</span>
      </label>

      <input className={style['sort-item']} type="radio" name="sort" id="fast" value="fast" />
      <label htmlFor="fast">
        <span>САМЫЙ БЫСТРЫЙ</span>
      </label>
    </div>
  )
}

export default Sort
