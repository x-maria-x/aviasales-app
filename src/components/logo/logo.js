import React from 'react'
import { useSelector } from 'react-redux'

import logo from '../sources/img/Logo-.svg'
import logoShadow from '../sources/img/Logo+.svg'

import style from './logo.module.scss'

function Logo() {
  const { stopFetching } = useSelector((state) => state.fetchData)

  return stopFetching ? (
    <img src={logoShadow} alt="logo" className={style.logo} />
  ) : (
    <img src={logo} alt="logo" className={`${style.logo} ${style.spinner}`} />
  )
}

export default Logo
