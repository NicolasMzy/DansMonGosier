<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/basket">Basket</RouterLink>
      </nav>
      <RouterView />
      
  </header>
</template>
