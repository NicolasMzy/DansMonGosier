<template>
    <div class="delivery--card">
        <div :style="changeBackground" class="delivery--image"></div>
        <div class="delivery--information">
            <div class="top">
                <p class="name">{{info_restaurant.restaurantName}}</p>
            </div>
            <div class="bottom">
                <div class="note">
                    <img class="star" src="../../assets/star.png"/>
                    <p class="note-chiffre">{{info_restaurant.note}}</p>
                </div>
                <img class="point" src="../../assets/point.png"/>
                <p class="estimationtime">{{info_restaurant.drive_time}}</p>
                <img class="point" src="../../assets/point.png"/>
                <!-- <p class="price">{{info_restaurant.price}}</p> -->
            </div>
        </div>
</div>
  </template>
  
<script lang="ts">
  //IMPORT
  import {computed} from 'vue'
  import type {PropType} from 'vue'
  import type {Restaurant} from '../../types/Restaurant'
  
  export default {
    name: "ProximityResCard",
    props:{
      info_restaurant: {
        type: Object as PropType<Restaurant>,
        required: true,
      }
    },
    setup(props) {
      const changeBackground = computed(() => {
        return {
          backgroundImage: `url(${props.info_restaurant.image})`,
        }
      });
  
      //return
      return {
        changeBackground
      }
    }
  }
  </script>
  
  <!-- <script>
  //IMPORT
  import {computed} from 'vue'
  export default {
    name : "DeliveryCard",
    props:{
        info_delivery: Object
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
  </script> -->
  
  
  <style lang="scss">
  .delivery--card{
        margin : 10px 5px;
        margin-bottom: 2%;
        min-width: 220px;
        height:30vh ; 
        p {
            margin: 0px;
        }
        .delivery--image {
            background-image: url('../assets/bk.jpeg');
            min-height: 65%;
            background-size: cover;
            background-position: center;
            border-radius:4%;
        }
        .delivery--information{
           margin: 0px 5px;
            .top{
                margin: 5px 0px; 
                display: flex;
                align-items: center;
                justify-content: space-between;

                .clientname{
                    font-size: 3vh;
                    font-weight: 900;
                }
            }

            .middle{
                .name{
                    font-size: 2vh;
                    font-weight: 900;
                    color: gray;
                }
            }
            .bottom{
                
                margin: 10px 0px; 
                display: flex;
                align-items: center;
                justify-content: space-start;
                gap: 4%;
                
                .estimationtime{
                    font-size: 0.8em;
                    font-weight: 900; 
                 }

                .note{
                    background-color: #b60e0e;
                    color:white;
                    border-radius: 8%; 
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    height:22px ;
                    width: 50px;

                    .star{
                        height: 2vh;
                        background-size: cover;
                        background-position: center;
                    }

                    .note-chiffre{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 0.8em;
                        font-weight: 900;
                    }
                }
                .point{
                    height: 5px;
                    background-size: cover;
                    background-position: center;
                }

                .price{
                    font-size: 0.8em;
                    font-weight: 900;
                }
                
            }
            
            
        }

  }
  </style>