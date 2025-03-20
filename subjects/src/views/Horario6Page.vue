<template>
  <div class="schedule-container">
    <NavigationMenu />
    <h1 class="schedule-header">Horário Individual - 6º Período</h1>

    <!-- Grid de cards combinados -->
    <div class="schedule-grid">
      <div v-for="(discipline, index) in disciplines" :key="index" class="schedule-card">
        <div class="card-header">
          <h3>{{ discipline.name }}</h3>
          <i class="fa fa-book"></i> <!-- Ícone da disciplina -->
        </div>
        <div class="card-body">
          <div class="schedule-info">
            <!-- Exibe os dias e horários -->
            <p v-for="(session, i) in discipline.schedule" :key="i">
              <span class="day-time">{{ session.day }}: {{ session.time }}</span>
            </p>
          </div>
          <!-- Exibe a descrição da disciplina -->
          <p class="discipline-description">
            {{ discipline.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";

export default {
  components: {
    NavigationMenu,
  },
  data() {
    return {
      disciplines: [
        {
          name: 'PROCOMP',
          schedule: [
            { day: 'Segunda-feira', time: '09:35 às 11:50' },
            { day: 'Quarta-feira', time: '07:45 às 09:15' }
          ],
          description: 'Projeto em Computação - Tiago Pessoa Ferreira de Lima'
        },
        {
          name: 'PDISMOV',
          schedule: [
            { day: 'Terça-feira', time: '09:35 às 11:50' },
            { day: 'Quarta-feira', time: '09:35 às 10:19' }
          ],
          description: 'Programação para Dispositivos Móveis - Helio Fernando Bentzen Pessoa Filho'
        },
        {
          name: 'OETCC 2',
          schedule: [
            { day: 'Sexta-feira', time: '10:20 às 11:50' }
          ],
          description: 'Orientações para Elaboração do TCC 2 - DAVID EDSON RIBEIRO'
        },
        {
          name: 'SEGINFOR',
          schedule: [
            { day: 'Quinta-feira', time: '09:35 às 11:50' },
            { day: 'Sexta-feira', time: '09:35 às 10:19' }
          ],
          description: 'Segurança da Informação - Thiago Valentim Bezerra'
        },
        {
          name: 'TOPADAD',
          schedule: [
            { day: 'Segunda-feira', time: '07:45 às 09:15' },
            { day: 'Terça-feira', time: '07:45 às 09:15' }
          ],
          description: 'Tópicos Avançados em Bancos de Dados - Leonardo de Souza Lima'
        },
        {
          name: 'TAENGSOFT',
          schedule: [
            { day: 'Quarta-feira', time: '10:20 às 11:50' },
            { day: 'Quinta-feira', time: '07:45 às 09:15' }
          ],
          description: 'Tópicos Avançados em Engenharia de Software - Helio Fernando Bentzen Pessoa Filho'
        }
      ]
    };
  }
};
</script>

<style scoped></style>
