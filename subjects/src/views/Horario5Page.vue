<template>
  <div class="schedule-container">
    <NavigationMenu />
    <h1 class="schedule-header">Horário Individual - 5º Período</h1>

    <!-- Grid de cards combinados -->
    <div class="schedule-grid">
      <div
        v-for="(discipline, index) in disciplines"
        :key="index"
        class="schedule-card"
      >
        <div class="card-header">
          <h3>{{ discipline.name }}</h3>
          <i class="fa fa-book"></i>
          <!-- Ícone da disciplina -->
        </div>
        <div class="card-body">
          <div class="schedule-info">
            <!-- Exibe os dias e horários -->
            <p v-for="(session, i) in discipline.schedule" :key="i">
              <span class="day-time"
                >{{ session.day }}: {{ session.time }}</span
              >
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
          name: "ELTCC 1",
          schedule: [{ day: "Segunda-feira", time: "07:45 às 09:15" }],
          description:
            "Orientações para Elaboração do Tcc 1 - Delano Hélio Oliveira",
        },
        {
          name: "PDSWEB II",
          schedule: [
            { day: "Segunda-feira", time: "09:35 às 10:19" },
            { day: "Terça-feira", time: "07:45 às 10:19" },
          ],
          description:
            "Projeto de Desenvolvimento de Sistemas Web II - Leonardo de Souza Lima",
        },
        {
          name: "SISEMB",
          schedule: [
            { day: "Terça-feira", time: "10:20 às 11:50" },
            { day: "Quinta-feira", time: "10:20 às 11:50" },
          ],
          description: "Sistemas Embarcados - David Edson Ribeiro",
        },
        {
          name: "TOPINF",
          schedule: [{ day: "Quarta-feira", time: "07:45 às 09:15" }],
          description:
            "Tópicos Avançados em Tecnologia da Informação - Diogo Lopes da Silva",
        },
        {
          name: "INTART",
          schedule: [{ day: "Quarta-feira", time: "09:35 às 11:50" }],
          description:
            "Inteligência Artificial - Tiago Pessoa Ferreira de Lima",
        },
        {
          name: "INTMAQU",
          schedule: [
            { day: "Quinta-feira", time: "08:30 às 10:19" },
            { day: "Sexta-feira", time: "07:45 às 09:15" },
          ],
          description: "Intereface Homem-máquina - Sionise Rocha Gomes",
        },
        {
          name: "TSOFTWARE",
          schedule: [{ day: "Sexta-feira", time: "09:35 às 11:50" }],
          description: "Teste de Software - Delano Hélio Oliveira",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>
