<script setup lang="ts">
import FormAuth from '../components/FormAuth.vue'
</script>

<template>
    <div class="formAuth">
      <FormAuth />
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .formAuth {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>