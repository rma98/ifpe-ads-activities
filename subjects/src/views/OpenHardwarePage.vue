<template>
  <div class="open-hardware-container">
    <h1 class="title">Open-Hardware: Uma abordagem educacional</h1>
    <section class="content-section">
      <h2>Sistema Computacional</h2>
      <div class="open-hardware-page">
        <ul>
          <li>Open-Hardware</li>
          <li>
            Plataformas de desenvolvimento
            <ul>
              <li
                @click="
                  openModal(
                    'Arduíno',
                    'Plataforma Microcontrolada. Possibilitou a difusão da eletrônica e programação de forma colaborativa. Questões de arquitetura simplificadas.'
                  )
                "
              >
                Arduíno
              </li>
              <ul>
                <li
                  @click="
                    openModal(
                      'Aplicações Arduíno',
                      'Pesquisa e desenvolvimento. Ensino. Indústria.'
                    )
                  "
                >
                  Aplicações
                </li>
              </ul>
              <li
                @click="
                  openModal(
                    'Raspberry PI',
                    'Plataforma Microprocessada. Criada com motivações educacionais. Computador portátil de baixo custo.'
                  )
                "
              >
                Raspberry PI
              </li>
              <ul>
                <li
                  @click="
                    openModal(
                      'Aplicações Raspberry PI',
                      'Emulação de consoles antigos. Robótica. Computação distribuída.'
                    )
                  "
                >
                  Aplicações
                </li>
              </ul>
            </ul>
          </li>
          <li
            @click="
              openModal(
                'Aplicações de tecnologia aberta ao aprendizado',
                'Tecnologia na educação: Softwares educacionais; Raciocínio Lógico; Programação; Robótica; Automação. Ensino: Desde os primeiros anos até a universidade. Educação: Meta comum para o Hardware Aberto. Sustentabilidade. Colaboração e comunidade. “Faça você mesmo!”. “Imprima” novas idéias! Franzininho. Notebook com Raspberry PI: Reuso de LapDock Ex: Motorola atrix. Raspberry PI modelo 3 com wifi e bluetoth.'
              )
            "
          >
            Educação: Aplicações de tecnologia aberta
          </li>
        </ul>
      </div>
    </section>

    <section class="content-section">
      <h2>Computador</h2>
      <ul>
        <li>Processamento</li>
        <li>Memória</li>
        <li>Entrada e saída de dados</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Sistemas podem ser:</h2>
      <ul>
        <li>Microprocessados</li>
        <li>Microcontrolados</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Sistemas livres</h2>
      <ul>
        <li>Software-livre deu a partida!</li>
        <li>Sistema Operacional GNU/Linux</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Hardware Livre</h2>
      <ul>
        <li>Projetos eletrônicos abertos e compartilhados</li>
        <li>Desenvolver dispositivos eletrônicos</li>
        <li>Automatizar operações</li>
        <li>Criação de produtos</li>
      </ul>
    </section>

    <section class="quote-section">
      <blockquote>
        “Open Source Hardware (OSHW) é um termo para artefatos tangíveis —
        máquinas, dispositivos ou outros objetos físicos — cujo projeto foi
        disponibilizado ao público de modo que qualquer um pode construir,
        modificar, distribuir e utilizar estes artefatos. É intenção desta
        definição auxiliar no desenvolvimento de guias gerais para o
        desenvolvimento e validação de licenças para Open Source Hardware.”
      </blockquote>
    </section>

    <section class="quote-section">
      <blockquote>
        “Hardware Aberto e Educação foram feitos um para o outro, os professores
        dessa geração tem em cada vez mais responsabilidades com a inovação,
        porém podem contar com ferramentas tecnológicas livres que apoiam o
        aprendizado tornando-o mais efetivo.”
      </blockquote>
    </section>

    <ReusableModal
      v-if="isModalVisible"
      :show="isModalVisible"
      :title="modalTitle"
      :content="modalContent"
      @close="isModalVisible = false"
    />
  </div>
</template>

<script>
import ReusableModal from "../components/ReusableModal.vue";

export default {
  components: {
    ReusableModal,
  },
  data() {
    return {
      isModalVisible: false,
      modalTitle: "",
      modalContent: "",
    };
  },
  methods: {
    openModal(title, content) {
      this.modalTitle = title;
      this.modalContent = content;
      this.isModalVisible = true;
    },
  },
  name: "OpenHardwareComponent",
};
</script>

<style scoped>
.open-hardware-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 2rem;
  background: #f0f0f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  font-family: "Arial", sans-serif;
  color: #333;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  color: #007acc;
  margin-bottom: 1.5rem;
}

.content-section {
  margin-bottom: 1.5rem;
}

.content-section h2 {
  font-size: 2rem;
  color: #005fa3;
  margin-bottom: 0.75rem;
}

.content-section ul {
  padding-left: 20px;
  list-style: disc;
}

.content-section ul li {
  font-size: 1.6rem;
}

.quote-section {
  background: #e6f7ff;
  border-left: 5px solid #007acc;
  padding: 1rem;
  margin-top: 2rem;
  font-style: italic;
}

blockquote {
  margin: 0;
  font-size: 1.6rem;
}

.open-hardware-page ul {
  list-style-type: none;
  padding: 0;
}
.open-hardware-page li {
  cursor: pointer;
  color: #007acc;
  margin-bottom: 0.5rem;
  transition: color 0.2s;
}
.open-hardware-page li:hover {
  color: #005fa3;
}

@media (max-width: 600px) {
  .open-hardware-container {
    padding: 1rem;
  }
  .title {
    font-size: 2rem;
  }
  .content-section h2 {
    font-size: 1.7rem;
  }
  .content-section ul li {
    font-size: 1.5rem;
  }
  blockquote {
    font-size: 1.3rem;
  }
}
</style>
