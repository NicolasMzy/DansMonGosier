<template>
  <div class="app">
    <router-view/>
    <Navbar :items="navbarItems"/>
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/componentsGlobaux/navbar.vue'
interface NavItem {
  path: string;
  logo: string;
  name: string;
}
export default {
  name :'App',
  components: {
    Navbar,
  },
  data() {
    return {
      navbarItems: [
        { path: '/home', logo: '/src/assets/navbar/home.png', name: ' ' },
        { path: '/menu', logo: '/src/assets/navbar/register.png', name: ' ' },
        { path: '/orders', logo: '/src/assets/navbar/shopping-basket.png', name: ' ' },
        { path: '/stats', logo: '/src/assets/navbar/setting.png', name: ' ' },
        { path: '/settings', logo: '/src/assets/navbar/setting.png', name: ' ' },
      ] as NavItem[],
    };
  },
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
