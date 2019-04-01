<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">Forum</a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank">Twitter</a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank">vuex</a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a>
      </li>
    </ul>-->
    <shutterAnimate :shutterAnimateType="moveType">
      <span slot="shutterAnimate" >
        日本新年号“令和”，含着对中国老师怎样的藐视？

环球网

04-0111:55
文/陈小刀 李小飞刀

当地时间1日上午11时42分，日本内阁官房长官菅义伟在记者会上正式公布日本新年号为“令和”（れいわ，Reiwa），出自日本古代典籍《万叶集》。

从公元645年，大中兄皇子仿照唐朝制度，设立日本历史上的第一个年号“大化”以来，1374年时间，247个年号，出处全部来自于中国典籍。


即使是明治维新之后，日本最想跟中国划清界限的那些年，这个传统也没有变。

“明治”取自《易经说卦传》“圣人南面听天下，向明而治”。

“大正”取自《易经》第十九卦中的“大亨以正，天之道也”。

“昭和”取自《书经尧典》“百姓昭明、万邦协和”。

“平成”取自《古文尚书大禹谟》“内平则外成也，地平则天成也”。

也就是说，这是1300多年来，日本年号首次成功“脱中”。

早在这次新年号的产生过程中，日本媒体就不断放出消息，首相安倍指示周围的人，年号出处最好来自于日本古典书籍。

媒体分析，安倍的心思大概是，为什么日本制定国号，要有借助中国帮忙的感觉？

赶在这个时候“脱中”，几个意思呢？

选拔

由于意义重大，日本年号的每一个字选择都非常讲究。

根据日本1979年颁布的《元号法》，如果天皇退位，年号也必须改变。按照日本政府规定的年号选定程序，日本首相需要钦点数名精通中国史、中国古典文学和日本古典文学等领域的学者，让他们提出两到五个新年号作为候选方案。

此次选出来的字要遵循6个条件：

1.使用常用汉字

2.每个字最多12-15个笔画

3.第一个字的拼音不能使“MTSH”

4.尽量避开民间预想的年号名称

5.不要用经常作为人名的汉字

6.不要使用与大企业相同的名字
      </span>
    </shutterAnimate>
    <select v-model="selectedType" @change="changeType">
      <option value>请选择</option>
      <option value="horizontalLeafMoveIn">百叶窗水平移入</option>
      <option value="horizontalLeafMoveOut">百叶窗水平移出</option>
       <option value="verticalLeafMoveIn">百叶窗垂直移入</option>
      <option value="verticalLeafMoveOut">百叶窗垂直移出</option>
    </select>
  </div>
</template>

<script>
// import shutterAnimate from '@/components/shutterAnimate/'
export default {
  name: "HelloWorld",
  // components:{shutterAnimate},
  data() {
    return {
      msg: "1Welcome to Your Vue.js App",
      moveType: "",
      selectedType: ""
    };
  },
  methods: {
    changeType() {
      this.moveType = this.selectedType;
    }
  },

  watch: {
    moveType(newValue, oldValue) {
      this.moveType=newValue;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
