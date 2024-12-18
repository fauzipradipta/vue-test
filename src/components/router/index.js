import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/login', name: 'Login Page', component: () => import('../Pages/LoginPage.vue') },
  
  ];


  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;