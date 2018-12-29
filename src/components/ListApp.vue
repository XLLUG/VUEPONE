<template>
  <div id="listApp">
    <side></side>
    <content></content>
  </div>
</template>

<script>
  import Side from './Side'
  import Content from './Content'

  export default {
    name: "ListApp",
    components: {
      Side,
      Content
    }
  }
</script>

<style scoped>

</style>
