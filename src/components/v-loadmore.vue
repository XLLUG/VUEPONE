<template>
  <div>
    <loadmore :top-method="loadTop" :autoFill="true" ref="loadmore" :top-status.sync="topStatus"
              @top-status-change="handleTopChange" :topDistance="80">
      <ul class="loadmore">
        <li v-for="item in list">{{item}}</li>
      </ul>
      <!-- <div slot="top" class="mint-loadmore-top">
         <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
         <span v-show="topStatus === 'loading'">Loading...</span>
       </div>-->
    </loadmore>
    <hr/>
    <loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore2"
              @bottom-status-change="handleBottomChange">
      <ul class="loadmore">
        <li v-for="item in list">{{item}}</li>
      </ul>
      <div slot="bottom" class="mint-loadmore-bottom">
        <span v-show="bottomStatus !== 'loading'" :class="{ 'rotate': bottomStatus === 'drop' }">⬆</span>
        <span v-show="bottomStatus === 'loading'">Loading...</span>
      </div>
    </loadmore>
  </div>
</template>

<script>
  export default {
    name: "v-loadmore",
    data(){
      return{
        list:[1,2,3],
        topStatus:'',
        allLoaded:false,
        bottomStatus:''
      }
    },
    methods: {
      loadTop(id) {
        setTimeout(() => {
          this.list.push(6, 7, 78)
          this.$refs.loadmore.onTopLoaded(id);
        }, 3000)

      },
      loadBottom(id) {
        setTimeout(() => {
          this.list.push(6, 7, 78)
          this.allLoaded = true
          this.$refs.loadmore2.onTopLoaded(id);
        }, 3000)
      },
      handleTopChange(state) {
        this.topStatus = state
        console.log(state)
      },
      handleBottomChange(state) {
        this.bottomStatus = state
      }
    }
  }
</script>

<style scoped>
  .loadmore {
    background-color: antiquewhite;
    height: 200px;
  }
</style>
