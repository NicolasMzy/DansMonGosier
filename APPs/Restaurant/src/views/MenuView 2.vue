<template>
    <div class="home">
        <h1>ICI on affiche et on change les menus</h1>
    </div>
  </template>
  
  <script  lang="ts">
  import { onMounted, ref, defineComponent } from 'vue'
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios'

  export default defineComponent({
    name : 'RestaurantHome',
    components: {

    },
    setup() {
        const router = useRouter();
        const route = useRoute();
        let order = ref(null);

        onMounted(async () => {
            const response = await axios.get('http://localhost:3012/orders/status/ordering/restaurant/'+ route.params.orderId);
            order.value = response.data;
        });

      return{
        order,
      }
    }
  });
    
  
  </script>
  
  <style>
  
  </style>