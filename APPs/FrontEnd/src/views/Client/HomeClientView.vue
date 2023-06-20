<template>
    <div class="home">
      <HeaderDMG/>
      <div class="speciality">
          <div class="speciality--title">
              <p>
                  Choisissez votre catégorie !
              </p>
          </div>
          <SpecialityRow/>
      </div>
      <div class="proximity">
          <ProximityResRow v-for="(data,i) in data_proximity_row" :key="i" :categories="data"/>
      </div>
      <div class="popular">
          <div class="popular--navbar">
              <p class="popular--text">Populaire</p>
              <p class="popular--seeall">See All</p>
          </div>
          <!-- <DeliveryColumn :deliveries="data_delivery_column"/> -->
      </div>
      <FooterNavbar/>
    </div>
  </template>

  <script lang="ts">
  import { onMounted, ref } from 'vue'
  import axios from 'axios'
  import BDD from '../../BDDex'
  import ProximityResRow from '../../components/Client/ProximityResRow.vue'
  import DeliveryColumn from '../../components/Client/RestaurantsColumn.vue'
  import SpecialityRow from '../../components/Client/SpecialityRow.vue'
  import HeaderDMG from '../../components/Header.vue'
  import FooterNavbar from '../../components/footerNavbar.vue'

  interface Restaurant {
        restaurantName: string
        note: string
        image: string
        drive_time: string
        //price: string
  }

  export default {
      components: {
          ProximityResRow,
          DeliveryColumn,
          SpecialityRow,
          HeaderDMG,
          FooterNavbar,
      },
      setup() {
            var data_proximity_row = ref<Restaurant[][]>([]);
            var data_delivery_column = ref<Restaurant[]>([]);

              const makeDataDelivery = async () => {
                let restaurants: Restaurant[] = [];
                let new_proxRestaurant: Restaurant;
                let new_popRestaurant: Restaurant;

                try {

                    const responseProx = await axios.get('http://localhost:3013/restaurants/6491e3932704d2658d660cd1');
                    var proximityRestaurants = responseProx.data; // Assuming the data is an array of restaurants
                    console.log(proximityRestaurants);

                    for (var restaurant of proximityRestaurants) {
                        new_proxRestaurant = {
                            restaurantName: restaurant.name,
                            note: restaurant.mean_rate,
                            image: restaurant.photo,
                            drive_time: '',
                        };
                    }

                    // new_proxRestaurant = {
                    //     restaurantName: proximityRestaurants.name,
                    //     note: proximityRestaurants.mean_rate,
                    //     image: 'data:image/png;base64,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',
                    //     drive_time: '',
                    // }

                    // const responsePop = await axios.get('http://localhost:3013/restaurants/6491e3932704d2658d660cd1');
                    // var popularRestaurants = responsePop.data; // Assuming the data is an array of restaurants
                    // console.log(popularRestaurants);
                    //     for (var popRestaurant of popularRestaurants) {
                    //     new_popRestaurant = {
                    //         restaurantName: popRestaurant.name,
                    //         note: popRestaurant.mean_rate,
                    //         image: popRestaurant.photo,
                    //         drive_time: '',
                    //     };
                    // }

                    // if (data_delivery_column.value.length < 2){
                    //     data_delivery_column.value.push(new_popRestaurant);
                    // }

                    if (restaurants.length === 9) {
                        restaurants.push(new_proxRestaurant);
                        data_proximity_row.value.push(restaurants);
                        restaurants = [];
                    } else {
                        restaurants.push(new_proxRestaurant);
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
          }
      },
  }
  </script>


<!-- <script lang="ts">
import { onMounted, ref } from 'vue'
//IMPORT

interface Delivery {
  RestaurantName: string;
  note: number;
  image: string;
  drive_time: number;
  ClientName: string;
  price: number;
}

import BDD from '../BDDex' as Delivery[];
// COMPONENTS
import DeliveryRow from '../components/DeliveryRow.vue';
import DeliveryColumn from '../components/DeliveryColumn.vue'
import SpecialityRow from '../components/SpecialityRow.vue'
import HeaderDMG from '../components/Header.vue';
import FooterNavbar from '../components/footerNavbar.vue'
export default {
    components: {
         DeliveryRow,
         DeliveryColumn,
         SpecialityRow,
         HeaderDMG,
         FooterNavbar,
    },
    setup() {

        class Delivery {
            constructor (RestaurantName, note, image,drive_time,ClientName,price){
                this.RestaurantName = RestaurantName
                this.image = image
                this.note = note
                this.drive_time = drive_time
                this.price = price
                this.ClientName = ClientName
            }
        }

        let data_delivery_row = ref([]);
        let data_delivery_column = ref([]);

        const makeDataDelivery = () => {

            let three_deliveries = [];

            for (const delivery of BDD){
                const new_delivery = new Delivery(delivery.RestaurantName, delivery.note, delivery.image, delivery.drive_time, delivery.ClientName, delivery.price)

                //recommanded
                if (data_delivery_column.value.length < 2){
                    data_delivery_column.value.push(new_delivery);
                }

                //Proximited
                if (three_deliveries.length === 9){
                    three_deliveries.push(new_delivery);
                    data_delivery_row.value.push(three_deliveries);
                    three_deliveries = [];
                } else{
                    three_deliveries.push(new_delivery)
                }
            }
        }
        onMounted(makeDataDelivery);
        //return
        return{
            data_delivery_row,
            data_delivery_column,

        }
    },

}
</script> -->

<style lang="scss">
    .home {

        font-weight: 900;
        .speciality{

            .speciality--title{
                font-size: 1.5em;
            }
        }
        .popular{

            .popular--navbar{
                display: flex;
                justify-content: space-between;
                align-items: center;

                .popular--text {
                    margin-left: 5%;
                    font-size: 1.5em;
                }

                .popular--seeall{
                    margin-right: 5%;
                    color:  #c51212;
                }
            }
        }
    }
</style>
