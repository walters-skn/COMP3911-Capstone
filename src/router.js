
import {createRouter,createWebHistory} from 'vue-router';


import LoginPage from '@/components/LoginPage.vue'
import HomePage from '@/components/HomePage.vue'
import RegisterPage from '@/components/RegisterPage.vue'
import ProfilePage from '@/components/ProfilePage.vue'
import FooterView from '@/components/FooterView.vue'
import DiaBot from '@/components/DiaBot.vue'
import NavBar from '@/components/NavBar.vue';
import NavBar2 from '@/components/NavBar.vue';
import SubscriberPage from '@/components/SubscriberPage.vue'


const routes = [
    { path: '/', component: HomePage },
    { path: '/login', component: LoginPage },
    { path: '/register', component: RegisterPage },
    { path: '/profile', component: ProfilePage },
    { path: '/footer', component: FooterView},
    { path: '/diabot', component: DiaBot},
    {path: '/navbar', component: NavBar},
    {path: '/navbar2', component: NavBar2},
    {path: '/home', component: HomePage},
    // {path: '/signout', component: SignOut}
    {path: '/subscriber', component: SubscriberPage}

]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
 
 