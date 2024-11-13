<template>
  <div class="modal-overlay" @click.self="closeModal">
    <div class="modal-content">
      <h3>{{ title }}</h3>
      <slot></slot>
      <button class="close-button" @click="closeModal">Fechar</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Título do Modal',
  },
  show: {
    type: Boolean,
    required: true,
  },
});
const emit = defineEmits(['close']);

function closeModal() {
  emit('close');
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  max-width: 600px;
  width: 90%;
  overflow-y: auto;
  max-height: 80vh;
}

.modal-content h3 {
  font-size: 2rem;
}

.close-button {
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.6rem;
  transition: background-color 0.3s;
}

.close-button:hover {
  background-color: #0056b3;
}
</style>
