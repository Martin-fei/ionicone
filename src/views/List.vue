<template>
  <ion-content>
    <ion-list lines="full">
      <ion-item v-for="(val,ii) of arr" :key="ii">
        <ion-label>{{val}}</ion-label>
      </ion-item>
    </ion-list>

    <ion-list lines="full">
      <ion-item-divider>
        <ion-label>A</ion-label>
      </ion-item-divider>
      <ion-item>
        <ion-label>a1</ion-label>
      </ion-item>
       <ion-item>
        <ion-label>a2</ion-label>
      </ion-item>
       <ion-item>
        <ion-label>a3</ion-label>
      </ion-item>
      <ion-item-divider>
        <ion-label>B</ion-label>
      </ion-item-divider>
      <ion-item>
        <ion-label>b1</ion-label>
      </ion-item>
       <ion-item>
        <ion-label>b2</ion-label>
      </ion-item>
       <ion-item>
        <ion-label>b3</ion-label>
      </ion-item>
    </ion-list>

    <ionn-list class="mylist">
      <ion-item>
        <ion-icon slot="start" name="people"></ion-icon>
        <ion-label>用户中心</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon slot="start" name="setting"></ion-icon>
        <ion-label>设置</ion-label>
      </ion-item>
    </ionn-list>

    <ion-list>
      <ion-item>
        <ion-avatar slot="start">
          <img src="">
        </ion-avatar>
        <ion-label>item avatar111</ion-label>
      </ion-item>
      <ion-item>
        <ion-avatar slot="end">
          <img src="">
        </ion-avatar>
        <ion-label>item avatar222</ion-label>
      </ion-item>
    </ion-list>

    <ion-list>
      <ion-item>
        <ion-thumbnail slot="start">
          <ion-img src="" alt=""></ion-img>
        </ion-thumbnail>
        <div class="info">
          <h3>我是新闻</h3>
          <p>新闻介绍新闻介绍新闻介绍新闻介绍新闻介绍新闻介绍</p>
        </div>
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="end">
          <ion-img src="" alt=""></ion-img>
        </ion-thumbnail>
        <ion-label>item 1111</ion-label>
      </ion-item>
    </ion-list>


    <ion-list>
      <ion-item-sliding>
        <ion-item>
          <ion-label>item</ion-label>
        </ion-item>
        <ion-item-options side="start">
          <ion-item-option @click="favourite(item)" color="success">编辑</ion-item-option>
          <ion-item-option color="primary" @click="share(item)">分享</ion-item-option>
        </ion-item-options>
        <ion-item-options side="end">
          <ion-item-option  color="warning" @click="unread(item)">unread</ion-item-option>
        </ion-item-options>
      </ion-item-sliding>
    </ion-list>

  </ion-content>
</template>
<style scoped>
.mylist>ion-item{
  line-height: 2;
}
.mylist>ion-item>.info>h3{
  font-size: 16px;
  padding: 2px;
  margin: 0;
}
.mylist>ion-item>.info>h3>p{
  font-size: 13px;
  padding: 2px;
  margin: 0;
  line-height: 1.5;
}
</style>
<script>
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonIcon
} from '@ionic/vue'
import { defineComponent } from 'vue';
export default defineComponent({
  components:{
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonItemDivider,
  IonIcon
  },
  data(){
    return{
      arr:[0,1,2,3,4,5,6,7]
    }
  }
})
</script>