<template>
<ion-list>
  <ion-item>
    <ion-label>Date</ion-label>
    <ion-datetime display-format="YYYY-MM-DD" picker-format="YYYY MM DD" placeholder="选择日期"></ion-datetime>
  </ion-item>
</ion-list>
<ion-list>
  <ion-item>
    <ion-label>Date双向数据绑定</ion-label>
    <ion-datetime v-model="day" display-format="YYYY-MM-DD" picker-format="YYYY MM DD" placeholder="选择日期"></ion-datetime>
  </ion-item>
    {{day}}
</ion-list>
<ion-list>
  <ion-item>
    <ion-label>显示当前日期</ion-label>
    <ion-datetime v-model="nowDay" display-format="YYYY-MM-DD" picker-format="YYYY MM DD" placeholder="选择日期" @ionChange="ionChange()" :picker-options="customPickerOptions"></ion-datetime>
  </ion-item>
    {{day}}
</ion-list>
<ion-button @click="a()">aa</ion-button>
</template>
<script>
import {
  IonList,
  IonItem,
  IonLabel,
  IonDatetime,
  IonButton
} from '@ionic/vue'
export default {
  components:{
    IonList,
  IonItem,
  IonLabel,
  IonDatetime,
  IonButton

  },
  data(){
    return{
      day:"2019-02-14",
      nowDay:"",
      customPickerOptions :{
      buttons: [{
        text: '取消',
        handler: () => console.log('Clicked Save!')
      }, {
        text: '确认',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          // return false;
        }
      }]
    }
    }
  },
  methods:{
    a(){
      const t=new Date();
      const y=t.getFullYear()
      console.log(y)
    },
    ionChange(){
      const t=new Date();
      const y=t.getFullYear()
      console.log(y)
    }
  }
}
</script>