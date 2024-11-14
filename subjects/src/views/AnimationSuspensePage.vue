<template>
  <div class="suspense-container">
    <div v-if="showCurrentPriests" class="priests">
      <h1 class="big-text">Estamos nos despedindo...</h1>
      <div class="priests-images">
        <img :src="currentPriest1" alt="Padre Atual 1" />
        <img :src="currentPriest2" alt="Padre Atual 2" />
      </div>
    </div>
    <div v-else-if="showCountdown" class="countdown">
      <h2 class="big-text">VEM AÍ...</h2>
      <h1 class="big-countdown">{{ countdown }}</h1>
    </div>
    <div v-else class="new-priests">
      <h1 class="big-text">Conheça os novos padres!</h1>
      <div class="priests-images">
        <img :src="newPriest1" alt="Novo Padre 1" />
        <img :src="newPriest2" alt="Novo Padre 2" />
      </div>
    </div>
  </div>
</template>

<script>
import currentPriest1 from "../assets/img/padre-paulo.png";
import currentPriest2 from "../assets/img/padre-leandro.png";
import newPriest1 from "../assets/img/frei-gilson.jpeg";
import newPriest2 from "../assets/img/padre-marcelo.jpeg";

export default {
  data() {
    return {
      countdown: 5,
      showCurrentPriests: true,
      showCountdown: false,
      currentPriest1,
      currentPriest2,
      newPriest1,
      newPriest2,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showCurrentPriests = false;
      this.showCountdown = true;
      this.startCountdown();
    }, 3000);
  },
  methods: {
    startCountdown() {
      const interval = setInterval(() => {
        if (this.countdown > 1) {
          this.countdown--;
        } else {
          clearInterval(interval);
          this.showCountdown = false;
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
.suspense-container {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #000000, #434343);
  color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: flicker 2s infinite;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

.big-text {
  font-size: 4rem;
  font-weight: bold;
}

.big-countdown {
  font-size: 6rem;
  color: #ff0000;
  animation: pulse 1s infinite;
}

.priests-images {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
}

.priests-images img {
  width: 300px;
  height: 400px;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
  transition: transform 1s;
}

.priests-images img:hover {
  transform: scale(1.1);
}
</style>
