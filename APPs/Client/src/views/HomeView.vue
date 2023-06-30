<template>
<link href="https://unpkg.com/vue-select@latest/dist/vue-select.css" rel="stylesheet">
  <div class="home">
    <a @click="showCardAddress = !showCardAddress" v-if="info">{{ info }}</a>
    <div>
      <!-- <Navbar class="navbar--home" :items="navbarItems" /> -->
    </div>
    <div>
      <ProximityResRow v-for="(data,i) in data_proximity_row" :key="i" :categories="data" @restaurant-clicked="showRestaurantCard" />
    </div>
    <div>
      <DeliveryColumn :deliveries="data_delivery_column"/>
    </div>
  </div>
  <div>
  <transition name="fade">
      <div class="popup" v-if="showPopup">
        <p>{{ popupMessage }}</p>
        <button @click="undoLastAction">Undo</button>
        <button @click="showPopup = false">Close</button>
      </div>
    </transition>
  </div>
  <div>
  <transition name="fade">
      <div class="popup" v-if="showPopup">
        <p>{{ popupMessage }}</p>
        <button @click="undoLastAction">Undo</button>
        <button @click="showPopup = false">Close</button>
      </div>
    </transition>
  </div>
  <div>
    <transition name="ease">
      <div class="card-container">
        <div class="card" v-if="showCard">
          <button @click="showCard = false" class="close-button"></button>
          <img class="image" :src="selectedRestaurant?.photo">
          <p class="title">{{ selectedRestaurant?.name }}</p>
          <p class="address">{{ selectedRestaurant?.address.line_1 }}, {{ selectedRestaurant?.address.city }}</p>
          <div class="rate">
            <img class="star" src="../assets/star.png"/>
            <p class="rating">{{selectedRestaurant?.mean_rate}}</p>
          </div>
          <h2>Menus </h2>
          <div class="menu" v-for="(menu, i) in selectedRestaurant?.menu" :key="i">
            <img class="image-items" src="../assets/bigmac.png"/>
            <div class="container">
              {{menu.label}}
              <p class="description">{{menu.description}}</p>
            <div class="informations">
              <p class="price"> 7,50€</p>
              <div class="buttons">
                <button class="button" @click="incrementQuantity(menu)">+</button>
                <button class="button" @click="decrementQuantity(menu)">-</button>
              </div>
            </div>
          </div>
        </div>
        <h2>A l'unité</h2>
          <div class="items" v-for="(item, i) in selectedRestaurant?.item" :key="i">
            <img class="image-items" src="../assets/bigmac.png"/>
            <div class="container">
              {{item.label}}
              <p class="description">{{item.description}}</p>
            <div class="informations">
              <p class="price"> 7,50€</p>
              <div class="buttons">
                <button class="button" @click="incrementQuantity(item)">+</button>
                <button class="button" @click="decrementQuantity(item)">-</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="ease">
      <div class="black-button" v-if="basket.length >= 1">
        <button @click="navigateToRoute('/basket')">Voir panier</button>
      </div>
    </transition>
    <transition name="ease">
      <div class="card" v-if="showCardAddress">
        <!-- Close button -->
        <button @click="showCardAddress = false" class="close-button"></button>
        <vue-select class="addressSelect" v-model="selectedLocation" :options="locations" :reduce="location => location" @search="addLocation" placeholder="Enter or select location"></vue-select>
        <button @click="submit">Submit</button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router';
import type { Ref } from 'vue'
import axios from 'axios'
import vSelect from 'vue-select';
import ProximityResRow from '../components/ProximityResRow.vue'
import DeliveryColumn from '../components/RestaurantsColumn.vue'
// import SpecialityRow from '../components/SpecialityRow.vue'
import BDD from '../BDDex'
import type {Restaurant} from "../types/Restaurant"
import type {Address} from "../types/Address"
import type {Menu} from "../types/Menu"
// import HeaderDMG from '../../components/Header.vue'
// import FooterNavbar from '../../components/footerNavbar.vue'
import { useStore } from 'vuex';  // If you're using Vuex
import type { State, BasketItem } from '../types/Types';

interface Action {
  action: 'add' | 'remove';
  item: BasketItem;
}

export default {
    components: {
        ProximityResRow,
        DeliveryColumn,
        // SpecialityRow,
        // HeaderDMG,
        //Navbar,
        'vue-select': vSelect
    },
    data(){
      return {
        
        selectedRestaurant: null,
        showCard: false,
        showCardAddress: false,
        address: '',
        selectedLocation: '',
        locations: ['Location 1', 'Location 2', 'Location 3'],
        info: 'No locations',
      };
    },
    methods:{
      submit() {
        this.info = `Location: ${this.selectedLocation}`;
        this.showCardAddress = false;
     },
      addLocation(newLocation: string) {
        if (!this.locations.includes(newLocation)) {
          this.locations.push(newLocation);
        }
      },
      showRestaurantCard(restaurant) {
      this.selectedRestaurant = restaurant;
      this.showCard = true;
      },
    },
    setup() {
      const showPopup = ref(false);
      const popupMessage = ref('');


      const displayPopup = (message: string) => {
      popupMessage.value = message;
      showPopup.value = true;

      setTimeout(() => {
          showPopup.value = false;
        }, 3000);  // The popup will disappear after 3 seconds
      }
      //Store for the basket
      const store = useStore();
      const lastAction: Ref<Action | null> = ref(null);
      const basket = computed(() => store.state.basket);
      const items = computed(() => store.state.items);

      let data_proximity_row = ref<Restaurant[][]>([]);
      let data_delivery_column = ref<Restaurant[]>([]);
      let addresses = ref<Address[]>([]);

      const router = useRouter();

      const navigateToRoute = (route: string) => {
        router.push(route);
      };

      //Basket's managment functions
      function addToBasket(item: BasketItem) {
        store.commit('addToBasket', item);
        lastAction.value = { action: 'add', item };
        displayPopup(item.label + ' added to basket')
      }

      function removeFromBasket(item: BasketItem) {
        store.commit('removeFromBasket', item);
        lastAction.value = { action: 'remove', item };
        displayPopup(item.label + ' removed from basket')
      };

      const incrementQuantity = (item: BasketItem) => {
        store.commit('incrementQuantity', item);
        displayPopup(item.label + ' added one to basket')
      };

      const decrementQuantity = (item: BasketItem) => {
        store.commit('decrementQuantity', item);
        displayPopup(item.label + 'removed one from basket');
      };

      const undoLastAction = () => {
      if (lastAction.value) {
        if (lastAction.value.action === 'add') {
          store.commit('removeFromBasket', lastAction.value.item);
        } else if (lastAction.value.action === 'remove') {
          store.commit('addToBasket', lastAction.value.item);
        }
      }

      showPopup.value = false;
    };
      
    async function getAddress(id: string){
      let addressResponse = await axios.get('http://localhost:3004/address/'+ id);
      return addressResponse.data;
    }

    const makeDataDelivery = async () => {
        let restaurants: Restaurant[] = [];
        try {
          const response = await axios.get('http://localhost:3006/restaurants-top-rated');
          let restaurantsTop = response.data; // Assuming the data is an array of restaurants
          console.log(restaurantsTop)
            for (let item of restaurantsTop.restaurants){
              let address = await getAddress(item.id_address);  
                let new_restaurant: Restaurant = {
                    id_credentials: item.id_credentials,
                    schedule: item.schedule,
                    id_address: item.id_address,
                    category: item.category,
                    mean_rate: item.mean_rate,
                    name: item.name,
                    rates: item.rates,
                    photo: item.photo,
                    menu: Array.isArray(item.menus) ? item.menus : [],
                    item: Array.isArray(item.items) ? item.items : [],
                    address: address,
                }
                
             

                
                if (data_delivery_column.value.length < 2){
                    data_delivery_column.value.push(new_restaurant);
                }

                restaurants.push(new_restaurant);

                if (restaurants.length === 10) {
                    data_proximity_row.value.push(restaurants);
                    restaurants = []; // Reset the restaurants array after pushing to data_proximity_row
                }

            }



            // After the loop, check if there are any remaining restaurants not yet pushed to data_proximity_row
            if (restaurants.length > 0) {
                data_proximity_row.value.push(restaurants);
            }

        } catch (error) {
            console.error(error);
        }
    }

    onMounted(makeDataDelivery);

    return {
        addresses,
        data_proximity_row,
        data_delivery_column,
        basket,
        items,
        incrementQuantity,
        decrementQuantity,
        removeFromBasket,
        addToBasket,
        showPopup,
        popupMessage,
        displayPopup,
        undoLastAction,
        navigateToRoute
    }
}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

.home{
  font-family: 'Roboto', sans-serif;
}
::-webkit-scrollbar{
  display: none;
}
.addressSelect{
  margin-top: 50px;
}
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.card {
  z-index: 50;
  position: fixed;
  bottom: 0;
  left: 5%;
  width: 90%;
  height: 95%;
  background: white;
  border-radius: 25px 25px 0 0;
  box-sizing: border-box;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  overflow: auto;
}
.menu, .items {
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  border-bottom: 1px solid #ccc;
}
.title{
  font-size: 1.3em;
  font-weight: 700;
  margin:0;
  margin-left: 10px;
  margin-top: 10px
}

.address{
  margin:0;
  margin-top : 10px;
  margin-left : 15px;
}

.informations {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.description{
  width: 180px;
  font-size: 0.6em;
  color: rgb(129, 129, 129);
  font-weight: 500;
}

button{
  margin-left:10px ;
  border : none;
}

.star{
  height: 10px;
  margin-left: 5px;
}

.rate {
  display: flex;
  margin: 15px 10px;
  align-items: center;
  gap: 10px;
  background-color: #900020;
  border-radius: 5px;
  width:50px ;
  height: 20px;
  color:#fff
}

.button {
  border-radius: 50%;
  height: 25px;
  width: 25px;
  background-color: #900020;
  color: #fff;
}

.image-items{
  height: 20%;
  width: 33%;
}

.close-button {
  position: absolute;
  left: 2%;
  top: 3.5%;
  background: #900020; /* Bordeaux Red */
  color: white;
  font-size: 100%;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2%;
}
.close-button:before {
  content: "\00D7";  /* Unicode for 'X' */
  position: relative;
  top: -1px; /* Adjust as per your requirement */
}
.close-button:hover {
  background: #721730; /* Darker Bordeaux Red */
}
.ease-enter-active, .ease-leave-active {
  transition: all .3s ease;
}
.ease-enter, .ease-leave-to {
  transform: scale(0);
  opacity: 0;
}
.image {
  top: 0;
  left: 0;
  object-fit: cover;
  display: block;
  height: 20%;
  width: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.black-button{
  z-index: 100;
  position: fixed;
  bottom: 20px;
  background: #444;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.5);
}
.popup {
  z-index: 100;
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #444;
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  align-self: center;
}
</style>
