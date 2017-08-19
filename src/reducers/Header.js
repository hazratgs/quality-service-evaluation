import {
  SET_TITLE
} from '../constants/Header'

const initialState = {
  title: 'Оценка качества услуг'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TITLE:
      return { ...state, title: action.payload }

    default:
      return state
  }
}
