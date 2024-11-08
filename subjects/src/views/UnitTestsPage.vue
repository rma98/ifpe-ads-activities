<template>
  <div class="unit-tests-page">
    <h1>Testes de Unidade e JUnit</h1>
    <p>
      Bem-vindo à página sobre Testes de Unidade! Vamos aprender sobre a
      importância dos testes automatizados e como utilizar o JUnit para testar
      seu código de forma eficaz.
    </p>

    <section v-if="currentPage === 1">
      <h2>O que são Testes Automatizados?</h2>
      <p>
        Os testes automatizados são fundamentais para garantir que o código de
        um software se comporta conforme o esperado, sem a necessidade de testes
        manuais. Eles executam um conjunto de passos, como:
      </p>
      <ol>
        <li>Cenário: Definir o que será testado.</li>
        <li>Ação: Executar o código.</li>
        <li>Validação: Verificar se o resultado está correto.</li>
      </ol>
      <h2>Exemplo de teste automatizado</h2>
      <pre>
        <code>
class TesteDoAvaliador {
    public static void main(String[] args) {
        // Cenário: 3 lances em ordem crescente
        Usuario joao = new Usuario("Joao");
        Usuario jose = new Usuario("José");
        Usuario maria = new Usuario("Maria");
        Leilao leilao = new Leilao("Playstation 3 Novo");
        leilao.propoe(new Lance(maria, 250.0));
        leilao.propoe(new Lance(joao, 300.0));
        leilao.propoe(new Lance(jose, 400.0));
        
        // Executando a ação
        Avaliador leiloeiro = new Avaliador();
        leiloeiro.avalia(leilao);
        
        // Comparando a saída com o esperado
        double maiorEsperado = 400;
        double menorEsperado = 250;
        System.out.println(maiorEsperado == leiloeiro.getMaiorLance());
        System.out.println(menorEsperado == leiloeiro.getMenorLance());
    }
}
        </code>
      </pre>

      <h2>O que melhorar?</h2>
      <p>Agora, imagine que você tem 1000 testes como esse. Seria impossível olhar para todas as saídas true ou false e verificar manualmente se o código está correto. Para automatizar isso, precisamos de uma ferramenta que:</p>
      <ul>
        <li>Formate os resultados.</li>
        <li>Indique quais testes falharam.</li>
        <li>Explique por que falharam.</li>
      </ul>
      <p>É aqui que entra o JUnit!</p>
    </section>

    <section v-if="currentPage === 2">
      <h2>O que é o JUnit?</h2>
      <p>O JUnit é uma biblioteca que ajuda a escrever e executar testes automatizados de forma simples e organizada. Ele cuida da execução e formatação dos testes, mostrando claramente quais passaram e quais falharam.</p>

      <h2>Como usar o JUnit?</h2>
      <p>Vamos agora criar um teste usando JUnit. O código de teste será bem semelhante ao que você já viu, mas agora usaremos o JUnit para automatizar a validação.</p>
      <p>Primeiro, você precisa adicionar o JUnit como dependência. Em um projeto Maven, a dependência seria:</p>
      <pre>
        <code>
&lt;dependency&gt;
    &lt;groupId&gt;org.junit.jupiter&lt;/groupId&gt;
    &lt;artifactId&gt;junit-jupiter-api&lt;/artifactId&gt;
    &lt;version&gt;5.7.0&lt;/version&gt;
    &lt;scope&gt;test&lt;/scope&gt;
&lt;/dependency&gt;
        </code>
      </pre>
      <p>Com o JUnit configurado, você pode criar testes como este:</p>
      <pre>
        <code>
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Test;

class AvaliadorTest {

    @Test
    void deveEntenderMaiorEMenorLance() {
        // Cenário: 3 lances em ordem crescente
        Usuario joao = new Usuario("Joao");
        Usuario jose = new Usuario("José");
        Usuario maria = new Usuario("Maria");
        Leilao leilao = new Leilao("Playstation 3 Novo");
        leilao.propoe(new Lance(maria, 250.0));
        leilao.propoe(new Lance(joao, 300.0));
        leilao.propoe(new Lance(jose, 400.0));
        
        // Executando a ação
        Avaliador leiloeiro = new Avaliador();
        leiloeiro.avalia(leilao);
        
        // Validação
        double maiorEsperado = 400;
        double menorEsperado = 250;
        
        assertEquals(maiorEsperado, leiloeiro.getMaiorLance());
        assertEquals(menorEsperado, leiloeiro.getMenorLance());
    }
}
        </code>
      </pre>

      <h2>Como o JUnit resolve o problema?</h2>
      <p>O código acima é um teste de unidade que utiliza o JUnit. Ao executar esse teste, o JUnit cuidará de:</p>
      <ol>
        <li>Executar a ação: Avaliar os lances.</li>
        <li>Validar automaticamente: Usar assertEquals() para comparar o resultado obtido com o esperado.</li>
        <li>Mostrar o resultado de forma clara: Se algum teste falhar, o JUnit indicará qual teste falhou e por que.</li>
      </ol>
    </section>

    <section v-if="currentPage === 5">
      
    </section>

    <section v-if="currentPage === 6">
      <h2>Como o JUnit resolve o problema?</h2>
      <p>O código acima é um teste de unidade que utiliza o JUnit...</p>
    </section>

    <section v-if="currentPage === 7">
      <h2>Resumo</h2>
      <p>Os testes automatizados são fundamentais para garantir que o código...</p>
    </section>

    <!-- Navegação -->
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">Anterior</button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Próxima</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1, // Página inicial
      totalPages: 7,  // Total de páginas
    };
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    }
  }
};
</script>

<style scoped>
.unit-tests-page {
  font-family: 'Arial', sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f9f9f9;
  color: #333;
}

h1 {
  font-size: 2.5rem;
  color: #00796b;
  margin-bottom: 20px;
  text-align: center;
}

h2 {
  font-size: 2rem;
  color: #00796b;
  margin-top: 30px;
}

p {
  font-size: 1.7rem;
  line-height: 1.6;
  margin-bottom: 15px;
}

ol, ul {
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

pre {
  background-color: #2d2d2d;
  color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  overflow-x: auto;
  margin-bottom: 20px;
}

code {
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
}

section {
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

section p, section ol {
  margin-top: 10px;
}

section h2 {
  margin-top: 0;
}

.pagination {
  text-align: center;
  margin-top: 20px;
}

.pagination button {
  padding: 10px 20px;
  margin: 0 10px;
  background-color: #00796b;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.pagination span {
  font-size: 1.2rem;
  color: #00796b;
}

@media (max-width: 768px) {
  .unit-tests-page {
    padding: 15px;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p, ol {
    font-size: 1rem;
  }

  pre {
    padding: 15px;
  }
}
</style>
