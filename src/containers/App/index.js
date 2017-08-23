import React, { PureComponent } from 'react'
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/App'
import * as ActionsCatalog from '../../actions/Catalog'
import s from './style.pcss'

import Header from '../Header'
import Home from '../Home'
import Catalog from '../Catalog'
import * as list from '../../public/db.json'

class App extends PureComponent {
  constructor (props) {
    super(props)

    // Данные
    this.props.actionsCatalog.setCatalog(list)

    // Поиск категорий
    const usedCategories = []
    const categories = list.filter(item => usedCategories.includes(item.category) ? false : usedCategories.push(item.category))
      .map(item => item.category)
    this.props.actionsCatalog.setCategories(categories)

    // Поиск типов
    const usedTypes = []
    const types = list.filter(item => usedTypes.includes(item.type) ? false : usedTypes.push(item.type))
      .map(item => ({ category: item.category, type: item.type }))
    this.props.actionsCatalog.setTypes(types)
  }

  render () {
    return (
      <div className={s.app}>
        <Header/>
        <div className={s.content}>
          <Route path='/' exact component={Home}/>
          <Route path='/:category' exact component={Catalog}/>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(
  state => ({
    state: state.App
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
    actionsCatalog: bindActionCreators(ActionsCatalog, dispatch)
  })
)(App))
