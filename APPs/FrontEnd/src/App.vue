<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/authenticate">Auth</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/client">Home Client</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre&family=Roboto:wght@300&display=swap');
  #app {
    font-family: 'Roboto', sans-serif;
  }
</style>
