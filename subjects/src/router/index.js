import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import QuestionsPage from '../views/QuestionsPage.vue';
import SEQuestionsPage from '../views/SEQuestionsPage.vue';
import UnitTestsPage from '../views/UnitTestsPage.vue';
import ComplexityOfAlgorithmsPage from '../views/ComplexityOfAlgorithmsPage.vue';
import OpenHardwarePage from '../views/OpenHardwarePage.vue';
import SistemasEmbarcadosIntroductionPage from '../views/SistemasEmbarcadosIntroductionPage.vue';
import SistemasEmbarcadosTechPage from '../views/SistemasEmbarcadosTechPage.vue';
import Horario5Page from '../views/Horario5Page.vue';
import Horario6Page from '../views/Horario6Page.vue';
import AnimationSuspensePage from '../views/AnimationSuspensePage.vue';
import TesteSoftwarePage from '../views/TesteSoftwarePage.vue';

const routes = [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/questions', name: 'Questions', component: QuestionsPage },
    { path: '/se-questions', name: 'SEQuestions', component: SEQuestionsPage },
    { path: '/unit-tests', name: 'UnitTests', component: UnitTestsPage },
    { path: '/complexity-of-algorithms', name: 'ComplexityOfAlgorithms', component: ComplexityOfAlgorithmsPage },
    { path: '/open-hardware', name: 'OpenHardware', component: OpenHardwarePage },
    { path: '/sistemas-embarcados-introduction', name: 'SistemasEmbarcadosIntroduction', component: SistemasEmbarcadosIntroductionPage },
    { path: '/sistemas-embarcados-tech', name: 'SistemasEmbarcadosTech', component: SistemasEmbarcadosTechPage },
    { path: '/horario-5-periodo', name: 'horario5', component: Horario5Page },
    { path: '/horario-6-periodo', name: 'horario6', component: Horario6Page },
    { path: '/animation-suspense', name: 'AnimationSuspense', component: AnimationSuspensePage },
    { path: '/teste-software-guia', name: 'TesteSoftwareGuia', component: TesteSoftwarePage },
    { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;