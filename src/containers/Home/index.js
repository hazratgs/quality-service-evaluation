import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionsHeader from '../../actions/Header'
import { Link } from 'react-router-dom'
import Theater from '../../public/svg/theater.svg'
import Education from '../../public/svg/education.svg'
import EducationImage from '../../public/img/education.jpg'
import TheaterImage from '../../public/img/theater.jpg'
import s from './style.pcss'

class Home extends PureComponent {
  componentWillMount () {
    this.props.setTitle('Оценка качества услуг')
  }

  render () {
    return (
      <div className={s.home}>
        <div className={s.tabs}>
          <Link to='/education' className={s.item} style={{backgroundImage: `url(${EducationImage})`}}>
            <div className={s.wrapper}>
              <Education/>
              <h4>Образование</h4>
            </div>
          </Link>
          <Link to='/theater' className={s.item} style={{backgroundImage: `url(${TheaterImage})`}}>
            <div className={s.wrapper}>
              <Theater/>
              <h4>Культура</h4>
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    state: state
  }),
  dispatch => ({
    setTitle: bindActionCreators(ActionsHeader.setTitle, dispatch)
  })
)(Home)
