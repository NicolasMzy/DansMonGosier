<template>
    <div class="row">
        
        <div class="delivery--row">
            <h2 class="title">
                A proximité
            </h2>
            <div class="wrapper--card" >
                <ProximityResCardRow v-for="(card,index) in categories" :info_restaurant="card" :key="index" @click="$emit('restaurant-clicked', card)"/>
            </div>
          </div>
    </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import ProximityResCardRow from './ProximityResCardRow.vue'
import type {Restaurant} from '../types/Restaurant'


export default {
  name: "DeliveryRow",
  components: {
    ProximityResCardRow,
  },
  props: {
    categories: {
      type: Array as PropType<Restaurant[]>,
      required: true,
    },
  },
  setup() {
    
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