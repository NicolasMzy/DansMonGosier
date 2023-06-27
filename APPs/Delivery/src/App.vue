<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import HomeView from './views/Client/ClientHome.vue';

export default {
  name :'App',
  components: {
    HomeView,
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('./style/reset.css');
.app{
    color : black;
    font-family: 'Roboto', sans-serif;
    margin-top: 0px
  }
</style>
