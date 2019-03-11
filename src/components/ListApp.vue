<template>
  <div id="listApp">
    <side></side>
    <Content></Content>
    <v_loadmore></v_loadmore>
  </div>
</template>

<script>
  import Side from './Side'
  import Content from './Content'
  import v_loadmore from './v-loadmore'

  export default {
    name: "ListApp",
    data:function () {
      return{

      }
    },
    components: {
      Side,
      Content,
      v_loadmore
    },
    methods:{


    }
  }
</script>

<style scoped>

</style>
