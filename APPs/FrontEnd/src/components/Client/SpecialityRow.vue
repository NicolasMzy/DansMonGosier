<template>
  <div class="row">
    <div class="speciality--row">
        <div class="wrapper--card">
            <SpecialityCard v-for="(card,index) in speciality " :info_speciality="card" :key="index"/>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import SpecialityCard from './SpecialityCard.vue'

interface Speciality {
  name: string;
  img: string;
}

export default {
  name: 'SpecialityRow',
  components: {
    SpecialityCard,
  },
  setup() {
    const speciality = ref<Speciality[]>([
      {
        name : 'Burger',
        img : '/src/assets/Speciality/burger.jpg'
      },
      {
        name : 'Pizza',
        img : '/src/assets/Speciality/pizza.jpeg'
      },
      {
        name : 'Ramen',
        img : '/src/assets/Speciality/ramen.png'
      },
      {
        name : 'Sushi',
        img : '/src/assets/Speciality/sushi.jpeg'
      },
      {
        name : 'Tacos',
        img : '/src/assets/Speciality/tacos.jpeg'
      },
    ]);
      
    //return
    return{
      speciality,   
    }
  }
}
</script>

<!-- <script lang="ts">
import SpecialityCard from './SpecialityCard.vue'

export default {
    name: 'SpecialityRow',
    components : {
        SpecialityCard,
    },
    setup() {
        
        const speciality = [
            {
                name : 'Burger',
                img : '/src/assets/Speciality/burger.jpg'
            },
            
            {
                name : 'Pizza',
                img : '/src/assets/Speciality/pizza.jpeg'
            },
            
            {
                name : 'Ramen',
                img : '/src/assets/Speciality/ramen.png'
            },

            {
                name : 'Sushi',
                img : '/src/assets/Speciality/sushi.jpeg'
            },

            {
                name : 'Tacos',
                img : '/src/assets/Speciality/tacos.jpeg'
            },
        ]
        
        //return
        return{
            speciality,   
        }
    }
}
</script> -->

<style lang="scss">
    
    .row {
            
        .wrapper--card::-webkit-scrollbar {
            display: none;
        }
        
        .wrapper--card {
            overflow-x: auto;
            display: flex;
        }
    }
        
</style>