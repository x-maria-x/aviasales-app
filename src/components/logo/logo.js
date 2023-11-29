import React from 'react'
import { useSelector } from 'react-redux'

import logo from '../sources/img/Logo.svg'

import style from './logo.module.scss'

function Logo() {
  const { stopFetching } = useSelector((state) => state.fetchData)

  const styleLoad = stopFetching ? null : style.spinner

  return <img src={logo} alt="logo" className={`${style.logo} ${styleLoad}`} />
}

export default Logo
