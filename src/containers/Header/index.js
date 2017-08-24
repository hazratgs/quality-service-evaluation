import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../../actions/Header'
import SearchIcon from '../../public/svg/search.svg'
import s from './style.pcss'

class Header extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      query: ''
    }
  }
  render () {
    return (
      <div className={s.header}>
        <h1 className={this.props.state.smallFontSize ? s.small : ''}>{this.props.state.title}</h1>
        {this.props.state.searchPanel
          ? (
            <div className={s.search}>
              <input
                defaultValue={this.state.query}
                onChange={(e) => this.setState({query: e.target.value})}
                placeholder='Введите название учреждения'
              />
              <SearchIcon/>
            </div>
          )
          : null
        }
      </div>
    )
  }
}

export default connect(
  state => ({
    state: state.Header
  }),
  dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
  })
)(Header)
