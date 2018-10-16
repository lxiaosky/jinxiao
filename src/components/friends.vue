<template>
 <div>
   <header>
     <img id="bg" src="../assets/bg.jpg">
     <p id="user-name" class="data-name">xiao，西一奥鸮</p>
     <img id="avt" class="data-avt" src="../assets/zs.jpg">
   </header>
   <div id="main">
     <div id="list">
       <ul>
         <li>
           <div class="po-avt-wrap">
             <img class="po-avt data-avt" src="../assets/zs.jpg">
           </div>
           <div class="po-cmt">
             <div class="po-hd">
               <p class="po-name"><span class="data-name">某某科技~贾素杰</span></p>
               <div class="post">
                 <p>链接-积满108个赞，送你万圣节香港狂欢之旅</p>
                 <!--<p>-->
                   <!--<img class="list-img" src="../assets/jt1.jpg" style="height: 80px;">-->
                   <!--<img class="list-img" src="../assets/yt3.jpg" style="height: 80px;">-->
                   <!--<img class="list-img data-avt" src="../assets/0.jpg" style="height: 80px;">-->
                 <!--</p>-->
               </div>
               <p class="time">刚刚</p><img class="c-icon" src="../assets/c.png" @click='give'>
             </div>
             <div class="r"></div>
             <div class="cmt-wrap">
               <div class="like"><img src="../assets/l.png">CiCi，Luna，杨幂，王思聪，陈赫，马云，刘德华...</div>
               <div class="cmt-list">
                 <p><span>CiCi：</span>哇赞，可是工作狗你有时间去吗？</p>
                 <p><span>Luna：</span>帮代购奶粉吗</p>
                 <p>
                   <span class="data-name">章三</span>
                   回复
                   <span>Luna</span>
                   <span>：</span>
                   <img class='emoji' src="../assets/Expression_40.png" alt="拜拜" width=24>
                 </p>
                 <p><span>金鸮：</span>兄弟，助你一程~</p>
               </div>
             </div>
           </div>
         </li>
       </ul>
     </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'Friends',
  data () {
    return {
      a: false
    }
  },
  methods: {
    give () {
      this.a = !this.a
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../css/friends.css";
  .emoji{
    vertical-align: bottom;
  }
</style>
