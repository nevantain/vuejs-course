import Main from '../pages/MainPage.vue';
import Posts from '../pages/PostPage.vue';
import About from '../pages/AboutPage.vue';
import PostIdPage from '../pages/PostIdPage.vue';
import {createRouter, createWebHistory} from 'vue-router';


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: Posts
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});


export default router;