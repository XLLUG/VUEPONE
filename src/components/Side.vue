<template>
  <div id="side">
    <ul class="side list-unstyled">
      <li @click="addItem({content:Math.random()})"> 增加</li>
      <li @click="deleteItem()"> 删除</li>
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
    vuex: {
      actions: {
        addItem,
        deleteItem
      }
    }

  }
</script>

<style scoped>

</style>
