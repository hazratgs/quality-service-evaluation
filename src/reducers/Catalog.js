import {
  SET_CATALOG,
  SET_CATEGORIES,
  SET_TYPES
} from '../constants/Catalog'

const initialState = {
  projectData: {
    'Образование': {
      _name: 'education',
      name: 'Образование',
      title: 'Образовательные учреждения'
    },
    'Культура': {
      _name: 'culture',
      name: 'Культура',
      title: 'Учреждения культуры'
    }
  },
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

    case SET_TYPES:
      return { ...state, types: action.payload }

    default:
      return state
  }
}
