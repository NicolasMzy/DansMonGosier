<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
      </nav>
      <RouterView />
      
  </header>
</template>
