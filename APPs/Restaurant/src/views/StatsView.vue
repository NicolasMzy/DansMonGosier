<template>
    <div class="home">
        <h1>ICI on affiche les vilaines stats</h1>
        <p>{{stat}}</p>
    </div>
  </template>
  
  <script  lang="ts">
  import { onMounted, ref, defineComponent } from 'vue'
  //IMPORT
  import axios from 'axios'
  
  export default defineComponent({
    name : 'RestaurantHome',
    components: {

    },
    setup() {
      let stat = ref(null);
      let credId = localStorage.getItem('accountId');
      onMounted(async () => {
          const stats = await axios.get('http://localhost:3007/stats/restaurant/monthly-sales/' + credId);
          stat.value = stats.data;
      });
      return{
        stat,
      }
    }
  });
    
  
  </script>
  
  <style>
  
  </style>