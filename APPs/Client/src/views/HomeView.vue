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
    <button @click="showCard = !showCard">Toggle Card</button>
    <transition name="ease">
      <div class="card" v-if="showCard">
        <button @click="showCard = false" class="close-button"></button>
        <img class="image" :src="selectedRestaurant ? selectedRestaurant.image : ''">
        <h1>{{ selectedRestaurant ? selectedRestaurant.restaurantName : '' }}</h1>
        <div class="menu" v-for="(menu, i) in selectedRestaurant.menu" :key="i">
          {{menu.label}}
          <button @click="addToBasket(menu)">Add to Basket</button>
          <button @click="incrementQuantity(menu)">Increase</button>
          {{ menu.quantity }}
          <button @click="decrementQuantity(menu)">Decrease</button>
          <button @click="removeFromBasket(menu.label)">Remove from basket</button>
        </div>
        <div class="items" v-for="(item, i) in selectedRestaurant.items" :key="i">
          {{item.label}}
          <!-- <button @click="addToBasket(item)">Add to Basket</button> -->
        </div>
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
import axios from 'axios'
import vSelect from 'vue-select';
import ProximityResRow from '../components/ProximityResRow.vue'
import DeliveryColumn from '../components/RestaurantsColumn.vue'
import SpecialityRow from '../components/SpecialityRow.vue'
import BDD from '../BDDex'
import type {Restaurant} from "../types/Restaurant"
import type {Menu} from "../types/Menu"
// import HeaderDMG from '../../components/Header.vue'
// import FooterNavbar from '../../components/footerNavbar.vue'
import { useStore } from 'vuex';  // If you're using Vuex
import type { State, BasketItem } from '../types/Types';


interface NavItem {
  path: string;
  logo: string;
  name: string;
}

export default {
    components: {
        ProximityResRow,
        DeliveryColumn,
        SpecialityRow,
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
    // setup() {
    //       let data_proximity_row = ref<Restaurant[][]>([]);
    //       let data_delivery_column = ref<Restaurant[]>([]);

    //         const makeDataDelivery = async () => {
    //           let restaurants: Restaurant[] = [];
    //           let new_proxRestaurant: Restaurant;
    //           // let new_popRestaurant: Restaurant;

    //           try {

    //               // const responseProx = await axios.get('http://localhost:3013/restaurants/6491e3932704d2658d660cd1');
    //               // let proximityRestaurants = responseProx.data; // Assuming the data is an array of restaurants
    //               // console.log(proximityRestaurants);

    //               // for (let restaurant of proximityRestaurants) {
    //               //     new_proxRestaurant = {
    //               //         restaurantName: restaurant.name,
    //               //         note: restaurant.mean_rate,
    //               //         image: restaurant.photo,
    //               //         drive_time: '',
    //               //     };
    //               // }
    //               for (const delivery of BDD){
    //                 new_proxRestaurant = {
    //                         restaurantName: delivery.restaurantName,
    //                         note: delivery.note,
    //                         image: delivery.image,
    //                         drive_time: delivery.drive_time,
    //                         // price: delivery.price
    //               }
    //             }

    //               // const responsePop = await axios.get('http://localhost:3013/restaurants/6491e3932704d2658d660cd1');
    //               // let popularRestaurants = responsePop.data; // Assuming the data is an array of restaurants
    //               // console.log(popularRestaurants);

    //               for (const restaurant of BDD){
    //                 let new_popRestaurant: Restaurant = {
    //                         restaurantName: restaurant.restaurantName,
    //                         note: restaurant.note,
    //                         image: restaurant.image,
    //                         drive_time: restaurant.drive_time,
    //                         // price: delivery.price
    //               }
    //             }

    //               //     for (let popRestaurant of popularRestaurants) {
    //               //     new_popRestaurant = {
    //               //         restaurantName: popRestaurant.name,
    //               //         note: popRestaurant.mean_rate,
    //               //         image: popRestaurant.photo,
    //               //         drive_time: '',
    //               //     };
    //               // }

    //               if (data_delivery_column.value.length < 2){
    //                   data_delivery_column.value.push(new_popRestaurant);
    //               }

    //               if (restaurants.length === 9) {
    //                   restaurants.push(new_proxRestaurant);
    //                   data_proximity_row.value.push(restaurants);
    //                   restaurants = [];
    //               } else {
    //                   restaurants.push(new_proxRestaurant);
    //                   data_proximity_row.value.push(restaurants);
    //               }
    //               console.log(data_proximity_row)
    //           } catch (error) {
    //               console.error(error);
    //           }

    //           }

    //     onMounted(makeDataDelivery);

    //     return {
    //       data_proximity_row,
    //       data_delivery_column,
    //     }
    // }
    setup() {

      const store = useStore();
      let data_proximity_row = ref<Restaurant[][]>([]);
      let data_delivery_column = ref<Restaurant[]>([]);

      const basket = computed(() => store.state.basket);
      const items = computed(() => store.state.items); // Assuming you also have an 'items' state that holds all available items

      function addToBasket(item: BasketItem) {
        store.commit('addToBasket', item);
      }

      const removeFromBasket = (label: string) => {
        store.commit('removeFromBasket', label);
      };

      const incrementQuantity = (item: BasketItem) => {
        store.commit('incrementQuantity', item);
      };

      const decrementQuantity = (item: BasketItem) => {
        store.commit('decrementQuantity', item);
      };
    

    const makeDataDelivery = async () => {
        let restaurants: Restaurant[] = [];
        try {
            for (const item of BDD){
                let new_restaurant: Restaurant = {
                    restaurantName: item.restaurantName,
                    note: item.note,
                    image: item.image,
                    drive_time: item.drive_time,
                    price: '',
                    menu: Array.isArray(item.menu) ? item.menu : [],
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

            console.log(data_proximity_row)
        } catch (error) {
            console.error(error);
        }
    }

    onMounted(makeDataDelivery);

    return {
        data_proximity_row,
        data_delivery_column,
        basket,
        items,
        incrementQuantity,
        decrementQuantity,
        removeFromBasket,
        addToBasket,
    }
}
}
</script>

<style scoped>

.addressSelect{
  margin-top: 50px;
}
.card {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 95%;
  background: white;
  border-radius: 25px 25px 0 0;
  box-sizing: border-box;
  padding: 20px;
  z-index: 9999;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
}
.close-button {
  position: absolute;
  left: 10px;
  top: 10px;
  background: #f44336;
  color: white;
  font-size: 100%;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  width: 5%;
  height: 5%;
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
  background: #f44336d9;
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
  height: 20%;
  width: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 25px;
}
</style>