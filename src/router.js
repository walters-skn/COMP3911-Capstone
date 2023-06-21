import {createRouter,createWebHashHistory} from 'vue-router';
import LoginPage from './components/LoginPage.vue'
import HomePage from './components/HomePage.vue'
import RegisterPage from './components/RegisterPage.vue'
import ProfilePage from './components/ProfilePage.vue'


const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/profile', component: ProfilePage }
]
const router = createRouter({history: createWebHashHistory(),routes})

export default router;
 
 