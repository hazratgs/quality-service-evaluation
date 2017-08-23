import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import * as ActionsHeader from '../../actions/Header'
import s from './style.pcss'

class Catalog extends PureComponent {
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
        <div className={s.items}>
          <div className={s.item}>
            <Link to=''>МКУ ДО "Центр по физической культуре, спорту и здоровьесбережению" г. Перми</Link>
            <span>614010, Пермский край, г. Пермь, ул. Чкалова, 48</span>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    state: state.Catalog
  }),
  dispatch => ({
    setTitle: bindActionCreators(ActionsHeader.setTitle, dispatch)
  })
)(Catalog)
