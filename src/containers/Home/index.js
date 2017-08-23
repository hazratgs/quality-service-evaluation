import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionsHeader from '../../actions/Header'
import { Link } from 'react-router-dom'
import s from './style.pcss'

import Education from '../../public/svg/education.svg'
import '../../public/img/education.jpg'

import Culture from '../../public/svg/culture.svg'
import '../../public/img/culture.jpg'

class Home extends PureComponent {
  componentWillMount () {
    this.props.setTitle('Оценка качества услуг')
  }

  getContentCategory (category) {
    switch (category) {
      case 'education':
        return { svg: <Education/>, image: '/img/education.jpg' }

      case 'culture':
        return { svg: <Culture/>, image: '/img/culture.jpg' }

      default:
        return { svg: null, image: null }
    }
  }

  render () {
    const categories = this.props.categories.map((item, index) => {
      const content = this.getContentCategory(item._name)
      return (
        <Link key={index} to={`/${item._name}`} className={s.item} style={{backgroundImage: `url(${content.image})`}}>
          <div className={s.wrapper}>
            {content.svg}
            <h4>{item.name}</h4>
          </div>
        </Link>
      )
    })

    return (
      <div className={s.home}>
        <div className={s.tabs}>
          {categories}
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    categories: state.Catalog.categories
  }),
  dispatch => ({
    setTitle: bindActionCreators(ActionsHeader.setTitle, dispatch)
  })
)(Home)
