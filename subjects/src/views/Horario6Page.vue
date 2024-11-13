<template>
  <div class="schedule-container">
    <h1 class="schedule-header">Horário Individual - 6º Período</h1>

    <!-- Grid de cards combinados -->
    <div class="schedule-grid">
      <div
        v-for="(discipline, index) in disciplines"
        :key="index"
        class="schedule-card"
      >
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
export default {
  data() {
    return {
      disciplines: [
        {
          name: 'PDSWEB III',
          schedule: [
            { day: 'Segunda-feira', time: '07:45 às 09:15' },
            { day: 'Quarta-feira', time: '08:30 às 09:15' }
          ],
          description: 'Projeto de Desenvolvimento de Sistemas Web III - Leonardo de Souza Lima'
        },
        {
          name: 'ESTINF',
          schedule: [
            { day: 'Terça-feira', time: '08:30 às 09:15' },
            { day: 'Quinta-feira', time: '08:30 às 09:15' }
          ],
          description: 'Estruturas para Internet - Fábio Costa'
        },
        {
          name: 'ELTCC 2',
          schedule: [
            { day: 'Segunda-feira', time: '08:30 às 09:15' },
            { day: 'Sexta-feira', time: '09:35 às 10:19' }
          ],
          description: 'Orientações para Elaboração do TCC 2 - Delano Hélio Oliveira'
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
