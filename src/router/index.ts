import { createRouter, createWebHashHistory } from 'vue-router';
import BlankView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: BlankView
    }
  ]
});

export default router;
