<template>
  <ion-content>
    <ion-list>
      <ion-item-divider>
        <ion-label>用户基本信息</ion-label>
      </ion-item-divider>
      <ion-item>
        <ion-label>用户名：</ion-label>
        <ion-input v-model="username"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>年龄：</ion-label>
        <ion-input v-model="age"></ion-input>
      </ion-item>
      <ion-item>
        <ion-label>是否本科</ion-label>
        <ion-toggle slot="end" v-model="flag"></ion-toggle>
      </ion-item>
      <ion-item-divider>
        <ion-label>支付方式</ion-label>
      </ion-item-divider>
      <ion-radio-group v-model="payType">
        <ion-item>
          <ion-avata slot="start">
            <img src="" alt="">
          </ion-avata>
          <ion-label>支付宝支付</ion-label>
          <ion-radio slot="end" value="0"></ion-radio>
        </ion-item>
        <ion-item>
          <ion-avata slot="start">
            <img src="" alt="">
          </ion-avata>
          <ion-label>微信支付</ion-label>
          <ion-radio slot="end" value="1"></ion-radio>
        </ion-item>
      </ion-radio-group>
      <ion-item-divider>
        <ion-label>爱好</ion-label>
      </ion-item-divider>
      <ion-item v-for="(item,index) of checkBoxList" :key="index">
        <ion-checkbox v-model="item.isChecked" slot="start">
          <ion-label>{{item.val}}</ion-label>
        </ion-checkbox>
      </ion-item>
      <ion-item>
        <ion-label>选择城市</ion-label>
        <ion-select v-model="city" multiple="true" >
          <ion-select-option v-for="(val,i) of cityList" :key="i" value="peperoni">{{val}}</ion-select-option>
        </ion-select>
      </ion-item>
    </ion-list>
    <ion-list>
      <ion-item>
        <ion-textarea v-model="info" placeholder="请输入备注信息"></ion-textarea>
      </ion-item>
    </ion-list>
    <ion-button type="submit" expand="block" round strong @click="sub"></ion-button>
  </ion-content>
</template>
<script>
import {
  IonContent,
  IonList,
  IonItemDivider,
  IonLabel,
  IonItem,
  IonInput,
  IonToggle,
  IonRadio,
  IonRadioGroup,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonTextarea
} from '@ionic/vue'
export default {
  components:{
    IonContent,
  IonList,
  IonItemDivider,
  IonLabel,
  IonItem,
  IonInput,
  IonToggle,
  IonRadio,
  IonRadioGroup,
  IonCheckbox,
  IonSelect,
  IonSelectOption,
  IonTextarea
  },
  data(){
    return{
        username:"",
        age:20,
        flag:true,
        payType:"1",
        checkBoxList:[
          {val:'吃饭',isChecked:true},
          {val:'睡觉',isChecked:false},
          {val:'敲代码',isChecked:false}
        ],
        cityList:['北京','上海','深圳'],
        city:'北京',
        info:''
    }
  },
  methods:{
    sub(){
      console.log(this.username,this.city,this.checkBoxList)
    }
  }
}
</script>