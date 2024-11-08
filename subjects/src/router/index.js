import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import QuestionsPage from '../views/QuestionsPage.vue';
import UnitTestsPage from '../views/UnitTestsPage.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/question', name: 'Questions', component: QuestionsPage },
    { path: '/unit-tests', name: 'UnitTests', component: UnitTestsPage },
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;