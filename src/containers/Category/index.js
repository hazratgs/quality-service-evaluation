import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionsHeader from '../../actions/Header'
import s from './style.pcss'

class Category extends PureComponent {
  componentWillMount () {
    this.props.setTitle('Образовательные учреждения')
  }

  render () {
    const types = this.props.state.types.map(item => (
      <label className={s.item}>
        <input type='checkbox'/>
        <span>{item}</span>
      </label>
    ))

    return (
      <div className={s.category}>
        <div className={s.tabs}>
          {types}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    state: state.Category
  }),
  dispatch => ({
    setTitle: bindActionCreators(ActionsHeader.setTitle, dispatch)
  })
)(Category)
