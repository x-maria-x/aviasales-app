import React from 'react'

import logo from '../sources/img/Logo.svg'

import style from './logo.module.scss'

function Logo() {
  return <img src={logo} alt="logo" className={style.logo} />
}

export default Logo
