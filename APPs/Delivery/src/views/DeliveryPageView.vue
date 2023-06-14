<template>
  <div class="home">
    <DeliveryRow v-for="(data,i) in data_delivery" :key="i" :three_deliveries="data"/>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
//IMPORT
import BDD from '../BDDex'
// COMPONENTS
import DeliveryRow from '../components/DeliveryRow.vue'
export default {
    components: {
         DeliveryRow
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

        let data_delivery = ref([]);

        const makeDataDelivery = () => {
            let three_deliveries = [];
            for (const delivery of BDD){
                const new_delivery = new Delivery(delivery.RestaurantName, delivery.note, delivery.image, delivery.drive_time, delivery.ClientName, delivery.price)   
                
                if (three_deliveries.length === 2){
                    three_deliveries.push(new_delivery);
                    data_delivery.value.push(three_deliveries);
                    three_deliveries = [];
                } else{
                    three_deliveries.push(new_delivery)
                }
            }
        }
        onMounted(makeDataDelivery);
        //return
        return{
            data_delivery,   
        }
    },

}
</script>

<style>

</style>