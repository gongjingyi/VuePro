<template>
  <div id="app" class="app">
   <!-- <test v-bind:propMsg="proData" v-bind:prentData="proDataTest" v-on:childTellMe="listenMyChild"></test>-->
    <v-header v-if="showComp"></v-header>
    <router-view v-on:childTellMe="listenMyChild" v-bind:propMsg="proData" v-bind:prentData="proDataTest"></router-view>
    <!-- <router-view to="/item" v-show="showObj.showBl1"></router-view>
     <router-view to="/itemList" v-show="showObj.showBl2"></router-view>
         <router-view to="/edit" v-show="showObj.showBl2"></router-view>
         <router-view to="/add" v-show="showObj.showBl2"></router-view>-->
  </div>
</template>
<script type="text/ecmascript-6">
  import header from 'components/header/header.vue';
  import item from 'components/sportItem/item.vue';
  import test from 'components/sportItem/test.vue';
  export default {
    data() {
      return {
        showObj: {
          showBl1: true,
          showBl2: false
        },
        showComp: true,
        proData: 'dji',
        proDataTest: '父亲的话！'
      };
    },
    components: {
      'v-header': header,
      'item': item,
      'test': test
    },
    methods: {
      listenMyChild: function (msg) {
        this.showComp = msg;
      }
    },
    created() {
      this.$http.get('api/itemDetail').then(response => {
        this.proData = response.body.data;
        console.log(response.body.data);
      }, response => {
        console.log(response.status);
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    background: #f2f2f2
    width: 100%

  @media (min-width: 768px)
    .formCont
      .itemCont
        > li
          > input
            width: 160px
            padding-left: 10px
            &:nth-child(even)
              width: 300px
              margin-right: 20px
          > input + input
            margin-left: 20px

    .formCont
      .itemDetail
        > li
          input
            width: 360px

  @media (max-width: 768px)
    .formCont
      .itemCont
        > li
          > input
            width: 75px
            padding-left: 5px
            &:nth-child(even)
              width: 115px
              margin-right: 5px
          > input + input
            margin-left: 10px

    .formCont
      .itemDetail
        > li
          input
            width: 220px
</style>
