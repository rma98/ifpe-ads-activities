import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import QuestionsPage from '../views/QuestionsPage.vue';
import UnitTestsPage from '../views/UnitTestsPage.vue';
import ComplexityOfAlgorithmsPage from '../views/ComplexityOfAlgorithmsPage.vue';
import OpenHardwarePage from '../views/OpenHardwarePage.vue';
import Horario5Page from '../views/Horario5Page.vue';
import Horario6Page from '../views/Horario6Page.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/questions', name: 'Questions', component: QuestionsPage },
    { path: '/unit-tests', name: 'UnitTests', component: UnitTestsPage },
    { path: '/complexity-of-algorithms', name: 'ComplexityOfAlgorithms', component: ComplexityOfAlgorithmsPage },
    { path: '/open-hardware', name: 'OpenHardware', component: OpenHardwarePage },
    { path: '/horario-5-periodo', name: 'horario5', component: Horario5Page },
    { path: '/horario-6-periodo', name: 'horario6', component: Horario6Page },
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;