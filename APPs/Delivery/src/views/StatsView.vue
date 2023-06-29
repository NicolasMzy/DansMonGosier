<template>
    <div class="home">
        <h1>ICI on affiche les vilaines stats</h1>
        <div v-for="(data,i) in stats" :key="i">
          <p>{{ data.month }} -> {{ data.sales }}</p>
        </div>
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
      let stats = ref(null);
      onMounted(async () => {
        let accountId = localStorage.getItem('accountId');
        console.log(accountId)
          const statsResponse = await axios.post('http://localhost:3007/stats/restaurant/monthly-sales/' + accountId);
          stats.value = statsResponse.data.monthlySales;
      });
      return{
        stats
      }
    }
  });
    
  
  </script>
  
  <style>
  
  </style>