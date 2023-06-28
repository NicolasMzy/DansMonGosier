import { createRouter, createWebHistory } from 'vue-router';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
<<<<<<< HEAD
      name: 'auth',
      component: () => import('../views/AuthenticateView.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/RestaurantHome.vue'),
=======
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'ClientHome',
      component: () => import('../views/restaurant/RestaurantHome.vue'),
>>>>>>> dev
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
