<script setup>
// Nenhum script específico necessário aqui por enquanto
</script>

<template>
  <div id="app">
    <!-- <header>
      <h1>🌐 Mini Projeto - Lista de Usuários</h1>
      <nav>
        <router-link to="/home">Início</router-link> |
        <router-link to="/about">Sobre</router-link>
      </nav>
    </header> -->

    <main>
      <router-view />
    </main>

    <!-- <footer>
      <p>&copy; 2025 - Projeto Vue com API</p>
    </footer> -->
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
/* header,
footer {
  background-color: #222;
  color: white;
  padding: 1rem;
  text-align: center;
}

nav a {
  margin: 0 10px;
  color: #ccc;
  text-decoration: none;
}

main {
  padding: 2rem;
}*/
</style>
