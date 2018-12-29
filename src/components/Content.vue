<template>
  <div id="content">
    <div class="item" v-for="item in items">
      {{ item.content }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "Content",
    vuex: {
      getter: {
        items: state => state.items
      }
    }
  }
</script>

<style scoped>

</style>
