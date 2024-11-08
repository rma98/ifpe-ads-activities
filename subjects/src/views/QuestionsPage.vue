<template>
  <div class="questions-container">
    <h1>Testes Automatizados de Software: Um Guia Prático</h1>

    <!-- Exibe as perguntas visíveis no momento -->
    <div
      v-for="(qa, index) in visibleQuestions"
      :key="index"
      class="question-block"
    >
      <h2 @click="toggle(index)" class="question-title">
        Pergunta {{ index + 1 + currentPage * limit }}: {{ qa.question }}
        <!-- Ajuste para manter a numeração -->
      </h2>
      <p v-if="isOpen(index)" class="answer-text">
        <strong>Resposta:</strong>
        <span v-html="qa.answer"></span>
      </p>
    </div>

    <!-- Ícones para carregar mais perguntas -->
    <div v-if="hasMoreQuestions" class="navigation-buttons">
      <button @click="loadMore" class="icon-btn">
        <i class="fas fa-chevron-down"></i>
        <!-- Ícone para avançar -->
      </button>
    </div>

    <!-- Mensagem quando não houver mais perguntas -->
    <div v-else class="navigation-buttons">
      <p>Você chegou ao final. Voltando para o começo...</p>
      <button @click="resetQuestions" class="icon-btn">
        <i class="fas fa-arrow-circle-up"></i>
        <!-- Ícone para voltar ao início -->
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import questionAnswers from "../json/questions.json";

// Estado para armazenar quais perguntas estão abertas
const openIndex = ref(null);

// Perguntas importadas
const questions = ref([]);

// Inicializa as perguntas após o componente ser montado
onMounted(() => {
  questions.value = questionAnswers;
  resetQuestions(); // Carrega as 5 primeiras perguntas ao iniciar
});

// Limite de perguntas por carregamento
const limit = 5;

// Estado para as perguntas visíveis
const visibleQuestions = ref([]);

// Página atual (começa em 0, para carregar as primeiras perguntas)
const currentPage = ref(0);

// Função para alternar o estado da resposta
function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
}

// Função para verificar se a pergunta está aberta
function isOpen(index) {
  return openIndex.value === index;
}

// Função para carregar mais perguntas
function loadMore() {
  // Verifica se há mais perguntas para carregar
  const totalQuestionsLeft =
    questions.value.length - (currentPage.value + 1) * limit;

  if (totalQuestionsLeft <= 0) {
    hasMoreQuestions.value = false; // Se não houver mais perguntas, desabilita o botão de "ver mais"
  } else {
    // Avança para a próxima página
    currentPage.value++;

    // Carrega o próximo conjunto de perguntas
    const start = currentPage.value * limit;
    const nextQuestions = questions.value.slice(start, start + limit);

    // Substitui as perguntas anteriores pelas novas
    visibleQuestions.value = nextQuestions;
  }
}

// Verifica se há mais perguntas para carregar
const hasMoreQuestions = ref(true);

// Função para resetar as perguntas e voltar ao início
function resetQuestions() {
  visibleQuestions.value = questions.value.slice(0, limit); // Resetando para as 5 primeiras perguntas
  currentPage.value = 0; // Voltando para a primeira página
  hasMoreQuestions.value = true; // Certificando-se de que o botão "Ver mais" apareça
}
</script>

<style scoped>
.questions-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 2rem;
  color: #333;
  margin-bottom: 30px;
}

.question-block {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 20px;
  transition: transform 0.3s;
}

.question-block:hover {
  transform: translateY(-5px);
}

.question-title {
  cursor: pointer;
  font-size: 1.7rem;
  margin-bottom: 8px;
  color: #007bff;
}

.answer-text {
  font-size: 1.6rem;
  line-height: 1.5;
  color: #555;
}

.navigation-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.icon-btn {
  background: none;
  border: none;
  color: #007bff;
  font-size: 2rem;
  cursor: pointer;
}

.icon-btn:hover {
  color: #0056b3;
}

.no-more-questions {
  text-align: center;
  color: #333;
}

@media (max-width: 600px) {
  .questions-container {
    padding: 15px;
  }

  h1 {
    font-size: 1.5rem;
  }

  .question-title {
    font-size: 1.1rem;
  }

  .answer-text {
    font-size: 0.95rem;
  }
}
</style>
