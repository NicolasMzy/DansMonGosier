<template>
    <div class="row">
        
        <div class="delivery--row">
            <div class="wrapper--cardcolumns">
                <deliveryCardColumn v-for="(card,index) in deliveries" :infos="card" :key="index"/>
            </div>
          </div>
    </div>
</template>

<script>
import DeliveryCardColumn from './DeliveryCardColumn.vue'
export default {
    name: "DeliveryColumn",
    components : {
        DeliveryCardColumn,
    },
    props :{
        deliveries: Array
    }
}
</script>

<style lang="scss">

    .row{    
        
        .delivery--row{

            
            .wrapper--card::-webkit-scrollbar {
                display: none;
            }
            
            .wrapper--cardcolumns{
                display: flex;
                flex-direction: column;
            }
            .title{
                display: flex;
                align-items: center;
                margin-left: 10px;
            }
        }
    }

    
</style>