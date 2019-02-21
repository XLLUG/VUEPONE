<template>
  <div id="content">
    <div class="item" v-for="item in items">
      {{ item }}
    </div>
  </div>
</template>

<script>
  export default {
    name: "Content",
    computed: {
      items() {
        return this.$store.getters.getItems
      }
    }
  }
</script>

<style scoped>
.item{
  margin: 0 auto;
  width: 600px;
  height: 60px;
  background: aliceblue;
}
</style>
