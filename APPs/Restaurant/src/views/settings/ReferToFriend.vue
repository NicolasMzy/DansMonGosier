<template>
    <div class="refer-to-friend">
      <Header/>
      <h2 class="title">Refer to a Friend</h2>
      <div class="image-section">
        <img class="refer-image" src="../../assets/settings/fireworks.png" alt="Refer a Friend" />
      </div>
      <div class="code-section">
        <p>Your Referral Code:</p>
        <div class="referral-code">{{ referralCode }}</div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Header from '../../components/componentsGlobaux/Header.vue'

  export default defineComponent({
    name: 'ReferToFriend',
    components:{
      Header,
    },
    data() {
      return {
        referralCode: 'ABCD1234',
      };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .refer-to-friend {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
  
    .title {
      color: #333;
      font-size: 24px;
      margin-bottom: 20px;
    }
  
    .image-section {
      display: flex;
      justify-content: center;
      margin-top: 40px;
      margin-bottom: 20px;
  
      .refer-image {
        width: 200px;
        height: auto;
      }
    }
  
    .code-section {
      background-color: #f2f2f2;
      padding: 10px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
  
      p {
        font-size: 16px;
        margin-bottom: 10px;
      }
  
      .referral-code {
        font-size: 24px;
        font-weight: bold;
      }
    }
  }
  </style>
  