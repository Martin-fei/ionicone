<template>
  <ion-page>
    <ion-header>
      <ion-toolbar slots="start">
        <ion-title>Photo Gallery</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-button color="primary" href="/button">跳转到按钮组件页面</ion-button>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
// import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
// import ExploreContainer from '@/components/ExploreContainer.vue';
import { camera, trash, close } from 'ionicons/icons';
import { IonPage, IonHeader, 
         IonToolbar, IonTitle, IonContent, IonGrid, IonRow, 
         IonCol, IonImg } from '@ionic/vue';

export default  {
  name: 'Tab2',
  components: { IonPage, IonHeader,
         IonToolbar, IonTitle, IonContent},
  setup() {
    return {
      camera, trash, close
    }
  },
  methods:{
    takePhoto(){console.log('调用了方法')}
  }
}
</script>