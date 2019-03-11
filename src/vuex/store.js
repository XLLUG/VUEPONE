/*
*
*@author xueyushuai
*/
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
// 创建一个对象来保存应用启动时的初始状态
const state = {
  items: [],//items 为元素列表
  name: '',//应用名称,
  obj:{"name":'ddd'}
}
// 用于更改状态的 mutation 函数
const mutations = {
  ADD_ITEM(state, item) {
    state.items.push(item)
  },
  DELETE_ITEM(state) {
    state.items.pop()
  },
  setObjId(state,id){
    state.obj.id = id
  }

}
const getters = {
  getItems(state) {
    return state.items
  },
  getName(state){
    return state.name
  },
  getObj(state){
    return state.obj
  }
};
export default new Vuex.Store({
  state,
  getters,
  mutations,
})
