<template>
  <nav class="navigation-menu">
    <ul>
      <li>
        <router-link to="/" class="nav-link">
          <i class="fas fa-home"></i> Página Inicial
        </router-link>
      </li>
      <li class="dropdown">
        <button @click="toggleDropdown" class="nav-link dropdown-toggle">
          <i class="fas fa-calendar-alt"></i> Horário Individual
        </button>
        <ul v-if="showDropdown" class="dropdown-menu">
          <li>
            <router-link to="/horario-5-periodo" class="dropdown-item">
              5º Período
            </router-link>
          </li>
          <li>
            <router-link to="/horario-6-periodo" class="dropdown-item">
              6º Período
            </router-link>
          </li>
        </ul>
      </li>
      <li>
        <a href="https://rma98.github.io/robson-dev-portfolio/#/" class="nav-link" target="_blank" rel="noopener noreferrer">
          <i class="fas fa-briefcase"></i> Meu Portólio
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}
</script>

<style scoped>
.navigation-menu {
  background-color: #007acc;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1.5rem;
}

li {
  position: relative;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #e6f7ff;
}

.dropdown-toggle {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
}

.dropdown-item {
  color: #007acc;
  padding: 0.5rem;
  text-decoration: none;
  transition: background-color 0.3s;
}

.dropdown-item:hover {
  background-color: #e6f7ff;
  border-radius: 4px;
}

@media (max-width: 600px) {
  .navigation-menu {
    flex-direction: column;
    align-items: flex-start;
  }

  ul {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-link,
  .dropdown-toggle {
    font-size: 1rem;
  }
}
</style>
