<template>
  <div class="formCont">
    <form id="itemForm1">
      <ul class="itemDetail">
        <li>
          <span>直播名称</span>&nbsp;&nbsp;<input name="nm" type="text" v-model="name">
        </li>
        <li>
          <span>直播链接</span>&nbsp;&nbsp;<input name="lk" type="text" v-model="url">
        </li>
      </ul>
      <div class="msgShow" v-show="status">{{msg}}</div>
      <div class="submitBut">
        <span type="button" v-on:click="doAdd">添加</span>
      </div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 200;
  export default {
    data() {
      return {
        matchId: this.$route.query.matchId,
        name: '',
        url: '',
        msg: '',
        status: false,
        notShow: true
      };
    },
    methods: {
      doAdd: function () {
        this.$http.post('/admin/match/videoSource/save?url=' + this.url + '&name=' + this.name + '&matchId=' + this.matchId).then((response) => {
          if (response.status === ERR_OK) {
            this.status = true;
            this.msg = '操作成功!';
            console.log('操作成功');
          }
        });
      }
    },
    created() {
      this.$emit('childTellMe', this.notShow);
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .formCont
    width: 100%
    .itemDetail
      width: 100%
      > li + li
        margin-top: 20px
      > li
        display: flex
        -webkit-display: flex
        flex-direction: row
        justify-content: center
        color: #7e8c8d
        input
          border: 1px solid #647172
          font-size: 12px
          height: 22px
          line-height: 22px
          padding-left: 10px
          text-overflow: ellipsis
          white-space: nowrap
        span
          height: 24px
          line-height: 24px
          font-size: 14px
    .submitBut
      > span
        height: 30px
        line-height: 30px
        background: #6082d6
        font-size: 12px
        padding: 0px 10px
        border: 1px solid
        border-radius: 7px
        color: #fff
    .msgShow
      text-align: center
      margin: 10px auto
      color: #f00
      font-size: 16px
</style>
