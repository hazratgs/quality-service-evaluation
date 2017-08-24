import React, { PureComponent } from 'react'
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/App'
import * as ActionsCatalog from '../../actions/Catalog'
import md5 from 'md5'
import s from './style.pcss'

import Header from '../Header'
import Home from '../Home'
import Catalog from '../Catalog'
import Agency from '../Agency'

import * as list from '../../public/db.json'

class App extends PureComponent {
  constructor (props) {
    super(props)

    // Данные
    this.props.actionsCatalog.setCatalog(list.map(item => ({ ...item, _name: md5(item.name) })))

    // Поиск категорий
    const usedCategories = []
    const categories = list.filter(item => usedCategories.includes(item.category) ? false : usedCategories.push(item.category))
      .map(item => this.props.projectData[item.category])
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
          <Route path='/:category/:agency' exact component={Agency}/>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(
  state => ({
    state: state.App,
    projectData: state.Catalog.projectData
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch),
    actionsCatalog: bindActionCreators(ActionsCatalog, dispatch)
  })
)(App))
