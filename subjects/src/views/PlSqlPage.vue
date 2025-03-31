<template>
    <div class="container">
        <NavigationMenu />
        <h1>O que é PL/SQL?</h1>
        <p>
            PL/SQL (Procedural Language for SQL) é uma extensão procedural da linguagem SQL,
            criada pela Oracle, que permite o uso de variáveis, loops e estruturas de controle.
        </p>
        <p>
            PL/SQL é tipo um "superpoder" do SQL dentro do Oracle. Ele permite que você não apenas execute consultas no
            banco de dados, mas também escreva programas completos, com variáveis, loops, condicionais e até mesmo
            tratamento de erros. Ou seja, com PL/SQL você pode automatizar tarefas, criar procedures (procedimentos
            armazenados), triggers (gatilhos) e funções dentro do banco de dados, tornando tudo mais eficiente.
        </p>

        <h2>O que dá para fazer com PL/SQL?</h2>
        <ul>
            <li>Blocos anônimos (código que roda uma única vez, sem salvar no banco)</li>
            <li>Procedures (funções armazenadas que podem ser reutilizadas)</li>
            <li>Functions (funções que retornam valores)</li>
            <li>Triggers (código que executa automaticamente após uma ação no banco)</li>
            <li>Tratamento de exceções (capturar e tratar erros, tipo um try-catch)</li>
            <li>Automatizar tarefas no banco de dados.</li>
            <li>Fazer controle de transações.</li>
            <li>Implementar lógica de negócios dentro do banco de dados.</li>
        </ul>

        <h2>Estrutura de um Bloco PL/SQL</h2>
        <pre>
  DECLARE
      v_texto VARCHAR2(100);
  BEGIN
      v_texto := 'Olá, mundo!';
      DBMS_OUTPUT.PUT_LINE(v_texto);
  END;
      </pre>
        <pre>
  DECLARE
    -- Declaração de variáveis ou objetos
  BEGIN
    -- Comandos executáveis
  EXCEPTION
    -- Tratamento de erros
  END;
      </pre>

        <h2>Exemplo Prático</h2>
        <pre>
  DECLARE
      v_nome VARCHAR2(50);
  BEGIN
      v_nome := 'Robson';
      DBMS_OUTPUT.PUT_LINE('Olá, ' || v_nome || '!');
  END;
      </pre>
        <pre>
        DECLARE 
    v_nome_cliente VARCHAR2(100);
BEGIN
    SELECT nome INTO v_nome_cliente 
    FROM clientes 
    WHERE id = 1;

    DBMS_OUTPUT.PUT_LINE('Nome do cliente: ' || v_nome_cliente);
END;
      </pre>
    </div>
</template>

<script setup>
import NavigationMenu from "../components/NavigationMenu.vue";
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1 {
    color: #2c3e50;
    text-align: center;
}

h2 {
    margin-top: 20px;
    color: #34495e;
}

p,
li {
    font-size: 18px;
}

ul {
    padding-left: 20px;
}

pre {
    background: #272822;
    color: #f8f8f2;
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
    font-size: 16px;
    margin-bottom: 2rem;
}
</style>