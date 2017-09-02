import React, { PureComponent } from 'react'
import s from './style.pcss'

export default class BackButton extends PureComponent {
  render () {
    return (
      <button className={s.button} onClick={() => window.history.back()}>
        <span>Назад</span>
      </button>
    )
  }
}
