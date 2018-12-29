/*
*
*@author xueyushuai
*/
import {ADD_ITEM, DELETE_ITEM} from '@/vuex/mutation-type'

export const addItem = ({dispatch, store}, item) => {
  dispatch('ADD_ITEM', item)
}
export const deleteItem = ({dispatch, store}) => {
  dispatch('DELETE_ITEM')
}
