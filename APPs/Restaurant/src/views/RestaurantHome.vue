<template>
  <div class="home">
    <Header/>
    {{ order }}
  </div>
</template>

<script  lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
//IMPORT
import Header from '../components/componentsGlobaux/Header.vue';
import axios from 'axios'

export default defineComponent({
  name : 'RestaurantHome',
  components: {
    Header,
  },
  setup() {
    let order = ref(null);
    onMounted(async () => {
        const orders = await axios.get('http://localhost:3012/orders');
        order.value = orders.data;

      
    });
    return{
      order,

    }
  }
});
  

</script>

<style>

</style>