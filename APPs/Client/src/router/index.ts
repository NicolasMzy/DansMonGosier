import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
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
      path: '/confirmed',
      name: 'Confirmed',
      component: () => import('@/views/PaymentView.vue')
    },
    {
      path: '/restaurant/:id',
      name: 'RestaurantView',
      component: () => import('@/views/RestaurantView.vue'),
    },
    {
      path: '/bis',
      name: 'HomeV',
      component: () => import('@/views/HomeViewBis.vue')
    },
    {
      path: '/tracking',
      name: 'Tracking',
      component: () => import('@/views/OrderTracking.vue')
    },
    {
      path: '/payment/:orderId',
      name: 'payment',
      component: () => import('@/views/PaymentView.vue')
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
