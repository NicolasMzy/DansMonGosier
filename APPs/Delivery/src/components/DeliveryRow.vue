<template>
    <div class="row">
        
        <div class="delivery--row">
            <h2 class="title">
                A proximité
            </h2>
            <SsrCarousel>
                <div class="wrapper--card">
                    <delivery-card v-for="(card,index) in three_deliveries" :info_delivery="card" :key="index"/>
                </div>
            </SsrCarousel>
          </div>
    </div>
</template>

<script>
import DeliveryCard from './DeliveryCard.vue'
import SsrCarousel from 'vue-ssr-carousel'
import ssrCarouselCss from 'vue-ssr-carousel/index.css'

export default {
    name: "DeliveryRow",
    components : {
        DeliveryCard,
        SsrCarousel,
    },
    props :{
        three_deliveries: Array
    },
    buildModules: [ 'vue-ssr-carousel/nuxt' ]

}
</script>

<style lang="scss">

    .row{    
        display: flex;
        justify-content: center;
        .delivery--row{
            .wrapper--card{
                display: flex;
                justify-content: flex-start;
            }
            .title{
                display: flex;
                align-items: center;
            }
        }
    }
</style>