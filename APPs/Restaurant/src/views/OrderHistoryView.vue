<template>
    <div class="home">
        <h1>ICI on affiche l'historique des orders</h1>
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
      let order = ref(null);
      onMounted(async () => {
          const orders = await axios.get('http://localhost:3012/orders');
          order.value = orders.data;
  
        
      });
      return{
        
  
      }
    }
  });
    
  
  </script>
  
  <style>
  
  </style>