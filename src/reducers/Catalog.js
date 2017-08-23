import {
  SET_CATALOG,
  SET_CATEGORIES
} from '../constants/Catalog'

const initialState = {
  items: [],
  categories: [],
  types: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CATALOG:
      return { ...state, items: action.payload }

    case SET_CATEGORIES:
      return { ...state, categories: action.payload }

    default:
      return state
  }
}
