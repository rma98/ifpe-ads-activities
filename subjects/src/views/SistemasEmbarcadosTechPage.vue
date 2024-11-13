<template>
  <div class="se-tech-container">
    <h1 class="title">Tecnologias de Sistemas Embarcados</h1>

    <section class="content-section">
      <h2>Processadores - Definições</h2>
      <ul>
        <li>Processadores de software</li>
        <ul>
            <li>Programados via software</li>
            <li>Flexibilidade para alterações de sua funcionalidade e comportamento</li>
        </ul>
        <li>Processadores de hardware</li>
        <ul>
            <li>Desenvolvidos especificamente para desempenhar uma determinada função.</li>
            <li>Extremamente rápidos mas inflexíveis para alteração de seu comportamento.</li>
        </ul>
        <li>Processador de desenvolvimento</li>
        <ul>
            <li>Ambiente para criação de novos processadores.</li>
        </ul>
        <li>Processador alvo</li>
        <ul>
            <li>Meta de projeto</li>
        </ul>
      </ul>
    </section>

    <section class="content-section">
      <h2>Processadores de propósito geral</h2>
      <ul>
        <li>Processadores de propósito geral podem ser usados na implementação de sistemas embarcados</li>
        <ul>
            <li>AMD, INTEL, ARM, etc…</li>
        </ul>
        <li>Computadores baseados nestes processadores são flexíveis</li>
        <ul>
            <li>Fabricantes deixam muitas tarefas para serem implementadas externamente, por componentes auxiliares.</li>
        </ul>
        <li>Flexibilidade têm vantagens do ponto de vista de desempenho mas adiciona um custo extra que pode inviabilizar o projeto de sistemas embarcados baseados nestes processadores</li>
        <li>Processadores embarcados</li>
        <ul>
            <li>Baseados em processadores de uso geral que incorporam vários dispositivos que facilitam e barateiam o projeto de sistemas embarcados</li>
        </ul>
        <li>Ex: Snapdragon</li>
      </ul>
    </section>

    <section class="content-section">
      <h2>Microcontroladores (System-On-A-Chip)</h2>
      <ul>
        <li>Também são processadores de software (semelhante a processadores embarcados)</li>
        <ul>
            <li>Incorporam muitas funções num único chip.</li>
        </ul>
        <li>Não são derivados de famílias de processadores de propósito geral usados em desktops e tem normalmente, um poder de processamento menor.</li>
        <li>Projetados especificamente para sistemas embarcados.</li>
        <li>Incorporar uma grande variedade de dispositivos como:</li>
        <ul>
            <li>Conversores analógico-digitais (ADC) e digital-analógicos (DAC), temporizadores, contadores, interfaces seriais, memória de instruções e/ou dados, controladores de interrupção, geradores de clock, controladores de DMA, etc.</li>
        </ul>
      </ul>
    </section>

    <section class="content-section">
        <h2>ASIPs - Application-Specific Instruction-Set Processors</h2>
        <ul>
            <li>Processadores especialmente desenvolvidos para uma determinada função</li>
            <ul>
                <li>Controle, processamento de sinais, comunicação etc…,</li>
            </ul>
            <li>Conjunto de instruções e os periféricos incorporados são escolhidos de modo a se obter a melhor relação custo-benefício para o projeto em questão</li>
            <li>Melhor desempenho que processadores de uso geral</li>
            <li>Menor desempenho que dispositivos de hardware específicos</li>
            <ul>
                <li>Mais flexíveis por conta da programação feita por software.</li>
            </ul>
        </ul>
    </section>

    <section class="content-section">
        <h2>ASIC- Application- Specific Integrated Circuit</h2>
        <ul>
            <li>Hardware dedicado à execução de um determinado algoritmo</li>
            <li>Total controle sobre a implementação</li>
            <ul>
                <li>Diversas opções no espaço de soluções de acordo com seus requisitos de performance, consumo, tamanho, preço, etc.</li>
            </ul>
            <li>Deve-se usar apenas quando os requisitos não são possíveis de se obter por soluções de software com processadores de propósito geral</li>
            <ul>
                <li>Isso se deve ao elevado preço para a fabricação de dispositivos sob encomenda.</li>
                <li>Perda de flexibilidade com relação a mudanças futuras do projeto que se façam necessárias.</li>
            </ul>
        </ul>
    </section>

    <section class="content-section">
        <h2>FPGAs (Field-Programable Gate Arrays)</h2>
        <ul>
            <li>Dispositivos de hardware programáveis</li>
            <li>FPGAs são compostos de blocos básicos</li>
            <ul>
                <li>Lógica combinacional que pode ser programada para implementar qualquer função booleana de 4 ou 5 variáveis.</li>
            </ul>
            <li>Cada bloco básico dispõe também de elementos de memória (flip-flops)</li>
            <ul>
                <li>Armazenamento de resultados obtidos pela função booleana.</li>
            </ul>
            <li>Conexão entre blocos básicos também é configurável</li>
            <ul>
                <li>complexas estruturas combinacionais com armazenamento de estado nos blocos configurados como memória.</li>
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
.se-tech-container {
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
  .se-tech-container {
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
