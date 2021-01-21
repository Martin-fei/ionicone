<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>My Navigation Bar</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-button color="danger" @click="speak" expand="block" fill="clear" shape="round">按钮</ion-button>
  <ion-list>
    <ion-item>
      <ion-label>aa</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>bb</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>cc</ion-label>
    </ion-item>
  </ion-list>
</template>
<script>
import {IonButton,IonList,IonItem,IonLabel} from '@ionic/vue'
export default {
  components:{IonButton,IonList,IonItem,IonLabel},
  methods:{
    speak(){
      console.log('aa')
    }
  }
}
</script>