<template>
  <div class="unit-tests-page">
    <NavigationMenu />

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
      <p>
        Agora, imagine que você tem 1000 testes como esse. Seria impossível
        olhar para todas as saídas true ou false e verificar manualmente se o
        código está correto. Para automatizar isso, precisamos de uma ferramenta
        que:
      </p>
      <ul>
        <li>Formate os resultados.</li>
        <li>Indique quais testes falharam.</li>
        <li>Explique por que falharam.</li>
      </ul>
      <p>É aqui que entra o JUnit!</p>
    </section>

    <section v-if="currentPage === 2">
      <h2>O que é o JUnit?</h2>
      <p>
        O JUnit é uma biblioteca que ajuda a escrever e executar testes
        automatizados de forma simples e organizada. Ele cuida da execução e
        formatação dos testes, mostrando claramente quais passaram e quais
        falharam.
      </p>

      <h2>Como usar o JUnit?</h2>
      <p>
        Vamos agora criar um teste usando JUnit. O código de teste será bem
        semelhante ao que você já viu, mas agora usaremos o JUnit para
        automatizar a validação.
      </p>
      <p>
        Primeiro, você precisa adicionar o JUnit como dependência. Em um projeto
        Maven, a dependência seria:
      </p>
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
      <p>
        O código acima é um teste de unidade que utiliza o JUnit. Ao executar
        esse teste, o JUnit cuidará de:
      </p>
      <ol>
        <li>Executar a ação: Avaliar os lances.</li>
        <li>
          Validar automaticamente: Usar assertEquals() para comparar o resultado
          obtido com o esperado.
        </li>
        <li>
          Mostrar o resultado de forma clara: Se algum teste falhar, o JUnit
          indicará qual teste falhou e por que.
        </li>
      </ol>
    </section>

    <section v-if="currentPage === 3">
      <h2>Configuração do Projeto</h2>
      <ol>
        <li>Criação do Projeto:</li>
        <ul>
          <li>Use uma IDE como IntelliJ IDEA ou Eclipse.</li>
          <li>Crie um novo projeto Java.</li>
          <li>
            Certifique-se de que o Java Development Kit (JDK) está instalado e
            configurado na sua máquina.
          </li>
        </ul>
        <li>Adicionar JUnit ao Projeto:</li>
        <ul>
          <li>
            Se você estiver usando o Maven, adicione a dependência do JUnit no
            arquivo pom.xml:
          </li>
          <pre>
        <code>
&lt;dependencies&gt;
  &lt;dependency&gt;
    &lt;groupId&gt;org.junit.jupiter&lt;/groupId&gt;
    &lt;artifactId&gt;junit-jupiter&lt;/artifactId&gt;
    &lt;version&gt;5.9.3&lt;/version&gt;
    &lt;scope&gt;test&lt;/scope&gt;
  &lt;/dependency&gt;
&lt;/dependencies&gt;
        </code>
      </pre>
          <li>Se não estiver usando Maven, faça o download do JUnit JAR e adicione-o manualmente ao classpath do projeto.</li>
        </ul>
      </ol>

      <h2>Estrutura Base do Projeto</h2>
      <p>Crie a seguinte estrutura de pastas:</p>
      <pre>
        <code>
meu-projeto/
├── src/
│   ├── main/
│   │   └── java/
│   │       └── com/exemplo/projeto/
│   │           └── Calculadora.java
│   └── test/
│       └── java/
│           └── com/exemplo/projeto/
│               └── CalculadoraTest.java
└── pom.xml (se usar Maven)
        </code>
      </pre>

      <h2>Criando a Classe Principal</h2>
      <p>No arquivo Calculadora.java, crie uma classe simples com métodos que queremos testar:</p>
      <pre>
        <code>
package com.exemplo.projeto;

public class Calculadora {
    public int somar(int a, int b) {
        return a + b;
    }

    public int subtrair(int a, int b) {
        return a - b;
    }
}
        </code>
      </pre>

      <h2>Criando a Classe de Teste</h2>
      <p>No arquivo CalculadoraTest.java, crie a classe de teste usando JUnit:</p>
      <pre>
        <code>
package com.exemplo.projeto;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class CalculadoraTest {

    private Calculadora calculadora;

    // @BeforeEach: Executa antes de cada método de teste
    @BeforeEach
    public void setup() {
        calculadora = new Calculadora();
    }

    // @Test: Indica que este é um método de teste
    @Test
    public void testSomar() {
        int resultado = calculadora.somar(2, 3);
        assertEquals(5, resultado, "A soma de 2 e 3 deve ser 5");
    }

    @Test
    public void testSubtrair() {
        int resultado = calculadora.subtrair(5, 2);
        assertEquals(3, resultado, "A subtração de 5 e 2 deve ser 3");
    }
}
        </code>
      </pre>

      <h2>Explicação das Anotações do JUnit:</h2>
      <ol>
        <li><strong>@Test:</strong> Marca um método como um teste que será executado pelo JUnit.</li>
        <li><strong>@BeforeEach:</strong> Executa o método anotado antes de cada teste. Útil para inicializar objetos de teste.</li>
        <li><strong>@AfterEach:</strong> Executa o método após cada teste. Geralmente usado para limpar ou liberar recursos.</li>
        <li><strong>@BeforeAll:</strong> Executa uma única vez antes de todos os testes. Deve ser usado em métodos estáticos.</li>
        <li><strong>@AfterAll:</strong> Executa uma única vez após todos os testes. Também deve ser usado em métodos estáticos.</li>
        <li><strong>@Disabled:</strong> Desativa temporariamente um teste.</li>
        <li><strong>@DisplayName:</strong> Define um nome amigável para o teste, facilitando a leitura dos resultados.</li>
      </ol>

      <h2>Executando os Testes</h2>
      <ol>
        <li>Usando a IDE:</li>
        <ul>
          <li>Clique com o botão direito no arquivo CalculadoraTest.java e selecione Run ou Run with Coverage para executar os testes.</li>
        </ul>
        <li>Usando o Maven:</li>
        <ul>
          <li>Execute o comando mvn test no terminal para rodar os testes.</li>
        </ul>
      </ol>

      <h2>Verificando Resultados e Erros</h2>
      <ul>
        <li>Se todos os testes passarem, você verá a confirmação no console da IDE ou no terminal.</li>
        <li>Se um teste falhar, JUnit exibirá uma mensagem detalhada com a causa e a linha onde o teste falhou.</li>
      </ul>

      <h2>Exemplo Avançado de Anotações</h2>
      <pre>
        <code>
import org.junit.jupiter.api.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class) // Ordena a execução dos testes
public class CalculadoraAvancadoTest {

    private static int contador;

    @BeforeAll
    public static void init() {
        contador = 0;
    }

    @Test
    @Order(1)
    @DisplayName("Teste de Soma")
    public void testeSoma() {
        contador++;
        // Teste de soma
    }

    @Test
    @Order(2)
    @DisplayName("Teste de Subtração")
    public void testeSubtracao() {
        contador++;
        // Teste de subtração
    }

    @AfterAll
    public static void finaliza() {
        System.out.println("Total de testes executados: " + contador);
    }
}
        </code>
      </pre>

      <h2>Resumo:</h2>
      <ul>
        <li><strong>@Test:</strong> Anota o método como um teste.</li>
        <li><strong>@BeforeEach</strong> e <strong>@AfterEach:</strong> Executam código antes e depois de cada teste.</li>
        <li><strong>@BeforeAll</strong> e <strong>@AfterAll:</strong> Executam uma vez no início e no fim de todos os testes.</li>
        <li><strong>@DisplayName:</strong> Dá um nome descritivo ao teste.</li>
        <li><strong>@Disabled:</strong> Ignora um teste.</li>
      </ul>
    </section>

    <!-- Navegação -->
    <div class="pagination">
      <button @click="previousPage" :disabled="currentPage === 1">
        Anterior
      </button>
      <span>Página {{ currentPage }} de {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        Próxima
      </button>
    </div>
  </div>
</template>

<script>
import NavigationMenu from "../components/NavigationMenu.vue";

export default {
  components: {
    NavigationMenu,
  },
  data() {
    return {
      currentPage: 1, // Página inicial
      totalPages: 3, // Total de páginas
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
    },
  },
};
</script>

<style scoped>
.unit-tests-page {
  font-family: "Arial", sans-serif;
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

ol,
ul {
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
  font-family: "Courier New", monospace;
  font-size: 1.2rem;
}

section {
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

section p,
section ol {
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

  p,
  ol {
    font-size: 1rem;
  }

  pre {
    padding: 15px;
  }
}
</style>
