<template>
    <div class="home">
      <Header/>
      <div class="speciality">
          <div class="speciality--title">
              <p>
                  Choisissez votre catégorie !
              </p>
          </div>
          <SpecialityRow/>
      </div>
      <div class="proximity">
          <DeliveryRow v-for="(data,i) in data_delivery_row" :key="i" :three_deliveries="data"/>
      </div>
      <div class="popular">
          <div class="popular--navbar">
              <p class="popular--text">Populaire</p>
              <p class="popular--seeall">See All</p>
          </div>
      </div>
  </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  import BDD from '../../BDDex'
  import DeliveryRow from '../components/DeliveryRow.vue';
  import Header from '@/components/componentsGlobaux/Header.vue'

  interface DeliveryInterface {
      RestaurantName: string,
      note: number,
      image: string,
      drive_time: string,
      ClientName: string,
      price: number
  }
  
  function makeDelivery(obj: DeliveryInterface): DeliveryInterface {
      return {
          RestaurantName: obj.RestaurantName,
          note: obj.note,
          image: obj.image,
          drive_time: obj.drive_time,
          ClientName: obj.ClientName,
          price: obj.price,
      };
  }
  
  export default defineComponent({
      components: {
          DeliveryRow,
          Header,
      },
      setup() {
  
          let data_delivery_row = ref<Array<DeliveryInterface[]>>([]);
          let data_delivery_column = ref<Array<DeliveryInterface>>([]);
  
          const makeDataDelivery = () => {
              let three_deliveries: Array<DeliveryInterface> = [];
  
              for (const delivery of BDD){
                  const new_delivery = makeDelivery(delivery)   
  
                  if (data_delivery_column.value.length < 2){
                      data_delivery_column.value.push(new_delivery);
                  }
                 
                  if (three_deliveries.length === 9){
                      three_deliveries.push(new_delivery);
                      data_delivery_row.value.push(three_deliveries);
                      three_deliveries = [];
                  } else{
                      three_deliveries.push(new_delivery)
                  }
              }
          }
  
          onMounted(makeDataDelivery);
  
          return{
              data_delivery_row,
              data_delivery_column,
                 
          }
      },
  })
  </script>
  
  <style lang="scss">
      .home {
          
          font-weight: 900;
          .speciality{
  
              .speciality--title{
                  font-size: 1.5em;
              }
          }
          .popular{
              
              .popular--navbar{
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
  
                  .popular--text {
                      margin-left: 5%;
                      font-size: 1.5em;
                  }
  
                  .popular--seeall{
                      margin-right: 5%;
                      color:  #c51212;
                  }
              }
          }
      }
  </style>
  