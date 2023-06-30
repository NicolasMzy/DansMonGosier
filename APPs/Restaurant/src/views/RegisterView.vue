<template>
  <div class="item">
     <div class="details">
       <h2>
         <slot name="heading">Let's sign you up, <br> your meal awaits</slot>
       </h2>
       <p>
         <slot>If you have an<br> account please <router-link to="/">Sign in here</router-link></slot>
       </p>
         <FormRegister/>
     </div>
   </div>
  </template>

  
  <script setup lang="ts">
  import FormRegister from '../components/FormRegister.vue'
  </script>
  
  <style scoped>
  
  .item {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .details {
    text-align: center;
    margin-top: 2rem;
  }
  
  @media (min-width: 768px) {
    .item {
      flex-direction: row;
      align-items: flex-start;
    }
  
    .details {
      text-align: left;
      margin-left: 2rem;
    }
  }
  
  @media (min-width: 1024px) {
    .item {
      margin-top: 0;
      padding: 0.4rem 0 1rem 0;
    }
  }
  
  </style>
  