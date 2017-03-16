<template>
  <div class="formCont">
    <form id="itemForm2">
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
        <span type="button" v-on:click="doAdd">确认</span>
      </div>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  const ERR_OK = 0;
  export default {
    data() {
      return {
        matchId: this.$route.query.matchId,
        id: this.$route.query.id,
        name: '',
        url: '',
        msg: '',
        status: false,
        notShow: true
      };
    },
    created() {
      this.$emit('childTellMe', this.notShow);
      this.$http.get('/admin/match/videoSource/view?id=' + this.$route.query.id).then((response) => {
        response = response.body;
        if (response.status === ERR_OK) {
          this.name = response.data.item.name;
          this.url = response.data.item.url;
        }
      });
    },
    methods: {
      doAdd: function () {
        this.$http.post('/admin/match/videoSource/save?url=' + this.url + '&name=' + this.name + '&matchId=' + this.matchId + '&id=' + this.id).then((response) => {
          console.log(response);
          if (response.status === 200) {
            this.status = true;
            this.msg = '操作成功!';
            console.log('操作成功');
          }
        });
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
