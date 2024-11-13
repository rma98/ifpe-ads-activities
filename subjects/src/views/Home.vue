<template>
  <div class="home-page">
    <h1>Bem-vindo à Página de Atividades</h1>
    <div class="profile-section">
      <img :src="fotoRobson" alt="Foto de Robson" class="profile-photo" />
      <p class="description">
        Olá, meu nome é Robson, sou estudante do curso de Análise e Desenvolvimento de Sistemas. Esta página é dedicada às minhas atividades acadêmicas e projetos pessoais. Seja muito bem-vindo!
      </p>
    </div>

    <div class="topics-grid">
      <div class="card">
        <h2><i class="fas fa-database"></i> Estrutura de Dados</h2>
        <ul>
          <li>
            <a href="#/complexity-of-algorithms" target="_blank">Complexidade de Algoritmos</a>
          </li>
        </ul>
      </div>

      <div class="card">
        <h2><i class="fas fa-vial"></i> Teste de Software</h2>
        <ul>
          <li>
            <a href="#/questions" target="_blank">Perguntas</a>
          </li>
          <li>
            <a href="#/unit-tests" target="_blank">Testes de Unidade</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import fotoRobson from '../assets/img/foto.jpg';
</script>

<style scoped>
.home-page {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  color: #333;
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

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #007acc;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 0.5rem;
}

a {
  text-decoration: none;
  color: #007acc;
  font-weight: 500;
  font-size: 1.6rem;
}

a:hover {
  text-decoration: underline;
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
}
</style>
