<template>
  <div class="home-page">
    <NavigationMenu />
    <h1>Bem-vindo à Página de Atividades</h1>
    <div class="profile-section">
      <img :src="fotoRobson" alt="Foto de Robson" class="profile-photo" />
      <p class="description">
        Olá, meu nome é Robson, sou estudante do curso de Análise e
        Desenvolvimento de Sistemas. Esta página é dedicada às minhas atividades
        acadêmicas e projetos pessoais. Seja muito bem-vindo!
      </p>
    </div>

    <div class="topics-grid">
      <div class="card">
        <h2><i class="fas fa-database"></i> Estrutura de Dados</h2>
        <div class="card-actions">
          <ul>
            <li>
              <router-link
                to="/complexity-of-algorithms"
                class="link-icon"
                target="_blank"
                ><i class="fas fa-chart-line"></i>Complexidade de
                Algoritmos</router-link
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <h2><i class="fas fa-vial"></i> Teste de Software</h2>
        <div class="card-actions">
          <ul>
            <li>
              <router-link to="/questions" class="link-icon" target="_blank"
                ><i class="fas fa-question-circle"></i>Perguntas</router-link
              >
            </li>
            <li>
              <router-link to="/unit-tests" class="link-icon" target="_blank"
                ><i class="fas fa-check-circle"></i>Testes de
                Unidade</router-link
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <h2><i class="fas fa-microchip"></i> Sistemas Embarcados</h2>
        <div class="card-actions">
          <button @click="openModal('Sistemas Embarcados')">Ementa</button>
          <ul>
            <li>
              <router-link
                to="/open-hardware"
                class="link-icon"
                target="_blank"
              >
                <i class="fas fa-cogs"></i> Hardware Livre
              </router-link>
            </li>
            <li>
              <router-link
                to="/sistemas-embarcados-introduction"
                class="link-icon"
                target="_blank"
              >
                <i class="fas fa-book-open"></i> Introdução a Sistemas Embarcados
              </router-link>
            </li>
            <li>
              <router-link
                to="/sistemas-embarcados-tech"
                class="link-icon"
                target="_blank"
              >
                <i class="fas fa-microchip"></i> Tecnologias de Sistemas Embarcados
              </router-link>
            </li>
            <li>
              <router-link to="/se-questions" class="link-icon" target="_blank"
                ><i class="fas fa-question-circle"></i>Perguntas</router-link
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="card">
        <h2><i class="fas fa-book"></i> Recomendações</h2>
        <div class="card-actions">
          <ul>
            <li>
              <a
                href="https://embarcados.com.br/sistemas-embarcados-e-microcontroladores/?authuser=2"
                target="_blank"
                class="link-icon"
              >
                <i class="fas fa-link"></i> Introdução aos sistemas embarcados e
                microcontroladores
              </a>
            </li>
            <li>
              <a
                href="https://www.makerhero.com/blog/diferencas-entre-microcontrolador-e-microprocessador/?authuser=2"
                target="_blank"
                class="link-icon"
              >
                <i class="fas fa-link"></i> Diferenças entre microcontrolador e microprocessador
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <Modal
      v-if="showModal"
      :title="modalTitle"
      :show="showModal"
      @close="showModal = false"
    >
      <component :is="modalContent"></component>
    </Modal>
  </div>
</template>

<script setup>
import NavigationMenu from "../components/NavigationMenu.vue";
import fotoRobson from "../assets/img/photo.jpg";
import { ref } from "vue";
import Modal from "../components/Modal.vue";
import EmentaSistemasEmbarcados from "../components/EmentaSistemasEmbarcados.vue";

const showModal = ref(false);
const modalTitle = ref("");
const modalContent = ref(null);

function openModal(disciplina) {
  modalTitle.value = disciplina;

  // Verifica qual componente de ementa carregar
  if (disciplina === "Sistemas Embarcados") {
    modalContent.value = EmentaSistemasEmbarcados;
  }

  showModal.value = true;
}
</script>

<style scoped>
.home-page {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f3f4f6;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: #1f2937;
}

.profile-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
}

.profile-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.6rem;
  color: #1f2937;
  text-align: center;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.card {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.card-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #3b82f6;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

button {
  background-color: #10b981;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  font-size: 1.6rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  display: inline-block;
  margin-top: 1rem;
}

button:hover {
  background-color: #059669;
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

.link-icon {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  color: #007acc;
  margin-top: 1rem;
  text-decoration: none;
}

.link-icon:hover {
  color: #005fa3;
}

@media (max-width: 600px) {
  .description {
    font-size: 1rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  .card {
    padding: 1rem;
  }

  button {
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
  }
}
</style>
