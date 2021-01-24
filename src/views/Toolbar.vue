<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>toolbar</ion-title>
    </ion-toolbar>
  </ion-header>

  <!-- <ion-content>111</ion-content> -->

  <ion-footer>
    <ion-toolbar color="warning">
      <ion-title>底部导航</ion-title>
      <ion-buttons slots="end">
        <ion-button>
          <ion-icon slots="icon-only" name="add"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-footer>
</template>
<style scoped>
</style>
<script>
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  // IonContent,
  IonFooter
} from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components:{
    IonHeader,
    IonToolbar,
    IonTitle,
    // IonContent,
    IonFooter
  }
  
})
</script>