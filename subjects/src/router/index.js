import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import QuestionsPage from '../views/QuestionsPage.vue';
import UnitTestsPage from '../views/UnitTestsPage.vue';
import ComplexityOfAlgorithmsPage from '../views/ComplexityOfAlgorithmsPage.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/questions', name: 'Questions', component: QuestionsPage },
    { path: '/unit-tests', name: 'UnitTests', component: UnitTestsPage },
    { path: '/complexity-of-algorithms', name: 'ComplexityOfAlgorithms', component: ComplexityOfAlgorithmsPage },
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;