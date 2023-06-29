<template>
  <div class="home">
    <Header/>
    <SpecialityRow/>
    <ProximityRow v-for="(data,i) in data_proximity_row" :key="i" :categories="data" @restaurant-clicked="goToRestaurant" />
  </div>
</template>

<script lang="ts">
//Vue
import {ref, onMounted} from 'vue'
import { useRouter } from 'vue-router'

//Components
import Header from '@/components/componentsGlobaux/Header.vue'
import SpecialityRow from '@/components/SpecialityRow.vue';
import ProximityRow from '@/components/ProximityResRow.vue'

//BDD
import axios from 'axios'
import type {Restaurant} from "../types/Restaurant"
import type {Address} from "../types/Address"

export default {
name:'ClientHome',
components:{
    Header,
    ProximityRow,
    SpecialityRow,
},
setup() {
    const router = useRouter()

    let data_proximity_row = ref<Restaurant[][]>([]);
    let data_delivery_column = ref<Restaurant[]>([]);
    let addresses = ref<Address[]>([]);
    
    async function getAddress(id: string){
        let addressResponse = await axios.get('http://localhost:3004/address-by-credentials/'+ id);
        return addressResponse.data;
    }
    
    const makeDataDelivery = async () => {
        
        let restaurants: Restaurant[] = [];
        try {
            const response = await axios.get('http://localhost:3006/restaurant-topRated/');

            let restaurantsTop = response.data; // Assuming the data is an array of restaurants
            console.log(restaurantsTop)
            for (let item of restaurantsTop.restaurants){
                
                let address = await getAddress(item.id_credentials);  
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
                    restaurants = [];
                }

            }

            if (restaurants.length > 0) {
                data_proximity_row.value.push(restaurants);
            }

        } 
        
        catch (error) {
            console.error(error);
        }
    }
        function goToRestaurant(restaurant) {
            router.push({ name: 'RestaurantView', params: { id : restaurant.id_credentials } })
        }

        onMounted(makeDataDelivery);

        return {
            addresses,
            data_proximity_row,
            data_delivery_column,
            goToRestaurant,
        }
    }
}
</script>

<style lang="scss" scoped>
    .home {
        margin: 8px;
    }
</style>