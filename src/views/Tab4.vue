<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Header
          1 of 3
        </ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      2 of 3
      <h1>Main Content</h1>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { camera, trash, close } from 'ionicons/icons';
import { IonPage, IonHeader,IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab2',
  components: { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,},
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