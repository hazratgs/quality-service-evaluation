import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionsHeader from '../../actions/Header'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import s from './style.pcss'

class Agency extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      agency: null,
      issues: [],
      date: moment()
    }
  }

  componentWillMount () {
    // Скрываем поисковую панель
    this.props.actionsHeader.changeSearchPanel(false)
    this.props.actionsHeader.setSmallFontSizeHeader(true)

    // Находим агенство
    const agency = this.props.items.filter(item => item._name === this.props.match.params.agency)
    console.log(agency)
    if (agency) {
      this.setState({agency: agency[0]})
      this.props.actionsHeader.setTitle(agency[0].name)

      // Проверка наличия собственных вопросов типа
      if (this.props.issues.hasOwnProperty(agency[0].type)) {
        this.setState({issues: this.props.issues[agency[0].type]})
      } else if (this.props.issues.hasOwnProperty(agency[0].category)) {
        // Вопросы категории
        this.setState({issues: this.props.issues[agency[0].category]})
      }
    }
  }

  componentWillUnmount () {
    // Возвращаем к исходному состоянию
    this.props.actionsHeader.changeSearchPanel(true)
    this.props.actionsHeader.setSmallFontSizeHeader(false)
  }

  render () {
    if (!this.state.agency) {
      return <div>Загрузка...</div>
    }

    return (
      <div className={s.block}>
        <div className={s.content}>
          <div className={s.wrapper}>
            <div className={s.date}>
              <span>Когда вам была предоставлена услуга?</span>
              <DatePicker
                value={this.state.date}
                selected={this.state.date}
                onChange={(value) => this.setState({date: value})}
              />
            </div>
          </div>
        </div>
        <div className={s.aside}>
          <div className={s.wrapper}>

          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    items: state.Catalog.items,
    issues: state.Catalog.issues
  }),
  dispatch => ({
    actionsHeader: bindActionCreators(ActionsHeader, dispatch)
  })
)(Agency)
