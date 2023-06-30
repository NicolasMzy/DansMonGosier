<template>
  <div class="home">
    <h1>Order List</h1>
      <div v-for="(item, i) in toShow" :key="i">
        {{ item.restaurant.name }} <br>
        {{ item.order.id_user }} <br>
        {{ item.address.line_1 }} <br>
        <p>Menu(s)</p>
        <div v-for="(menu,i) in item.order.menus" :key="i">

        Label: {{ menu.menu.label }}<br>
        Description:  {{ menu.menu.description }}<br>
        URL Photo: {{ menu.menu.photo }}<br>
        Price: {{ menu.menu.price }}<br>
        <p v-if="menu.menu.items">Items </p>
      
          <!-- Items from menu -->
          <div v-for="(item,i) in menu.menu.items" :key="i">
            Label: {{ item.item.label }}<br>
            Description: {{ item.item.description }}<br>
            URL Photo: {{ item.item.photo }}<br>
            Price: {{ item.item.price }}<br>
            Type: {{ item.item.type }}<br>
            Quantity: {{ item.quantity }}<br>
          </div><br>

        <button @click="accept(item.order._id)">Delivered</button>
        <br>
        <br>
        <br>
      </div>
  </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue'

export default {
  setup(){
    let accountId = localStorage.getItem('accountId');
  let restaurants = ref({
    _id: '',
    category: '',
    id_address: '',
    id_credentials: '',
    items: [],
    mean_rate: 0,
    menus: [],
    name: '',
    photo: '',
    rates: []
  });
  let addresses = ref({
    id_credentials: '',
    type: '',
    line_1: '',
    line_2: '',
    city: '',
    country: '',
    postcode: 0,
    coordinates: [],
    _id: '',
  })
  let orders = ref({
    _id: '',
    address: '',
    date: [],
    deliverer: '',
    id_restaurant: '',
    id_user: '',
    items: [],
    menus: [],
    number: 0,
    payment: '',
    price: 0,
    status: ''
  })
  let toShow = ref([{
    order: orders,
    restaurant: restaurants,
    address: addresses
  }])
  const route = useRoute();
  const editOrderAccept = ref({
    status: 'delivered',
  });
  
  let order: any;
  onMounted(async () => {
    // AnotherComponent.vue
    
    console.log(accountId)
      try {
        toShow.value.shift();
        const response = await axios.get('http://localhost:3005/order/status/delivering/');

        for(order of response.data){
          if(order.deleverer === accountId){
          console.log(order.id_restaurant);
          const response = await axios.get('http://localhost:3005/order/' + order._id);
          if(order.id_restaurant == ''){
            toShow.value.push({
              order: response.data,
              restaurant : {
              _id: '',
              category: '',
              id_address: '',
              id_credentials: '',
              items: [],
              mean_rate: 0,
              menus: [],
              name: '',
              photo: '',
              rates: []
              },
              address: {
                id_credentials: '',
                type: '',
                line_1: '',
                line_2: '',
                city: '',
                country: '',
                postcode: 0,
                coordinates: [],
                _id: '',
              }
            })
          }else {
            const responseRestId = await axios.get('http://localhost:3006/restaurant/IDcredentials/' + order.id_restaurant);
            const responseAddress = await axios.get('http://localhost:3004/address/' + responseRestId.data.id_address);

            toShow.value.push({
              order: response.data,
              restaurant: responseRestId.data,
              address: responseAddress.data
            });
            toShow.value = toShow.value.slice(0);
          }
        }
        }

        console.log(toShow.value)
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
    toShow,
    accept
  }
}
 
}


</script>
