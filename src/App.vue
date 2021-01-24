<template>
  <ion-app>

     <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Start Menu</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item href="/button">Menu Item1</ion-item>
        <ion-item href="/form">Menu Item2</ion-item>
        <ion-item>Menu Item3</ion-item>
        <ion-item>Menu Item4</ion-item>
        <ion-item>Menu Item5</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

    <ion-router-outlet id="main"/>
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet,IonMenu,IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonItem } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,IonMenu,IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonItem
  }
});
</script>