<template>
    <header>
        <h1>🌐 Mini Projeto - Lista de Usuários</h1>
        <nav>
            <router-link to="/home">Início</router-link> |
            <router-link to="/about">Sobre</router-link>
        </nav>
    </header>
    <section>
        <h2>Sobre o Projeto</h2>
        <p>Este mini-projeto foi feito por Robson para revisão da monitoria de Desenvolvimento de Sistemas Web.</p>
    </section>
    <footer>
        <p>&copy; 2025 - Projeto Vue com API</p>
    </footer>
</template>

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
    max-width: 600px;
    margin: auto;
    line-height: 1.6;
}
</style>