<template>
  <ion-page>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>
      <slide></slide>
    </ion-content>
    <ion-button @click="open()">kaidacebianlan</ion-button>
    <ion-buttons slot="start">
      <ion-menu-button menu="first"></ion-menu-button>
    </ion-buttons>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
IonButtons,IonMenuButton} from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import Slide from '@/components/Slide.vue'

export default  {
  name: 'Tab1',
  components: {Slide, IonHeader, IonToolbar, IonTitle, IonContent,
  IonButtons,IonMenuButton, IonPage,},
  methods:{
    open(){
      console.log('open')
    }
  }
}
</script>