<template>
  <header>
    <div id="app">
      <SettingsPageView/>
    </div>
  </header>
</template>

<script>
import DeliveryHome from './views/DeliveryPageView.vue';
import HeaderDMG from './components/Header.vue'
import SettingsPageView from './views/SettingsPageView.vue';
export default {
  name: 'App',
  components: {
    DeliveryHome,
    HeaderDMG,
    SettingsPageView,
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
