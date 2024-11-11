<template>
  <nav class="navigation-menu">
    <ul>
      <li>
        <router-link to="/"> <i class="fas fa-home"></i> Home </router-link>
      </li>
      <li>
        <router-link to="/question">
          <i class="fas fa-question-circle"></i> Questions
        </router-link>
      </li>
      <li>
        <router-link to="/unit-tests">
          <i class="fas fa-vial"></i> Testes de Unidade
        </router-link>
      </li>
      <li>
        <router-link to="/complexity-of-algorithms">
          <i class="fas fa-cogs"></i> Complexidade de Algoritmos   
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navigation-menu {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.navigation-menu ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 0;
}

.navigation-menu li {
  font-size: 1.1rem;
}

.navigation-menu a {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  color: #007bff;
  text-decoration: none;
  border: 2px solid #007bff;
  border-radius: 20px;
  transition: background-color 0.3s, color 0.3s;
}

.navigation-menu a:hover {
  background-color: #007bff;
  color: #fff;
}

.navigation-menu i {
  margin-right: 0.5rem;
}

@media (max-width: 600px) {
  .navigation-menu ul {
    flex-direction: column;
    gap: 1rem;
  }

  .navigation-menu a {
    width: 100%;
    text-align: center;
  }
}
</style>
