<template>
  <div class="home">
    <Header/>
      <SpecialityRow/>
  </div>
</template>

<script  lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
//IMPORT
import BDD from '../../BDDex'

import Header from '../../components/componentsGlobaux/Header.vue';
import SpecialityRow from '@/components/Client/SpecialityRow.vue';


class Restaurant {
  restaurantName: string;
  note: string;
  image: string;
  estimationTime: string;
  restaurantInformation: string;
  price: string;

  constructor(restaurantName: string, note: string, image: string, estimationTime: string, restaurantInformation: string, price: string) {
    this.restaurantName = restaurantName;
    this.note = note;
    this.image = image;
    this.estimationTime = estimationTime;
    this.restaurantInformation = restaurantInformation;
    this.price = price;
  }
}
export default defineComponent({
  name : 'ClientHome',
  components: {
    SpecialityRow,
    Header,
  },
  setup() {
    const restaurantsRow = ref<Restaurant[][]>([]);
    const restaurantsColumn = ref<Restaurant[]>([]);

    const makeDataDelivery = () => {
      let proximity: Restaurant[] = [];

      for (const restaurant of BDD) {
        const newRestaurant = new Restaurant(
          restaurant.RestaurantName,
          restaurant.note,
          restaurant.image,
          restaurant.estimationTime,
          restaurant.ClientName,
          restaurant.price
        );

        // Recommended
        if (restaurantsColumn.value.length < 2) {
          restaurantsColumn.value.push(newRestaurant);
        }

        // Proximity
        if (proximity.length === 9) {
          proximity.push(newRestaurant);
          restaurantsRow.value.push(proximity);
          proximity = [];
        } else {
          proximity.push(newRestaurant);
        }
      }
    };

    onMounted(makeDataDelivery);
    return {
      restaurantsRow,
      restaurantsColumn,
    };
  },
});

</script>

<style>

</style>