<template>
  <div class="home">
    <h1>Historique des commandes</h1>
    <div class="order" v-for="(order, orderIndex) in orders" :key="orderIndex">
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
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name : 'RestaurantHome',
  components: { },
  setup() {
    let accountId = localStorage.getItem('accountId');
    let orders = ref(null);
    onMounted(async () => {
      const response = await axios.get('http://localhost:3005/order/status/ordering/restaurant/'+ accountId);
      console.log(response.data)
      orders.value = response.data.map(order => ({ ...order, taken: false }));
    });

    const takeOrder = (order) => {
      order.taken = true;
    };

    return {
      orders,
      takeOrder
    }
  }
});
</script>

<style scoped>
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
