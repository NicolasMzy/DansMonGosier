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
        <DeliveryRow v-for="(data,i) in data_delivery_row" :key="i" :three_deliveries="data"/>
    </div>
    <div class="popular">
        <div class="popular--navbar">
            <p class="popular--text">Populaire</p>
            <p class="popular--seeall">See All</p>
        </div>
        <DeliveryColumn  :deliveries="data_delivery_column"/>
    </div>
    <FooterNavbar/>
</div>
</template>

<script>
import { onMounted, ref } from 'vue'
//IMPORT
import BDD from '../BDDex'
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
</script>

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
