<template>
  <div class="header">
    <ul>
      <li>直播线路配置——》</li>
      <li>
        <router-link to="/item">选择比赛</router-link>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .header
    ul
      background rgb(242, 242, 242)
      overflow hidden
      height 36px
      border 0
      li
        list-style-type none
        font-size 14px
        color #2E2E2E
        height 36px
        line-height 36px
        display inline-block
        &:first-of-type
          margin-left 50px
         a
          text-decoration none
          color #6876b4
          &:hover
            color #b4b4b4
</style>
