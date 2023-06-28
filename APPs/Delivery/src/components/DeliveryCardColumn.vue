<template>
    <div class="delivery--card-C">
        <div :style="changeBackground" class="delivery--image-C"></div>
        <div class="delivery--information-C">
            <div class="top-C">
                <p class="clientname-C">{{info_delivery.clientName}}</p>     
            </div>
            <div class="middle-C">
                <p class="name-C">{{info_delivery.restaurantName}}</p>
            </div>
            <div class="bottom-C">
                <div class="note-C">
                    <img class="star-C" src="../assets/star.png"/>
                    <p class="note-chiffre-C">{{info_delivery.note}}</p>
                </div>
                <img class="point-C" src="../assets/point.png"/>
                <div class="estimationtime-C">
                    <img class="estimationtime--img" src="../assets/time.png"/>
                    <p class="estimationtime--textC">{{info_delivery.drive_time}}</p>
                </div>
                <img class="point-C" src="../assets/point.png"/>
                <div class="price-C">
                    <img class="price-imgC" src="../assets/delivery.png"/>
                    <p class="price-textC">{{info_delivery.price}}</p>
                </div>
            </div>
        </div>
</div>
  </template>
  
  <script lang="ts">
  //IMPORT
  import {computed} from 'vue'
  import type {PropType} from 'vue'
  
  interface Delivery {
    restaurantName: string
    note: string
    image: string
    drive_time: string
    clientName: string
    price: string
  }
  
  export default {
    name: "DeliveryCard",
    props:{
      info_delivery: {
        type: Object as PropType<Delivery>,
        required: true,
      }
    },
    setup(props) {
      const changeBackground = computed(() => {
        return {
          backgroundImage: `url(${props.info_delivery.image})`,
        }
      });
  
      //return
      return {
        changeBackground
      }
    }
  }
  </script>
  
  <style lang="scss">
  
  .delivery--card-C{
        margin : 10px 5px;
        margin-bottom: 2%;
        min-width: 220px;
        height:30vh ; 
        p {
            margin: 0px;
        }

        .delivery--image-C {
            background-image: url('../assets/bk.jpeg');
            min-height: 65%;
            background-size: cover;
            background-position: center;
            border-radius:10px;
        }
        .delivery--information-C{
           margin: 0px 5px;
            .top-C{
                margin: 5px 0px; 
                display: flex;
                align-items: center;
                justify-content: space-between;

                .clientname-C{
                    font-size: 3vh;
                    font-weight: 900;
                }
            }

            .middle-C{
                .name-C{
                    font-size: 2vh;
                    font-weight: 900;
                    color: gray;
                }
            }
            .bottom-C{
                
                margin: 10px 0px; 
                display: flex;
                align-items: center;
                justify-content: space-start;
                gap: 4%;
                
                .estimationtime-C {

                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    height:22px ;
                    width: 90px;

                    .estimationtime--textC{
                        font-size: 0.8em;
                        font-weight: 900; 
                     }
    
                    .estimationtime--img {
                        background-size: cover;
                        background-position: center;
                        height: 20px;
                        width: 20px;
                    }
                }
                
                .note-C{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    height:22px ;
                    width: 50px;

                    .star-C{
                        height: 2vh;
                        background-size: cover;
                        background-position: center;
                    }

                    .note-chiffre-C{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        font-size: 0.8em;
                        font-weight: 900;
                    }
                }
                .point-C{
                    height: 5px;
                    background-size: cover;
                    background-position: center;
                }

                .price-C{
                    
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    height:22px ;
                    width: 50px;

                    .price-textC{
                        font-size: 0.8em;
                        font-weight: 900;
                    }

                    .price-imgC{
                        background-size: cover;
                        background-position: center;
                        height: 20px;
                        width: 20px;
                    }
                }
                
            }
            
            
        }

  }
  </style>