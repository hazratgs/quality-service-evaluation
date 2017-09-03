import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import s from './style.pcss'

export default class Button extends PureComponent {
  render () {
    return (
      <button className={s.button} onClick={(e) => this.props.handle(e)}>Отправить</button>
    )
  }
}

Button.propTypes = {
  handle: PropTypes.func.isRequired
}
