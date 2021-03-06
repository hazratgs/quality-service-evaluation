import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import * as ActionsHeader from '../../actions/Header'
import s from './style.pcss'

class Catalog extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      category: null,
      checked: []
    }
  }

  componentWillMount () {
    const currentCategory = this.props.state.categories.find(item => this.props.match.params.category === item._name)
    if (currentCategory) {
      this.setState({category: currentCategory})

      // Устанавливаем заголовок
      this.props.setTitle(currentCategory.title)
    }
  }

  checkedTypes (type) {
    if (!this.state.checked.includes(type)) {
      this.setState(state => ({checked: [...state.checked, type]}))
    } else {
      this.setState(state => ({checked: state.checked.filter(item => item !== type)}))
    }
  }

  render () {
    if (this.state.category === null) {
      return <div>Загрузка...</div>
    }

    const types = this.props.state.types.filter(item => this.state.category.name === item.category).map((item, index) =>
      <label key={index} className={s.item}>
        <input
          name='type'
          type='checkbox'
          onClick={() => this.checkedTypes(item.type)}
          checked={this.state.checked.includes(item.type)}
        />
        <span>{item.type}</span>
      </label>
    )

    const items = this.props.state.items.filter(item => this.state.category.name === item.category)
      .filter(item => !this.state.checked.length ? true : this.state.checked.includes(item.type))
      .map((item, index) => {
        const nameSplit = item.name.split('«')
        const name = nameSplit.filter((item, i) => i !== 0).join(' ').split('»').map(item => item)
        const type = nameSplit[0]
        return (
          <div key={index} className={s.item}>
            <Link to={this.props.match.url + '/' + item._name}>{name}</Link>
            <span>{type}</span>
          </div>
        )
      })
    return (
      <div className={s.category}>
        <div className={s.tabs}>
          {types}
        </div>
        <div className={s.items}>
          {items}
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
