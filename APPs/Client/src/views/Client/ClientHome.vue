<template>
  <div class="home">
    <Header/>
      <SpecialityRow/>
  </div>
</template>

<script  lang="ts">
import { onMounted, ref, defineComponent } from 'vue'

import Header from '../../components/componentsGlobaux/Header.vue';


export default defineComponent({
  name : 'ClientHome',
  components: {
    Header,
  },
  
});

</script>

<style>

</style>