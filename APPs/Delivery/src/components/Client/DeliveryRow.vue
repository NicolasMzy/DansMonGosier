<template>
    <div class="row">
        
        <div class="delivery--row">
            <h2 class="title">
                A proximité
            </h2>
            <div class="wrapper--card">
                <DeliveryCardRow v-for="(card,index) in three_deliveries" :info_delivery="card" :key="index"/>
            </div>
          </div>
    </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import DeliveryCardRow from './DeliveryCardRow.vue'

interface Delivery {
        restaurantName: string
        note: string
        image: string
        drive_time: string
        clientName: string
        price: string
}

export default {
  name: "DeliveryRow",
  components: {
    DeliveryCardRow,
  },
  props: {
    three_deliveries: {
      type: Array as PropType<Delivery[]>,
      required: true,
    },
  }
}
</script>

<!-- <script>
import DeliveryCardRow from './DeliveryCardRow.vue'
export default {
    name: "DeliveryRow",
    components : {
        DeliveryCardRow,
    },
    props :{
        three_deliveries: Array
    }
}
</script> -->

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