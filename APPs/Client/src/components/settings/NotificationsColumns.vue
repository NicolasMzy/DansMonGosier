<template>
    <div class="settings-grid">
        <NotificationsCard v-for="(card, index) in notifications" :info_settings="card" :key="index"/>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import NotificationsCard from './NotificationsCard.vue';
  
  interface Notification {
    name: string;
    info: string;
    img: string;
  }
  
  export default defineComponent({
    name: 'NotificationsColumns',
    components: {
      NotificationsCard,
    },
    setup() {
      const notifications: Notification[] = [
        {
          name: 'SMS Notifications',
          info: 'For daily update you will get',
          img: '/src/assets/settings/users-bold.png',
        },
        {
          name: 'Push Notifications',
          info: 'For daily update you will get',
          img: '/src/assets/settings/lock-key-bold.png',
        },
        {
          name: 'Promotional Notifications',
          info: 'For daily update you will get',
          img: '/src/assets/settings/users-bold.png',
        },
      ];
  
      return {
        notifications,
      };
    },
  });
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  