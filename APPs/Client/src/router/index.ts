import { createRouter, createWebHistory } from 'vue-router';
<<<<<<< HEAD
=======
import SettingsVue from '@/views/settings/SettingsVue.vue';
import ClientHome from '@/views/Client/ClientHome.vue';
import ProfileInformation from '@/views/settings/ProfileInformation.vue';
>>>>>>> dev

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
<<<<<<< HEAD
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/basket',
      name: 'basket',
      component: () => import('@/views/BasketView.vue')
    },
    {
      path: '/payment/:orderId',
      name: 'payment',
      component: () => import('@/views/PaymentView.vue')
    },
    {
=======
      name: 'ClientHome',
      component: ClientHome,
    },
    {
>>>>>>> dev
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
<<<<<<< HEAD
     
  
=======
>>>>>>> dev

export default router;
