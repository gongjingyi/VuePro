<template>
  <div id="appp">
    <p>{{ msg }}</p>
    <p v-bind:class="['classA',{classB:show,classC:clsNameBl}]" v-bind="{id:'pId',attrOther:'otherAtr'}">类演示</p>
    <p v-if="show" v-bind:title="msg">看到了</p>
    <p v-if="Math.random()>0.5" v-bind:title="msg">你随机看到了我</p>
    <p v-else>你看到的是另一个我</p>
    <ul class="testUl">
      <li v-for="list in propMsg.list"><span>{{list.name}}</span><span><=></span><span>{{list.matchId}}</span></li>
    </ul>
    <div class="clickEle" v-on:click="clickEle"><span>点击我观看反转效果</span></div>
    <div>
      <input v-model="message" placeholder="edit me"/>
      <p>Message is: {{message}}</p>
    </div>
    <div>
      <input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
    </div>
    <div id="example-4" class="demo">
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>
    <div id="example-1">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <div id="example-5" class="demo">
      <select v-model="selected">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
    <h3 v-bind:class="msg | capitailze">{{msg|capitailze}}</h3>
    <h4>{{now1()}}</h4>
    <h4>{{now2}}</h4>
  </div>
</template>

<script type="text/ecmascript-6">
  /* import Vue from 'vue';
   var testApp = new Vue({
   el: '#appp',
   data: {
   msg: 'Hello Vue.js!',
   heh: 'heheh'
   }
   });
   console.log(testApp); */

  export default {
    data() {
      return {
        selected: null,
        checkedNames: [],
        msg: 'hello world!',
        show: true,
        notShow: false,
        clsNameBl: false,
        message: '',
        checked: false,
        picked: ''
      };
    },
    props: ['propMsg', 'prentData'],
    created() {
      this.$emit('childTellMe', this.notShow);
      this.$http.post('/login?username=admin&password=123456').then((response) => {
        console.log(response);
      });
      this.$http.post('/audit/modList', {uid: 2, data: {pageNumber: 0, keyValue: '', type: 1}}).then((response) => {
        console.log(response);
      });
    },
    methods: {
      clickEle: function () {
        this.msg = this.msg.split('').reverse().join('');
      },
      now1: function () {
        console.log(Date.now());
        return Date.now();
      }
    },
    computed: {
      reversedMessage: function () {
        return this.msg.split('').reverse().join();
      },
      now2: function () {
        return Date.now();
      },
      classObject: function () {
        return {
          active: this.show && !this.message,
          'text-danger': this.msg
        };
      }
    },
    filters: {
      capitailze: function (value) {
        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #appp
    p.classA
      background: #fff
    p.classB
      font-size: 20px
    p.classC
      margin-left: 20px
    .testUl
      width: 100%
      > li
        display: flex
        flex-direction: row
        justify-content: center
        > span:nth-child(2)
          order: 2
        > span:nth-child(1)
          order: 3
        > span:nth-child(3)
          order: 1
    .clickEle
      cursor: pointer
      color: #d650be
</style>
