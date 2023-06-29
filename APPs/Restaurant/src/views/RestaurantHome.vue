<template>
  <div class="home">
    <h1>Accepted Order</h1>
    <div v-for="(order,i) in ordersAccepted" :key="i">
        {{ order.status }}
        {{ order.id_restaurant }}
    </div>
    <h1>Order List</h1>
    <ul>
      <li v-for="(order, i) in orders" :key="i">
        {{ order.status }}
        {{ order.id_restaurant }}
        <button @click="accept(order._id)">Accept</button>
        <button @click="refuse(order._id)">Refuse</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue'
import Navbar from '@/components/componentsGlobaux/navbar.vue'


export default {
  setup(){

  let orders = ref(null);
  let ordersAccepted = ref(null);
  const route = useRoute();
  const editOrderAccept = ref({
    payment: 'paid',
    status: 'accepted_order',
  });

  const editOrderRefuse = ref({
    payment: 'paid',
    status: 'refused_order'
  });

  onMounted(async () => {
    // AnotherComponent.vue
    let accountId = localStorage.getItem('accountId');
    console.log(accountId)
      try {
        
        const response = await axios.get('http://localhost:3005/order/status/ordering/restaurant/'+ accountId);
        console.log(response.data)
        orders.value = response.data;

        const responseAccepted = await axios.get('http://localhost:3005/order/status/accepted_order/restaurant/'+ accountId);
        ordersAccepted.value = responseAccepted.data;
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
  });

  const accept = async (orderId: string) => {
    console.log(orderId)
    console.log(editOrderAccept.value)
    const url = 'http://localhost:3005/order/'+ orderId;

    const response = await axios.put(url, editOrderAccept.value, {
        headers: {
          'Access-Control-Allow-Origin ': '*'
        }
      })
    console.log(response.data)
    // location.reload();
  }
  const refuse = async (orderId: string) => {
    const response = await axios.put('http://localhost:3005/order/'+ orderId, editOrderRefuse)
    location.reload();
  }

  return{
    orders,
    accept,
    refuse,
    ordersAccepted
  }
}
 
}


</script>
