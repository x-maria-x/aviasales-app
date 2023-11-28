import React from 'react'
import { connect } from 'react-redux'

import { updateSort } from '../../actions/actionCreators'

import style from './sort.module.scss'

function Sort(props) {
  return (
    <div className={style.sort}>
      <input
        className={style['sort-item']}
        type="radio"
        name="sort"
        id="cheap"
        value="cheap"
        defaultChecked
        onClick={() => props.updateSort('cheap')}
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
        onClick={() => props.updateSort('fast')}
      />
      <label htmlFor="fast">
        <span>САМЫЙ БЫСТРЫЙ</span>
      </label>
    </div>
  )
}

function mapStatetoProps(state) {
  return { ...state, sort: state.sort }
}

function mapDispatchToProps(dispatch) {
  return {
    updateSort: (arg) => dispatch(updateSort(arg)),
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Sort)
