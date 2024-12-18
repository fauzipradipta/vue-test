import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './components/router/index.js'
import LoginPage from './components/Pages/LoginPage.vue';


router.addRoute({ path: '/login', component: LoginPage })
const app = createApp(App);


app.use(router)
app.mount('#app')
