import React, { PureComponent } from 'react'
import s from './style.pcss'

export default class VoteButtons extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      variables: [1, 2, 3, 4, 5]
    }
  }

  render () {
    const items = this.state.variables.map(item =>
      <label key={item}>
        <input name='star' type='radio' value={item} />
        <span>{item}</span>
      </label>
    )

    return (
      <div className={s.buttons}>
        {items}
      </div>
    )
  }
}
