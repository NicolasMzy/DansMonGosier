<template>
  <div class="home">
    
    <nav>
      <ul class="navbar">
        <li @click="tab = 'takencommand'">Commande prise</li>
        <li @click="tab = 'command'">Commandes</li>
      </ul>
    </nav>

    <div v-if="tab === 'takencommand'">
      <div class="container">
        <h1>Accepted Order</h1>
      </div>
      <ul>
        <li class="order" v-for="(order,i) in ordersAccepted" :key="i">
          {{ order.status }}
          {{ order.id_restaurant }}
          <div class="order-header">
          <p class="order-status">{{ order.status }}</p>
          <p class="order-date">{{ order.date.start }}</p>
        </div>
        
        <div class="menu" v-for="(menu, menuIndex) in order.menus" :key="`menu-${menuIndex}`">
          <img class="menu-image" :src="menu.menu.photo" alt="Menu Photo">
          <div class="menu-description">
            <h3>{{ menu.menu.label }} x ({{ menu.quantity }})</h3>
            <p>{{ menu.menu.description }}</p>
            <p>Price: {{ menu.menu.price }} €</p>
          </div>
  
          <div class="item" v-for="(item, itemIndex) in menu.menu.items" :key="`item-${itemIndex}`">
            <img class="item-image" :src="item.item.photo" alt="Item Photo">
            <h4>{{ item.item.label }} x ({{ item.quantity }})</h4>
            <p>{{ item.item.description }}</p>
            <p>Price: {{ item.item.price }} €</p>
          </div>
        </div>
        </li>
      </ul>  
    </div>
    <div v-if="tab === 'command'">
      <div class="container">
        <h1>Order List</h1>
      </div>
    <ul>
      <li class="order" v-for="(order, i) in orders" :key="i">
        {{ order.status }}
        {{ order.id_restaurant }}
        <div class="order-header">
        <p class="order-status">{{ order.status }}</p>
        <p class="order-date">{{ order.date.start }}</p>
      </div>
      
      <div class="menu" v-for="(menu, menuIndex) in order.menus" :key="`menu-${menuIndex}`">
        <img class="menu-image" :src="menu.menu.photo" alt="Menu Photo">
        <div class="menu-description">
          <h3>{{ menu.menu.label }} x ({{ menu.quantity }})</h3>
          <p>{{ menu.menu.description }}</p>
          <p>Price: {{ menu.menu.price }} €</p>
        </div>

        <div class="item" v-for="(item, itemIndex) in menu.menu.items" :key="`item-${itemIndex}`">
          <img class="item-image" :src="item.item.photo" alt="Item Photo">
          <h4>{{ item.item.label }} x ({{ item.quantity }})</h4>
          <p>{{ item.item.description }}</p>
          <p>Price: {{ item.item.price }} €</p>
        </div>
      </div>
      <div class="button-container">
        <button class="accept" @click="accept(order._id)">Accept</button>
        <button class="refuse" @click="refuse(order._id)">Refuse</button>
      </div>
      </li>
    </ul>

    </div>
    
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue'
import Navbar from '@/components/componentsGlobaux/navbar.vue'


export default {
  data(){
      return {
        tab: 'takencommand',
      }
  },
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
    location.reload();
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


<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  list-style: none;
  max-width: 100%;
  margin: auto;
  font-size: 1.2em;
  padding: 1em;
  gap: 5vh;
}

.navbar li {
  cursor: pointer;
  flex: 1;
  text-align: center;
  height: 50px;
  border-bottom: 1.5mm ridge brown;
  align-items: center;
  justify-content: center;
  display: flex;
}

.navbar li:hover {
  color: brown;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.order {
  background-color: #f2f2f2;
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.button-container{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.accept{
  background-color: brown;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  color: #f2f2f2;
  width: 100px;
  height: 30px;
  border-radius: 20px;
}

.refuse{
  margin-top: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border: none;
  width: 100px;
  height: 30px;
  border-radius: 20px;
}

.order-header {
  display: flex;
  justify-content: space-between;
}

.menu, .item {
  margin-top: 20px;
}

.menu-image, .item-image {
  height: 100px;
}

.container{
  display: flex;
  justify-content: center;
}

.order-btn {
  background-color: brown;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 160px;
  border-radius: 20px;
}

.order-btn.order-taken {
  background-color: grey;
}
</style>
