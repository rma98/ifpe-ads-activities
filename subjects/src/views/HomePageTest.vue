<template>
    <header>
        <h1>🌐 Mini Projeto - Lista de Usuários</h1>
        <nav>
            <router-link to="/home">Início</router-link> |
            <router-link to="/about">Sobre</router-link>
        </nav>
    </header>
    <section>
        <h2>Usuários da API</h2>
        <ul>
            <UserCard v-for="user in users" :key="user.id" :user="user" />
        </ul>
    </section>
    <footer>
        <p>&copy; 2025 - Projeto Vue com API</p>
    </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import UserCard from '../components/UserCard.vue';

const users = ref([]);

onMounted(async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    users.value = await res.json();
});
</script>

<style scoped>
header,
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

section {
    padding: 2rem;
    max-width: 1200px;
    margin: auto;
}

ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
}
</style>
