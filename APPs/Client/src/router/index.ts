import { createRouter, createWebHistory } from 'vue-router';
import ClientHome from '@/views/Client/ClientHome.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/authentificate',
    },
    {
      path: '/authentificate',
      name: 'Authentificate',
      component: () => import('../views/AUthenticateView.vue'),
    },
    {
      path: '/home',
      name: 'ClientHome',
      component: ClientHome,
    },
    {
      path: '/settings',
      name: 'SettingsVue',

      children: [
        {
          path: '',
          name: 'Settings',
          component: () => import('../views/settings/SettingsVue.vue'),
        },
        {
          path: 'profileinformation',
          name: 'ProfileInformation',
          component: () => import('../views/settings/ProfileInformation.vue'),
        },
        {
          path: 'changepassword',
          name: 'ChangePassword',
          component: () => import('../views/settings/ChangePassword.vue'),
        },
        {
          path: 'paymentmethods',
          name: 'PaymentMethods',
          component: () => import('../views/settings/PaymentsMethods.vue'),
        },
        {
          path: 'location',
          name: 'Location',
          component: () => import('../views/settings/Location.vue'),
        },
        {
          path: 'refertofriends',
          name: 'ReferTofriend',
          component: () => import('../views/settings/ReferToFriend.vue'),
        },
      ],
    },
  ],
});

export default router;
