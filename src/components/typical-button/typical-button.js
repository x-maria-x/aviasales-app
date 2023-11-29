import React from 'react'

import style from './typical-button.module.scss'

function TypicalButton({ fn, text }) {
  return (
    <button className={style['typical-button']} type="submit" onClick={() => fn()}>
      {text}
    </button>
  )
}

export default TypicalButton
