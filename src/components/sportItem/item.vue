<template>
  <div id="ContList">
    <ul class="contUl">
      <li v-if="item.todayList && item.todayList.length" class="contLtFirst">
        <h3>{{this.timestampTransform((item.todayList)[0].matchBeginTime,'todayList')}}</h3>
        <ul class="contUlSed">
          <li v-for="itemlt in item.todayList">
            <router-link v-bind:to="{path:'/itemList', query: { matchId: itemlt.matchId }}">
              {{itemlt.matchNo}}&nbsp;&nbsp;{{(new Date(itemlt.matchBeginTime)).toLocaleTimeString()}}&nbsp;{{itemlt.homeName}}&nbsp;{{itemlt.awayName}}
            </router-link>
          </li>
        </ul>
      </li>
      <li v-if="item.tomorrowList && item.tomorrowList.length" class="contLtFirst">
        <h3>{{this.timestampTransform((item.tomorrowList)[0].matchBeginTime,'tomorrowList')}}</h3>
        <ul class="contUlSed">
          <li v-for="itemlt in item.tomorrowList">
            <router-link v-bind:to="{path:'/itemList', query: { matchId: itemlt.matchId }}">
              {{itemlt.matchNo}}&nbsp;&nbsp;{{(new Date(itemlt.matchBeginTime)).toLocaleTimeString()}}&nbsp;{{itemlt.homeName}}&nbsp;{{itemlt.awayName}}
            </router-link>
          </li>
        </ul>
      </li>
      <li v-if="item.dayAfterTomorrowList && item.dayAfterTomorrowList.length" class="contLtFirst">
        <h3>{{this.timestampTransform((item.dayAfterTomorrowList)[0].matchBeginTime,'dayAfterTomorrowList')}}</h3>
        <ul class="contUlSed">
          <li v-for="itemlt in item.dayAfterTomorrowList">
            <router-link v-bind:to="{path:'/itemList', query: { matchId: itemlt.matchId }}">
              {{itemlt.matchNo}}&nbsp;&nbsp;{{(new Date(itemlt.matchBeginTime)).toLocaleTimeString()}}}&nbsp;{{itemlt.homeName}}&nbsp;{{itemlt.awayName}}
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
  export default {
    data() {
      return {
        item: {},
        notShow: true
      };
    },
    created() {
      this.$emit('childTellMe', this.notShow);
      this.$http.get('/admin/match/matchList').then((response) => {
        response = response.body;
        if (response.status === ERR_OK) {
          this.item = response.data;
        }
      });
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .contUl
    width: 100%
    > li
      display: flex
      -webkit-display: flex
      flex-direction: column
      justify-content: center
      > h3
        background: #666
        height: 22px
        color: #fff
        font-size: 16px
        text-align: center
        line-height: 22px
      .contUlSed
        li
          height: 28px
          line-height: 28px
          color: #169BD5
          display: flex
          -webkit-display: flex
          flex-direction: row
          justify-content: center
          > a
            color: #169BD5
            &:hover
              color: #7e8c8d
</style>
