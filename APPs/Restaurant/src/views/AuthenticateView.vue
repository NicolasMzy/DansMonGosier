<script lang="ts" setup>
import FormAuth from '../components/FormAuth.vue'
// import TierAuthView from '@/components/TierAuthView.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="item">
     <div class="details">
       <h2>
         <slot name="heading">Just Sign in, <br> we'll do the cooking</slot>
       </h2>
       <p>
         <slot>If you don't have an<br> account please <router-link to="/settings">Sign up here</router-link></slot>
       </p>
        <FormAuth />
        <!-- <TierAuthView /> -->
     </div>
   </div>
  </template>
  

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