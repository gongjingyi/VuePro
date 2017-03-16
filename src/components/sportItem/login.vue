<template>
  <div class="inputBox">
    <ul class="inputEle">
      <li><label>用户名：</label><input type="text" name=""/></li>
      <li><label>密&nbsp;&nbsp;&nbsp;&nbsp;码：</label><input type="password" name=""/></li>
      <li><span type="submit">登录</span><a href="#">注册</a></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        notShow: false
      };
    },
    created() {
      this.$emit('childTellMe', this.notShow);
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .inputBox
    width: 100%
    margin: 60px auto
    ul.inputEle
      border: 1px solid #d593d1;
      padding: 40px 20px;
      display: table;
      margin: auto;
      > li + li
        margin-top: 15px
      > li
        text-align: center
        label
          font-size: 18px
          height: 28px;
          line-height: 28px;
        input
          border: 1px solid #b4b4b4
          height: 26px
          line-height: 26px
          padding-left: 5px
        > span
          color: #50d68f
          margin-right: 20px
          cursor: pointer
        > a
          color: #faa422
</style>
