<template>
    <div class="settings-grid">
      <NotificationsCard v-for="(card,index) in notifications " :info_settings="card" :key="index"/>
    </div>
  </template>
  
  <script>
  import NotificationsCard from './NotificationsCard.vue'
  
  export default {
      name : 'NotificationsCollumns',
      components : {
          NotificationsCard,
      },
      setup() {
  
          const notifications = [
              
              {
                  name : 'SMS Notifications',
                  info : 'For daily update you will get',
                  img: '/src/assets/settings/users-bold.png'
              },
  
              {
                  name : 'Push Notifications',
                  info : 'For daily update you will get',
                  img : '/src/assets/settings/lock-key-bold.png'
              },
              
              {
                  name : 'Promotional Notifications',
                  info : 'For daily update you will get',
                  img : '/src/assets/settings/users-bold.png'
              },
  
          ]
  
          return{
              notifications,
          }
      }
  }
  </script>
  
  <style lang="scss" scoped>
  
  </style>