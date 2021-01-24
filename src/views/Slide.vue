<template>
  <ion-content>
    <ion-slides :options="slideOpts" @ionSlideTransitionEnd="ionSlideTouchEnd()">
      <ion-slide>
        <h1>111</h1>
      </ion-slide>
      <ion-slide>
        <h1>222</h1>
      </ion-slide>
      <ion-slide>
        <h1>333</h1>
      </ion-slide>
    </ion-slides>
    <br>
    <ion-slides ref="sli">
      <ion-slide>
        <h1>aaa</h1>
      </ion-slide>
      <ion-slide>
        <h1>bbb</h1>
      </ion-slide>
      <ion-slide>
        <h1>ccc</h1>
      </ion-slide>
    </ion-slides>
    <ion-button @click="slideNext">点击按钮跳转到下一页</ion-button>
  </ion-content>
</template>
<script>
import {
  IonContent,
  IonSlide,
  IonSlides,
  IonButton
} from '@ionic/vue'
export default {
  components:{
    IonContent,
  IonSlide,
  IonSlides,
  IonButton
  },
  data(){
    return {
      slideOpts:{
        effect:'flip',//轮播效果
        autoplay:{
          delay:2000//持续时间
        },
        loop:true
      },
      slide:this.$refs.sli,
    }
  },
  methods:{
      slideNext(){
        // console.log(this.$refs.sli)
        // this.slide.slideNext()
      },
      ionSlideTouchEnd(e){
        console.log('aaa')
      }
    }
  
}
</script>