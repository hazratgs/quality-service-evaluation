import {
  SET_TITLE,
  CHANGE_SEARCH_PANEL,
  SET_SMALL_FONT_SIZE_HEADER
} from '../constants/Header'

const initialState = {
  title: 'Оценка качества услуг',
  smallFontSize: false,
  searchPanel: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload }

    case CHANGE_SEARCH_PANEL:
      return { ...state, searchPanel: action.payload }

    case SET_SMALL_FONT_SIZE_HEADER:
      return { ...state, smallFontSize: action.payload }

    default:
      return state
  }
}
