<template>
  <header>
    <div id="app">
      <DeliveryHome/>
    </div>
  </header>
</template>

<script>
import DeliveryHome from './views/DeliveryPageView.vue';

export default {
  name: 'App',
  components: {
    DeliveryHome,
  },
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre&family=Roboto:wght@300&display=swap');
@import url('./style/reset.css');
#app {
  font-family: 'Roboto', sans-serif;
}
</style>
