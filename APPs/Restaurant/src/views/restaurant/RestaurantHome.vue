<template>
  <div class="home">
    <Header/>
  </div>
</template>

<script  lang="ts">
import { onMounted, ref, defineComponent } from 'vue'
//IMPORT
import Header from '../../components/componentsGlobaux/Header.vue';

export default defineComponent({
  name : 'RestaurantHome',
  components: {
    Header,
  },
  setup() {

    }

  });
  

</script>

<style>

</style>