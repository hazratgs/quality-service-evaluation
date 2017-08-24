import {
  SET_TITLE,
  CHANGE_SEARCH_PANEL,
  SET_SMALL_FONT_SIZE_HEADER
} from '../constants/Header'

export function setTitle (title) {
  return {
    type: SET_TITLE,
    payload: title
  }
}

export function changeSearchPanel (value) {
  return {
    type: CHANGE_SEARCH_PANEL,
    payload: value
  }
}

export function setSmallFontSizeHeader (value) {
  return {
    type: SET_SMALL_FONT_SIZE_HEADER,
    payload: value
  }
}
