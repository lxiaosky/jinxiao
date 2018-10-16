<template>
 <div>
   <header>
     <img id="bg" src="../assets/img/award-banner1.jpg">
     <p id="user-name" class="data-name">xiao，西一奥鸮</p>
     <img id="avt" class="data-avt" src="../assets/img/jinxiao.jpg">
   </header>
   <div id="main">
     <div id="list">
       <ul>
         <li>
           <div class="po-avt-wrap">
             <img class="po-avt data-avt" src="../assets/img/zs.jpg">
           </div>
           <div class="po-cmt">
             <div class="po-hd">
               <p class="po-name"><span class="data-name">章三</span></p>
               <div class="post">
                 <p class='link'>
                   <img src="../assets/img/xgzl.png" width=40 height=40>
                   <a href='javascript:;'>积满108个赞，送你万圣节香港狂欢之旅</a>
                 </p>
                 <!--<p>链接-积满108个赞，送你万圣节香港狂欢之旅</p>-->
                 <!--<p>-->
                   <!--<img class="list-img" src="../assets/img/jt1.jpg" style="height: 80px;">-->
                   <!--<img class="list-img" src="../assets/img/yt3.jpg" style="height: 80px;">-->
                   <!--<img class="list-img data-avt" src="../assets/img/0.jpg" style="height: 80px;">-->
                 <!--</p>-->
               </div>
               <p class="time">刚刚</p><img class="c-icon" src="../assets/img/c.png" @click='give'>
             </div>
             <div class="r"></div>
             <div class="cmt-wrap">
               <div class="like"><img src="../assets/img/l.png">CiCi，Luna，杨幂，王思聪，陈赫，马云，刘德华...</div>
               <div class="cmt-list">
                 <p><span>CiCi：</span>哇赞，可是工作狗你有时间去吗？</p>
                 <p><span>Luna：</span>帮代购奶粉吗</p>
                 <p>
                   <span class="data-name">章三</span>
                   回复
                   <span>Luna</span>
                   <span>：</span>
                   <img class='emoji' src="../assets/img/Expression_40.png" alt="拜拜" width=24>
                 </p>
                 <p><span>金鸮：</span>兄弟，助你一程~</p>
               </div>
             </div>
             <!--<transition name="slide-fade">-->
               <!--<div v-if="giveShow" class='give'>-->
                 <!--<img src="../assets/img/x.png">-->
                 <!--<span>赞</span>-->
               <!--</div>-->
             <!--</transition>-->
           </div>
         </li>
         <li>
           <div class="po-avt-wrap">
             <img class="po-avt data-avt" src="../assets/img/YZ.jpeg">
           </div>
           <div class="po-cmt">
             <div class="po-hd">
               <p class="po-name"><span class="data-name">被设计耽误了说唱事业的YZ</span></p>
               <div class="post">
                 <!--<p class='link'>-->
                   <!--<img src="../assets/img/YZ.jpeg" width=40 height=40>-->
                   <!--<a href='javascript:;'>积满108个赞，送你万圣节香港狂欢之旅</a>-->
                 <!--</p>-->
                 <p>我为2018金鸮盛典创作的最新单曲发布了！快来听！</p>
                 <p class='music' @click='playMusic("../../static/audio/yy.m4a")'>
                   <img src="../assets/img/paly.png" width=40 height=40>
                   <a href='javascript:;'>《难忘金鸮》歌曲试听，点击开始播放</a>
                 </p>
                 <!--<p>-->
                 <!--<img class="list-img" src="../assets/img/jt1.jpg" style="height: 80px;">-->
                 <!--<img class="list-img" src="../assets/img/yt3.jpg" style="height: 80px;">-->
                 <!--<img class="list-img data-avt" src="../assets/img/0.jpg" style="height: 80px;">-->
                 <!--</p>-->
               </div>
               <p class="time">刚刚</p><img class="c-icon" src="../assets/img/c.png" @click='give'>
             </div>
             <div class="r"></div>
             <div class="cmt-wrap">
               <div class="like"><img src="../assets/img/l.png">CiCi，Luna，COCO，阿鸣，YZ，Lynn，YZ，金主爸爸怡小宝...</div>
               <div class="cmt-list">
                 <p><span>COCO：</span>为欧巴打CALL，洗脑啦<img class='emoji' src="../assets/img/Expression_67.png" alt="心" width=24></p>
                 <p><span>阿鸣：</span>天闻的宝藏男孩 好酷！</p>
                 <p><span>YZ：</span><img class='emoji' src="../assets/img/Expression_5.png" alt="酷" width=24></p>
                 <p><span>Lynn：</span>哇，自己作词的吗？</p>
                 <p><span>YZ：</span>要不然？</p>
                 <p><span>金主爸爸怡小宝：</span>今年我们魔力3V3有原创作曲大赛，约不约？</p>
                 <!--<p>-->
                   <!--<span class="data-name">章三</span>-->
                   <!--回复-->
                   <!--<span>Luna</span>-->
                   <!--<span>：</span>-->
                   <!--<img class='emoji' src="../assets/img/Expression_40.png" alt="拜拜" width=24>-->
                 <!--</p>-->
                 <!--<p><span>金鸮：</span>兄弟，助你一程~</p>-->
               </div>
             </div>
             <!--<transition name="slide-fade">-->
             <!--<div v-if="giveShow" class='give'>-->
             <!--<img src="../assets/img/x.png">-->
             <!--<span>赞</span>-->
             <!--</div>-->
             <!--</transition>-->
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
      // giveShow: false
      audio: null,
      musicUrl: '',
      musicShow: false
    }
  },
  mounted () {
    this.audio = document.createElement('audio')
  },
  methods: {
    give () {
      // this.giveShow = !this.giveShow
    },
    playMusic (url) {
      if (this.musicShow) {
        if (url !== this.musicUrl) {
          this.audio.pause()
          this.audio.load()
          this.audio.src = url
          this.musicUrl = url
          this.audio.play()
        } else {
          this.audio.pause()
          this.audio.load()
          this.musicShow = false
        }
      } else {
        this.audio.src = url
        this.musicUrl = url
        this.audio.play()
        this.musicShow = true
      }
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
  .link,.music{
    padding: 5px;
    margin-top: 10px;
    background: #d8d8d8;
    display: flex;
    align-items: center;
  }
  .link img,.music img{
    padding: 0;
    margin-right: 5px;
    background: #333;
  }
  .link a,.music a{
    font-size: 14px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    color: #333;
  }
  /*.give{*/
    /*width: 50px;*/
    /*padding: 5px 20px;*/
    /*background: #131313;*/
    /*display: flex;*/
    /*justify-content: center;*/
    /*align-items: center;*/
    /*color: #fff;*/
    /*border-radius: 4px;*/
    /*position: absolute;*/
    /*right: 45px;*/
    /*top: 88px;*/
    /*font-size: 14px;*/
  /*}*/
  /*.give img{*/
    /*margin-right: 5px;*/
  /*}*/
  /*.slide-fade-enter-active {*/
    /*transition: all .3s ease;*/
  /*}*/
  /*.slide-fade-leave-active {*/
    /*transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
  /*}*/
  /*.slide-fade-enter, .slide-fade-leave-to{*/
    /*transform: translateX(10px);*/
    /*opacity: 0;*/
  /*}*/
</style>
