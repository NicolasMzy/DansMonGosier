<template>
    <div class="settings-grid">
      <SettingsCard v-for="(card,index) in settings " :info_settings="card" :key="index"/>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import SettingsCard from './SettingsCard.vue'
  
  interface Setting {
      name: string;
      info: string;
      img: string;
  }
  
  export default defineComponent({
      name : 'SettingCollumns',
      components : {
          SettingsCard,
      },
      setup() {
          const settings: Setting[] = [
              
              {
                  name: 'Information du profil',
                  info: 'Changez vos informations',
                  img: '/src/assets/settings/user-bold.png',
              },
              
              {
                  name : 'Sponsorise ton ami',
                  info : 'Fais toi parrainer aussi',
                  img : '/src/assets/settings/users-bold.png'
              }
  
          ]
  
          return{
              settings,
          }
      }
  })
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  