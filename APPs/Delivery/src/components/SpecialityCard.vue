<template>
    <div class="speciality--card">
        <div :style="changeBackground" class="speciality--image"></div>
        <p>{{info_speciality.name}}</p>
    </div>
</template>
  
<script lang="ts">
  //IMPORT
  import {computed} from 'vue'
  import type {PropType} from 'vue'
  
  interface Speciality {
    img: string;
    name: string;
    // Add other properties here as needed...
  }

  export default {
    name: "SpecialityCard",
    props:{
      info_speciality: {
        type: Object as PropType<Speciality>,
        required: true,
      }
    },
    setup(props) {
      const changeBackground = computed(() => {
        return {
          backgroundImage: `url(${props.info_speciality.img})`,
        }
      });

      //return
      return {
        changeBackground
      }
    }
  }
  </script>

  <!-- <script lang="ts">
  //IMPORT
  import {computed} from 'vue'
  export default {
    name : "SpecialityCard",
    props:{
        info_speciality : Object
    },
    setup(props){
        const changeBackground = computed(() => {
            return {
                backgroundImage:  `url(${props.info_speciality.img})`,
            }
        })
    //return
    return {
        changeBackground
    }
    
    }
  }
  </script> -->
  
  
  <style lang="scss">
  
  .speciality--card {
    width: 100%;
    height: auto;
    display: grid;
    justify-content: center;
    min-width: 150px;

    .speciality--image {
      display: flex;
      justify-content: center;
      background-image: url('../assets/Speciality/burger.jpg');
      background-size: cover;
      background-position: center;
      height: 100px;
      width: 100px;
      border-radius: 10%;
    }
  
    p {
      text-align: center;
      font-weight: 900;
    }
  }
  </style>
 
  
  
  
  
  
  
  