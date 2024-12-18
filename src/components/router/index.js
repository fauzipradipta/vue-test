import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    // { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
    { path: '/login', name: 'login', component: () => import('../Pages/LoginPage.vue') },
    // { path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue') },
  ];


  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;