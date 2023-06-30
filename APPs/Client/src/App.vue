<template>
  <div id="app">
      <RouterView />
      <Navbar class="navbar--home" :items="navbarItems"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Navbar from './components/componentsGlobaux/navbar.vue';

interface NavItem {
  path: string;
  logo: string;
  name: string;
}

export default defineComponent({
  name: 'HomeView',
  components: {
    Navbar,
  },
  data() {
    return {
      navbarItems: [
        { path: '/bis', logo: '/src/assets/navbar/home.png', name: ' ' },
        { path: '/basket', logo: '/src/assets/navbar/shopping-basket.png', name: ' ' },
        { path: '/tracking', logo: '/src/assets/navbar/register.png', name: ' ' },
        { path: '/settings', logo: '/src/assets/navbar/setting.png', name: ' ' },
      ] as NavItem[],
    };
  },
});
</script>

<style>
@import url('./style/reset.css');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

#app {
  margin: 0;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  font-weight: normal;
  color:black;
  box-sizing: border-box;
  padding-bottom: 100px;
}

</style>
