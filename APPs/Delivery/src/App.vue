<template>
  <div class="app">
    <Header/>
    <router-view/>
    <Navbar class="navbar--home" :items="navbarItems"/>
  </div>
</template>

<script lang="ts">

import Header from './components/componentsGlobaux/Header.vue';
import Navbar from './components/componentsGlobaux/navbar.vue';

interface NavItem {
  path: string;
  logo: string;
  name: string;
}
export default {
  name :'App',
  components: {
    Navbar,
    Header,
  },
  data() {
    return {
      navbarItems: [
        { path: '/home', logo: '/src/assets/navbar/home.png', name: ' ' },
        { path: '/register', logo: '/src/assets/navbar/register.png', name: ' ' },
        { path: '/tracking', logo: '/src/assets/navbar/tracking.png', name: ' ' },
        { path: '/settings', logo: '/src/assets/navbar/setting.png', name: ' ' },
      ] as NavItem[],
    };
  },
}

    Header</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
@import url('./style/reset.css');

.app{
    color : black;
    font-family: 'Roboto', sans-serif;
    margin-top: 0px
  }
</style>
