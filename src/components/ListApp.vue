<template>
  <div id="listApp">
    <side></side>
    <content></content>
  </div>
  <loadmore :top-method="loadTop" :autoFill="false"  ref="loadmore">
    <ul>
      <li v-for="item in list">{{item}}</li>
    </ul>
  </loadmore>
</template>

<script>
  import Side from './Side'
  import Content from './Content'

  export default {
    name: "ListApp",
    data:function () {
      return{
        list:[1,2,3]
      }
    },
    components: {
      Side,
      Content
    },
    methods:{
      loadTop(id){
        this.list.push(6,7,78)
        this.$refs.loadmore.onTopLoaded(id);
      },
    }
  }
</script>

<style scoped>

</style>
