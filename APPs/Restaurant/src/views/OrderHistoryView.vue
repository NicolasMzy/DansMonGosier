<template>
    <div class="home">
      <h1>Orders</h1>
    <div v-for="(order,i) in orders" :key="i">
        {{ order.status }}
        {{ order.date.start }}
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
      let accountId = localStorage.getItem('accountId');
      let orders = ref(null);
      onMounted(async () => {
        const response = await axios.get('http://localhost:3005/order/status/ordering/restaurant/'+ accountId);
        console.log(response.data)
        orders.value = response.data;
  
        
      });
      return{
        orders
  
      }
    }
  });
    
  
  </script>
  
  <style>
  
  </style>