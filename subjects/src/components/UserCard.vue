<template>
    <li>
        <article>
            <h3>{{ user.name }}</h3>
            <p>Email: {{ user.email }}</p>
            <p>Empresa: {{ user.company.name }}</p>
        </article>
    </li>
</template>

<script setup>
defineProps(['user']);
</script>

<style scoped>
article {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: #f9f9f9;
}
</style>