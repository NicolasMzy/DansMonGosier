<template>
    <div class="navbar--container">
      <div class="navbar" v-for="item in items" :key="item.path" @click="navigate(item.path)">
        <img :src="item.logo" :alt="item.name" class="logo">
        <span class="name">{{ item.name }}</span>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  interface NavItem {
    path: string;
    logo: string;
    name: string;
  }
  
  export default defineComponent({
    name: 'Navbar',
    props: {
      items: {
        type: Array as () => NavItem[],
        required: true,
      },
    },
    methods: {
      navigate(path: string): void {
        // Utilisez votre logique de navigation ici, par exemple, avec Vue Router
        this.$router.push(path);
      },
    },
  });
  </script>
  
  <style scoped>
  .navbar--container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(45, 43, 43,0.2);
    color: black;
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    z-index: 1000;
  }
  
  .navbar {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    cursor: pointer;
  }
  
  .logo {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  
  .name {
    padding: 5px;
    text-align: center;
    cursor: pointer;
  }
  </style>
  