<template>
    <div class="row">
        
        <div class="container--row">
            <h2 class="title">
                A proximité
            </h2>
            <div class="wrapper--card">
                <CarouselCardRow v-for="(card,index) in items" :infos="card" :key="index"/>
            </div>
          </div>
    </div>
</template>

<script>
import CarouselCardRow from './CarouselCardRow.vue'
export default {
    name: "CarouselRow",
    components : {
        CarouselCardRow,
    },
    props :{
        items: Array
    }
}
</script>

<style lang="scss">

    .row{    
        
        .container--row{

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