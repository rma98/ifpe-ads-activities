import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import './assets/styles/global.css';
import './assets/styles/schedule.css'
import '@fortawesome/fontawesome-free/css/all.css';

// Importando FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Importando os ícones que serão utilizados
import {
    faProjectDiagram, faQuestionCircle, faTasks, faClipboardList, faListUl, faUsers, faSearch,
    faSyncAlt, faEye, faRedo, faUserShield, faUserTie, faComments, faFileAlt,
    faLightbulb, faFolderOpen, faDraftingCompass, faCalendarCheck, faFileContract,
    faClipboardCheck, faBullseye, faChartLine
} from '@fortawesome/free-solid-svg-icons';

// Adicionando os ícones à biblioteca
library.add(
    faProjectDiagram, faQuestionCircle, faTasks, faClipboardList, faListUl, faUsers, faSearch,
    faSyncAlt, faEye, faRedo, faUserShield, faUserTie, faComments, faFileAlt,
    faLightbulb, faFolderOpen, faDraftingCompass, faCalendarCheck, faFileContract,
    faClipboardCheck, faBullseye, faChartLine
);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.use(router);
app.mount('#app');