<template>
  <div class="se-introduction-container">
    <h1 class="title">Introdução a Sistemas Embarcados</h1>
    <section class="quote-section">
      <h2>Definição (ou quase)</h2>
      <blockquote>
        “Criar uma definição precisa de tais sistemas de computação embarcados,
        ou simplesmente sistemas embarcados, não é uma tarefa fácil. Podemos
        tentar a seguinte definição: Um sistema embarcado é quase qualquer
        sistema de computação. Um sistema embarcado é quase qualquer sistema de
        computação diferente de um computador desktop, laptop ou mainframe. Essa
        definição não é perfeita, mas pode ser o mais próximo que chegaremos”.
      </blockquote>
    </section>

    <section class="content-section">
      <h2>Definição</h2>
      <ul>
        <li>
          Integram muitos dispositivos que possuem partes eletrônicas e
          computacionais.
        </li>
        <li>
          Sistema eletrônico computacional de propósito específico visando o
          controle de um produto
        </li>
        <li>Características importantes</li>
        <ul>
          <li>Baixo consumo de bateria</li>
          <li>Tamanho reduzido</li>
          <li>Baixo custo (hardware e software)</li>
        </ul>
      </ul>
    </section>

    <section class="content-section">
      <h2>Sistema Embarcado</h2>
      <ul>
        <li>Embarcado no sentido de “está dentro do dispositivo”</li>
        <li>Sistema projetado para executar em um sistema embarcado</li>
        <ul>
            <li>Eletrônica de consumo: celular, Tablets,…</li>
            <li>Automação: Controles Industriais</li>
            <li>Automóvel: ignição, freios,...</li>
            <li>Entretenimento: TV digital, games,…</li>
            <li>Robótica</li>
            <li>Sistemas de armamentos militares: sistemas bélicos</li>
            <li>Equipamentos médicos: sistemas de suporte à vida</li>
            <li>Comunicação: telefonia, roteadores, switches, modems,…</li>
        </ul>
        <li>Novidade</li>
        <ul>
            <li>Inteligência Artificial Embarcada.</li>
        </ul>
      </ul>
    </section>

    <section class="content-section">
      <h2>Sistema Embarcado</h2>
      <p>Segundo [2] existem três classes básicas de sistemas digitais:</p>
      <ul>
        <li>Sistemas de emulação e sistemas de prototipação.</li>
        <ul>
            <li>Baseados em tecnologias de hardware reprogramáveis</li>
        </ul>
        <li>Sistemas de computação de propósito geral.</li>
        <ul>
            <li>Computadores tradicionais abrangendo desde laptops até supercomputadores</li>
        </ul>
        <li>Sistemas embarcados (embedded systems).</li>
        <ul>
            <li>Sistema computacional especializado que faz parte de uma máquina ou sistema maior. </li>
        </ul>
      </ul>
    </section>

    <section class="quote-section">
      <blockquote>
        [2] MALIK, Sharad et al. Performance analysis of embedded systems. Hardware/Software Co-Design, p. 45-71, 1996.
      </blockquote>
    </section>

    <section class="content-section">
        <h2>Características de sistemas embarcados</h2>
        <ul>
            <li>Funcionalidade sofisticada</li>
            <ul>
                <li>Algoritmos de controle sofisticados</li>
                <li>Interfaces com usuário dedicadas</li>
            </ul>
            <li>Baixo custo de projeto e fabricação</li>
            <li>Pequena exigência de memória</li>
            <li>Interação com dispositivos físicos</li>
            <ul>
                <li>sensores, atuadores</li>
            </ul>
            <li>Dispositivos portáteis</li>
            <ul>
                <li>Tamanho, peso, duração da bateria, etc.</li>
            </ul>
            <li>Propriedades não-funcionais críticas</li>
            <li>Robustez, tempo-real, segurança, tolerância a falhas, etc.</li>
        </ul>
    </section>

    <section class="content-section">
        <h2>Características do software embarcado</h2>
        <ul>
            <li>Exigências impostas ao projeto são mais rígidas do que aquelas consideradas para o software tradicional (PCs)</li>
            <li>Restrições não-funcionais</li>
            <ul>
                <li>Tamanho da memória</li>
                <li>Consumo de energia</li>
                <li>Desempenho</li>
                <li>Tempo real</li>
            </ul>
            <li>Software tradicional: processo de projeto visa principalmente atendimento de restrições funcionais</li>
            <ul>
                <li>Atendimento de restrições não-funcionais (desempenho, memória) são secundárias</li>
            </ul>
        </ul>
    </section>

    <section class="content-section">
        <h2>Desenvolvimento de software embarcado</h2>
        <ul>
            <li>Complexidade crescente das aplicações</li>
            <li>Plataforma de hardware complexa (múltiplos processadores)</li>
            <ul>
                <li>Dificulta desenvolvimento do software</li>
            </ul>
            <li>Janela de mercado cada vez mais estreita</li>
            <ul>
                <li>Clientes desejam um produto cada vez mais sofisticado e por um preço cada vez mais baixo</li>
                <li>Funcionalidades normalmente são adicionadas por software</li>
            </ul>
            <li>Aumentar a produtividade do desenvolvimento de software é imprescindível neste mercado</li>
            <ul>
                <li>Time to market</li>
            </ul>
            <li>Baixo custo</li>
        </ul>
    </section>

    <section class="content-section">
        <h2>Métricas para sistemas embarcados</h2>
        <ul>
            <li>Métricas tradicionalmente aplicadas</li>
            <ul>
                <li>Desempenho</li>
                <li>Ocupação de memória (dados/programa)</li>
                <li>Consumo de energia</li>
                <li>Dissipação de potência</li>
                <li>Tamanho físico/peso</li>
            </ul>
            <li>Requisitos em geral desejam o melhor valor possível de cada métrica</li>
            <li>Não indicam a qualidade do produto de software</li>
        </ul>
    </section>

    <section class="content-section">
        <h2>Plataformas de hardware e de software</h2>
        <ul>
            <li>Plataforma: infra-estrutura de recursos de hardware e ou software a partir dos quais se pode desenvolver um sistema</li>
            <ul>
                <li>Processadores, outros componentes IP (propriedade intelectual)</li>
                <li>Software básico (RTOS, drivers…)</li>
                <li>Bibliotecas de software para domínio de aplicação</li>
                <li>Ambiente de desenvolvimento</li>
            </ul>
            <li>Tendência definitiva no projeto de sistemas embarcados</li>
            <ul>
                <li>Menor time-to-market pelo reuso da plataforma</li>
            </ul>
            <li>Aplicação: customização da plataforma</li>
            <ul>
                <li>Configuração do hardware</li>
                <li>Principalmente customização por software</li>
            </ul>
        </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "SistemasEmbarcadosIntroductionComponent",
};
</script>

<style scoped>
.se-introduction-container {
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

.quote-section {
  background: #e6f7ff;
  border-left: 5px solid #007acc;
  padding: 1rem;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  font-style: italic;
}

.quote-section h2 {
  font-size: 2rem;
  color: #005fa3;
  margin-bottom: 0.75rem;
}

blockquote {
  margin: 0;
  font-size: 1.6rem;
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

.content-section ul li, p {
  font-size: 1.6rem;
}

@media (max-width: 600px) {
  .se-introduction-container {
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
