<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="item">
     <div class="details">
       <h2>
         <slot name="heading">Settings</slot>
       </h2>
       <p>
         <slot></slot>
       </p>
       

     </div>
   </div>
  </template>