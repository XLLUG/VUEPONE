<template>
  <div id="side">
    <ul class="side list-unstyled">
      <li @click="addItem({content:Math.random()})"> <button>增加</button></li>
      <li @click="deleteItem()">  <button>删除</button></li>
    </ul>
  </div>
</template>

<script>
  import {addItem, deleteItem} from '@/vuex/action'

  export default {
    name: "Side",
    data: function () {
      return {}
    },
    methods:{
      addItem({content}){
        this.$store.commit('ADD_ITEM',content)
      },
      deleteItem(){
        this.$store.commit('DELETE_ITEM')
      }
    }
    /*vuex: {
      actions: {
        addItem,
        deleteItem
      }
    }*/

  }
</script>

<style scoped>
  .side  li {
  background-color: aquamarine;
    margin-bottom: 10px;
  }
</style>
