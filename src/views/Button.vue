<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slots="start">
        <ion-back-button>11</ion-back-button>
      </ion-buttons>
      <ion-title>button</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-list v-for="i of item" :key="i">
      <ion-label>{{i}}</ion-label>
    </ion-list>
  </ion-content>
</template>
<script>
import {IonHeader,IonToolbar,IonButtons,IonBackButton,IonContent,IonList,IonLabel} from '@ionic/vue'
export default {
  components:{IonHeader,IonToolbar,IonButtons,IonBackButton,IonContent,IonList,IonLabel},
  data(){
    return{
      item:[0,1,2,3,4,5,6]
    }
  }
}
</script>