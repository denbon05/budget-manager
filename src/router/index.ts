import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import { RouteNames } from '@/types/router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteNames.Home,
      component: HomeView,
    },
    {
      path: '/profile',
      name: RouteNames.Profile,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue'),
    },
  ],
});

router.beforeEach((to) => {
  if (to.path.startsWith('/api')) {
    // api call - no need to handle further
    return false;
  }

  return true;
});

export default router;
