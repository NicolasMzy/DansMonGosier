<template>
  <div class="home">
    <h1>Order List</h1>
    <ul>
      <li v-for="order in orders" :key="order.id_restaurant">
        {{ order.status }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue'

export default {
  setup(){

  let orders = ref(null);
  const route = useRoute();

  onMounted(async () => {
    // AnotherComponent.vue
    let accountId = localStorage.getItem('accountId');
    console.log(accountId)
      try {
        const response = await axios.get('http://localhost:3012/orders/status/ordering/restaurant/'+ route.params.orderId);
        orders.value = response.data;
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
