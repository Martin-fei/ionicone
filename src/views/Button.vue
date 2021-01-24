<template>
  <ion-header>
    <ion-toolbar>
      
    <ion-buttons slots="start">
      <ion-back-button default-href="/" text="buttonText" icon="add"></ion-back-button>
      <ion-title>按钮组件</ion-title>
    </ion-buttons>
    
    <!-- <ion-title>Back</ion-title> -->

    <!-- <ion-button>
      <ion-icon slots="start" name="star"></ion-icon>
      Left Icon
    </ion-button> -->

    <!-- <ion-button>
    Right Icon
    <ion-icon slots="end" name="star"></ion-icon>
  </ion-button> -->

    <!-- <ion-button>
    <ion-icon slots="icon-only" name="star"></ion-icon>
     </ion-button> -->

    <ion-button color="dark">通过color属性修改按钮颜色</ion-button>
    <ion-button color="primary">按钮</ion-button>

    <ion-button color="primary" expand="block">通过expand控制按钮</ion-button>
    <ion-button color="primary" expand="full">通过expand控制按钮</ion-button>

    <ion-button fill="outline" expand="block">通过fill控制按钮背景填充色</ion-button>
    <ion-button fill="clear" expand="block">通过fill控制按钮背景填充色</ion-button>

    <ion-button>
      <ion-icon slots="icon-only" name="add"></ion-icon>
    </ion-button>
    <ion-button fill="clear">
      <ion-icon slots="icon-only" name="add"></ion-icon>
    </ion-button>
    <ion-icon name="add"></ion-icon>

    <ion-button size="small">通过size控制按钮大小</ion-button>
    <ion-button size="large">通过size控制按钮大小</ion-button>

    <ion-button mode="md" color="primary">安卓平台控制按钮</ion-button>
    <ion-button mode="ios" color="primary">ios系统控制按钮</ion-button>

    <ion-tab-button color="primary" href="">
      <ion-icon name="add-circle-outline" slots="start"></ion-icon>
      图片在左侧文字在右侧按钮
    </ion-tab-button>

    <ion-tab-button color="primary" href="">
      图片在右侧文字在左侧按钮
      <ion-icon name="add-circle-outline" slots="end"></ion-icon>
    </ion-tab-button>

    <ion-icon name="albums-outline" color="success"></ion-icon>

    </ion-toolbar>
    </ion-header>

  <!-- <ion-content padding>
    <ion-list v-for="i of item" :key="i">
      <ion-label>{{i}}</ion-label>
    </ion-list>
  </ion-content> -->

</template>
<script>
import {IonHeader,
IonToolbar,
IonButtons,
IonBackButton,
IonIcon,
IonButton,
} from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components:{
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonIcon,
IonButton

    },
  data(){
    return{
      // item:[0,1,2,3,4,5,6]
    }
  }
})
</script>