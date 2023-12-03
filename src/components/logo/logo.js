import React from 'react'
import { useSelector } from 'react-redux'

import logo from '../sources/img/Logo.svg'

import style from './logo.module.scss'

function Logo() {
  const { stopFetching } = useSelector((state) => state.fetchData)

  const styleClass = stopFetching ? `${style.logo}` : `${style.logo} ${style.spinner}`

  return <img src={logo} alt="logo" className={styleClass} />
}

export default Logo
