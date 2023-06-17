<template>
    <div class="row">
        
        <div class="delivery--row">
            <h2 class="title">
                A proximité
            </h2>
            <div class="wrapper--card">
                <delivery-card v-for="(card,index) in three_deliveries" :info_delivery="card" :key="index"/>
            </div>
          </div>
    </div>
</template>

<script>
import DeliveryCard from './DeliveryCard.vue'
export default {
    name: "DeliveryRow",
    components : {
        DeliveryCard,
    },
    props :{
        three_deliveries: Array
    }
}
</script>

<style lang="scss">

    .row{    
        
        .delivery--row{

            .wrapper--card::-webkit-scrollbar {
                display: none;
            }
            
            .wrapper--card{
                display: flex;
                overflow-x: auto;
            }
            .title{
                display: flex;
                align-items: center;
                margin-left: 10px;
            }
        }
    }

    
</style>