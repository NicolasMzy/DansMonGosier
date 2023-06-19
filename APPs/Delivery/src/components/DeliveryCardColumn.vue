<template>
    <div class="delivery--card-C">
        <div :style="changeBackground" class="delivery--image-C"></div>
        <div class="delivery--information-C">
            <div class="top-C">
                <p class="clientname-C">{{info_delivery.ClientName}}</p>     
            </div>
            <div class="middle-C">
                <p class="name-C">{{info_delivery.RestaurantName}}</p>
            </div>
            <div class="bottom-C">
                <div class="note-C">
                    <img class="star-C" src="../assets/star.png"/>
                    <p class="note-chiffre-C">{{info_delivery.note}}</p>
                </div>
                <img class="point-C" src="../assets/point.png"/>
                <div class="estimaationtime-">
                    <img class="estimationtime--img" src="../assets/point.png"/>
                    <p class="estimationtime--textC">{{info_delivery.drive_time}}</p>
                </div>
                <img class="point-C" src="../assets/point.png"/>
                <p class="price-C">{{info_delivery.price}}</p>
            </div>
        </div>
</div>
  </template>
  

  
  <script>
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
            border-radius:4%;
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
                
                .estimationtime--textC{
                    font-size: 0.8em;
                    font-weight: 900; 
                 }

                .note-C{
                    border-radius: 8%; 
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
                    font-size: 0.8em;
                    font-weight: 900;
                }
                
            }
            
            
        }

  }
  </style>