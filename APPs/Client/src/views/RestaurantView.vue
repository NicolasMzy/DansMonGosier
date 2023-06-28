<template>
    <div id="restaurant-view">
      <!-- <div class="restaurant-header">
        <img class="background" :src="restaurant.photo" alt="Image du restaurant" />
        <div class="restaurant-info">
          <h1>{{ restaurant.label }}</h1>
          <p>{{ restaurant.address }}</p>
          <p>Bordeaux</p>
          <div class="rating-container">
            <div class="inner-container">
                <p class="rating">{{ restaurant.mean_rate }}</p>
            <img class="star" src="../assets/star.png"/>
            </div>
          </div>
        </div>
      </div>
      <p class="subtitle">Nos Menus</p>
      <div class="menu-items">
        <div v-for="menu in restaurant.menus" :key="menu.id" class="menu-item">
          <img class="image" :src="menu.image" alt="Image du menu" />
          <h2>{{ menu.label }}</h2>
          <p>{{ menu.description }}</p>
          <p>Prix: {{ menu.price }} €</p>
          <p>Quantité: {{ menu.quantity }}</p>
          <div class="quantity-control">
            <button @click="decreaseQuantity(menu)">-</button>
            <button class="plus" @click="increaseQuantity(menu)">+</button>
          </div>
        </div>
      </div>
      <p class="subtitle">A la Carte</p>
      <div class="items">
        <div v-for="item in restaurant.items" :key="item.id" class="item">
          <img class="image" :src="item.image" alt="Image de l'item" />
          <h2>{{ item.label }}</h2>
          <p>{{ item.description }}</p>
          <p>Prix: {{ item.price }} €</p>
          <p>Quantité: {{ item.quantity }}</p>
          <div class="quantity-control">
            <button @click="decreaseQuantity(item)">-</button>
            <button class="plus" @click="increaseQuantity(item)">+</button>
          </div>
        </div>
      </div> -->
    </div>
</template>
  
<script lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import axios from 'axios';

export default {
  name: 'RestaurantView',
  data() {
    return {
      
    };
  },
  methods: {
    decreaseQuantity(item) {
      if (item.quantity > 0) item.quantity--;
    },
    increaseQuantity(item) {
      item.quantity++;
    },
  },
  setup(){
    const route = useRoute()
    const restaurant = ref(null)
    
    onMounted(async () => {
      const id = route.params.id
      const resIdResponse = await axios.get('http://localhost:3013/restaurant/IDcredentials/' + id);
      let resId = resIdResponse.data._id;
      console.log(resIdResponse.data)
      const response = await axios.get(`http://localhost:3013/restaurants/${resId}`)
      restaurant.value = response.data
      console.log(restaurant.value)
    })

    return {
      restaurant,
    }
  }
};
</script>
  
  <style scoped>

  .background{
    background-position: center;
    height: 100%;
    width: 100%;
  }
  
  .restaurant-header {
    position: relative;
  }
  
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  
  .restaurant-info {
    /* Styles pour le bloc d'information du restaurant */
    padding: 1em;
    background-color: #fff;
    margin-bottom: 1em;
    text-align: center;
  }

  .rating-container{
    display: flex;
    justify-content: center;
  }
  .inner-container{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 70px;
    height: 35px;
    border-radius: 10px;
    background-color: brown;
    color: #fff;
  }
  
  .star{
    height: 25px;
  }
  .menu-items, .items {
    /* Styles pour le bloc des menus et des items */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1em;
    padding: 1em;
  }
  
  .menu-item, .item {
    /* Styles pour un seul menu ou item */
    padding: 1em;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .quantity-control {
    /* Styles pour les boutons + et - */
    display: flex;
    justify-content: center;
    gap: 1em;
  }
  
  .quantity-control button {
    border: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    padding: 0.5em 1em;
    font-size: 1em;
    cursor: pointer;
  }

  .subtitle{
    margin-top: 100px;
    margin-left: 30px;
    font-size: 1.6em;
    font-weight: 600;
  }

  .plus{
    background-color:  brown;
    color: #fff;
}
  .image{
    height: 150px;
    width: 150px;
    object-fit: contain;
  }
  
  </style>