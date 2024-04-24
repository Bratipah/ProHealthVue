import { createRouter, createWebHistory } from 'vue-router'
import Login from '../auth/LogIn.vue';
import Register from '../auth/Register.vue';
// import Homepage from '../homepage/HomePage.vue';
import NavBar from '../navigation/NavBar.vue';


const routes = [
        {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/',
        name: 'NavBar',
        component: NavBar
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router 