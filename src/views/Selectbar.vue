<template>
  <ion-content>
    <ion-searchbar placeholder="请输入搜索的内容"></ion-searchbar>
    <ion-searchbar placeholder="请输入搜索的内容" animated></ion-searchbar>
    <ion-searchbar placeholder="请输入搜索的内容" type="number" animated></ion-searchbar>
    <ion-searchbar placeholder="请输入搜索的内容" type="number" animated color="success"></ion-searchbar>
    <ion-searchbar placeholder="防抖搜索的内容" debounce="500" @ionChange="doChange()"></ion-searchbar>
  </ion-content>
</template>
<script>
import {
  IonSearchbar,
  IonContent
} from '@ionic/vue'
export default {
  components:{
  IonSearchbar,
  IonContent
  },
  methods:{
    doChange(){
      console.log('aaa')
    }
  }
}
</script>