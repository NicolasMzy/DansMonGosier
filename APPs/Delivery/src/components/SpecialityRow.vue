<template>
    <div class="speciality--card">
        <img class="img" src="../assets/Speciality/burger.jpg">
        <p>Burger</p>
    </div>
</template>
  

  
  <script>
  //IMPORT
  import {computed} from 'vue'
  export default {
    name : "SpecialityCard",
    props:{
        info_speciality: Object
    },
    setup(props){
        const changeBackground = computed(() => {
            return {
                backgroundImage:  `url(${props.info_delivery.image})`,
            }
        })
    //return
    return {
        changeBackground
    }
    
    }
  }
  </script>
  
  
  <style lang="scss">
    .speciality--card {
        
        display: flex;
        flex-direction: column;

        .img{
            height: 100px;
            width: 100px;
            border-radius: 50%;
            }

        .p{
            display: flex;
            justify-content: center;
        }

    }

  
  </style>