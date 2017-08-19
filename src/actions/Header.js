import {
  SET_TITLE
} from '../constants/Header'

export function setTitle (title) {
  return {
    type: SET_TITLE,
    payload: title
  }
}
