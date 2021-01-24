<template>
  <ion-content padding>
    <ion-segment v-model="tab">
      <ion-segment-button value="tab1">
        <ion-label>详情</ion-label>
      </ion-segment-button>
      <ion-segment-button value="tab2">
        <ion-label>评论</ion-label>
      </ion-segment-button>
      <ion-segment-button value="tab3">
        <ion-label>简介</ion-label>
      </ion-segment-button>
    </ion-segment>
    <div class="info">
      <div v-if="this.tab=='tab1'">商品详情</div>
      <div v-else-if="this.tab=='tab2'">商品评论</div>
      <div v-else-if="this.tab=='tab3'">商品简介</div>
    </div>
    {{tab}}
  </ion-content>
</template>
<script>
import {
  IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel
} from '@ionic/vue'
export default {
  components:{
    IonContent,
  IonSegment,
  IonSegmentButton,
  IonLabel
  },
  data(){
    return{
      tab:"tab3",
    }
  }
}
</script>