<template>
  <div class="home-page">
    <h1>Bem-vindo à Página Inicial</h1>
    <p>
      Explore os diferentes conteúdos de aprendizado sobre testes de unidade,
      perguntas de revisão e mais.
    </p>

    <NavigationMenu />
  </div>
</template>

<script setup>
import NavigationMenu from '../components/NavigationMenu.vue';
</script>

<style scoped>
.home-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.home-page:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
  font-weight: bold;
}

p {
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
}

@media (max-width: 600px) {
  h1 {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
}
</style>
