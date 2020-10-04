import { INPUT_CHANGE, ADD_ITEM, DELETE_ITEM } from './constants'

export const getInputChangeAction = (value) => {
  return {
    type: INPUT_CHANGE,
    value
  }
}
export const getAddItemAction = () => {
  return {
    type: ADD_ITEM
  }
}
export const getDeleteItemAction = (index) => {
  return {
    type: DELETE_ITEM,
    index
  }
}