<template>
  <div class="home">
    <h1>Order List</h1>
    <ul>
      <li v-for="order in orders" :key="order.id_restaurant">
        {{ order.label }} - {{ order.price }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import type {Order} from '../types/Order'
import { onMounted } from 'vue'

export default {
  setup(){

  let orders: Order[] = [];

  onMounted(async () => {
      try {
        const response = await axios.get('/api/orders');
        orders = response.data;
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
  });

  return{
    orders,
  }
}
 
}


</script>
