<template>
  <div class="refer-to-friend">
    <h2 class="title">Refer to a Friend</h2>
    <div class="image-section">
      <img class="refer-image" src="../../assets/settings/fireworks.png" alt="Refer a Friend" />
    </div>
    <div class="code-section">
      <p>Your Referral Code:</p>
      <div class="referral-code">{{ referralCode }}</div>
      <p>Code de votre Parrain</p>
      <input type="text" v-model="parrain.id_sponsor"/>
      <button @click="parraining" >Se faire sponsoriser</button>
    </div>

  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ReferToFriend',
  data() {
    let accountId = localStorage.getItem('accountId');

    return {
      referralCode: accountId,
    };
  },
  setup(){
    let accountId = localStorage.getItem('accountId');

    let parrain = ref({
      id_sponsored: accountId,
      id_sponsor: '',
      bonnus: 'MMMMMHHHH'
    });

    async function parraining(){
      const response = await axios.post('http://localhost:80/sponsor/', parrain)
    }

    return{
      parraining,
      parrain
    }
  }
});


</script>

<style lang="scss" scoped>
.refer-to-friend {
  background-color: #f2f2f2;
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
    margin-bottom: 20px;

    .refer-image {
      width: 200px;
      height: auto;
    }
  }

  .code-section {
    background-color: #fff;
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
