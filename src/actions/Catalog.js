import {
  SET_CATALOG,
  SET_CATEGORIES,
  SET_TYPES
} from '../constants/Catalog'

export function setCatalog (data) {
  return {
    type: SET_CATALOG,
    payload: data
  }
}

export function setCategories (data) {
  return {
    type: SET_CATEGORIES,
    payload: data
  }
}

export function setTypes (data) {
  return {
    type: SET_TYPES,
    payload: data
  }
}
