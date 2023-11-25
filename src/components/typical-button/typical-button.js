import React from 'react'

import style from './typical-button.module.scss'

function TypicalButton() {
  return (
    <button className={style['typical-button']} type="submit">
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
    </button>
  )
}

export default TypicalButton
