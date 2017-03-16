<template>
  <div class="formCont">
    <h3><span>{{itemDetail.match.homeName}}</span>&nbsp;VS&nbsp;<span>{{itemDetail.match.awayName}}</span></h3>
    <form id="itemForm">
      <ul class="itemTit">
        <li>直播名称</li>
        <li>直播链接</li>
      </ul>
      <ul class="itemCont">
        <li v-for="itemVal in itemDetail.list">
          <input type="text" name="" :value="itemVal.name">
          <input type="text" name="" :value="itemVal.url">
          <span class="delBtn" @click="doDelt(itemVal)">删除</span>
          <router-link v-bind:to="{path:'/edit', query: { matchId:itemDetail.match.matchId,id: itemVal.id }}">
            <span class="editBtn">编辑</span>
          </router-link>
        </li>
      </ul>
      <div v-show="!itemDetail.list.length" class="msgTip">
        <h5>没有比赛路线了!</h5>
      </div>
      <div class="submitBut">
        <router-link v-bind:to="{path:'/add',query:{matchId:itemDetail.match.matchId}}">
          <span type="button">添加直播源</span>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
  export default {
    data() {
      return {
        itemDetail: {},
        id: '',
        notShow: true
      };
    },
    created() {
      this.$emit('childTellMe', this.notShow);
      this.$http.get('/admin/match/videoSource/list?matchId=' + this.$route.query.matchId).then((response) => {
        response = response.body;
        if (response.status === ERR_OK) {
          this.itemDetail = response.data;
        }
      });
    },
    methods: {
      doDelt: function (itemVal) {
        this.id = itemVal.id;
        this.itemDetail.list.splice(this.itemDetail.list.indexOf(itemVal), 1);
        this.$http.post('/admin/match/videoSource/delete?id=' + this.id).then((response) => {
          console.log(response);
          if (response.status === 200) {
            console.log('删除成功');
          }
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .formCont
    width: 100%
    .itemTit
      display: flex
      -webkit-display: flex
      flex-direction: row
      justify-content: center
      height: 26px
      line-height: 26px
      overflow: hidden
      > li + li
        margin-left: 20px
      > li
        list-style-type: none
        display: inline-block
        color: #7e8c8d
    .itemCont
      width: 100%
      > li + li
        margin-top: 10px
      > li
        display: flex
        -webkit-display: flex
        justify-content: center
        flex-direction: row
        > input
          border: 1px solid #647172
          font-size: 12px
          height: 22px
          /* padding-left: 10px */
          text-overflow: ellipsis
          white-space: nowrap

  /* width: 75px */
  &
  :
  nth-child(even)
  /* width: 110px
  margin-right: 5px */
  > input + input
    /* margin-left: 10px */
  > span
    height: 22px
    line-height: 22px
    background: #f00
    font-size: 12px
    padding: 0px 10px
    border: 1px solid
    border-radius: 7px
    color: #fff
    cursor: pointer

  > a
    height: 22px
    line-height: 22px
    background: #50D68F
    font-size: 12px
    padding: 0px 10px
    border: 1px solid
    border-radius: 7px
    color: #fff

  .submitBut
    width: 100%
    display: flex
    -webkit-display: flex
    flex-direction: row
    justify-content: center
    margin: 20px auto
    > a
      height: 30px
      line-height: 30px
      background: #6082d6
      font-size: 12px
      padding: 0px 10px
      border: 1px solid
      border-radius: 7px
      color: #fff

  h3
    text-align: center

  .msgTip
    text-align: center
    color: #ff6c24
</style>
