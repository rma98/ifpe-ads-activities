<template>
    <div class="container">
        <NavigationMenu />
        <h1>Comandos SQL - JOINs</h1>
        <p>Os comandos JOIN são usados para combinar registros de duas ou mais tabelas com base em uma condição
            relacionada.</p>

        <h2>Tabelas de Exemplo</h2>
        <pre>
  Tabela Pessoa:
  id_pessoa | Nome    | id_endereco
  1         | Léo     | 1
  2         | Luciana | 2
  3         | Paulo   | NULL
  
  Tabela Endereco:
  id_endereco | Cidade
  1           | Palmares
  2           | Catende
  3           | Xexeu
      </pre>

        <h2>1️⃣ INNER JOIN</h2>
        <pre>
  SELECT * FROM Pessoa P
  INNER JOIN Endereco E ON P.id_endereco = E.id_endereco;
      </pre>
        <p>Retorna apenas os registros que possuem correspondência nas duas tabelas.</p>

        <h2>🔍 Resultado esperado</h2>
        <pre>
id_pessoa | Nome    | id_endereco | id_endereco | Cidade
-------------------------------------------------------
1         | Léo     | 1           | 1           | Palmares
2         | Luciana | 2           | 2           | Catende
        </pre>
        <ul><li>O Paulo não aparece porque ele não tem um <mark>id_endereco</mark> associado.</li></ul>

        <h2>2️⃣ LEFT JOIN</h2>
        <pre>
  SELECT * FROM Pessoa P
  LEFT JOIN Endereco E ON P.id_endereco = E.id_endereco;
      </pre>
        <p>Retorna todas as pessoas e seus endereços, se existirem.</p>

        <h2>🔍 Resultado esperado</h2>
        <pre>
id_pessoa | Nome    | id_endereco | id_endereco | Cidade
-------------------------------------------------------
1         | Léo     | 1           | 1           | Palmares
2         | Luciana | 2           | 2           | Catende
3         | Paulo   | NULL        | NULL        | NULL
        </pre>
        <ul><li>O Paulo aparece com <mark>NULL</mark> no endereço, pois ele não tem um id_endereco cadastrado.</li></ul>

        <h2>3️⃣ RIGHT JOIN</h2>
        <pre>
  SELECT * FROM Pessoa P
  RIGHT JOIN Endereco E ON P.id_endereco = E.id_endereco;
      </pre>
        <p>Retorna todos os endereços e as pessoas correspondentes, se existirem.</p>

        <h2>🔍 Resultado esperado</h2>
        <pre>
id_pessoa | Nome    | id_endereco | id_endereco | Cidade
-------------------------------------------------------
1         | Léo     | 1           | 1           | Palmares
2         | Luciana | 2           | 2           | Catende
NULL      | NULL    | NULL        | 3           | Xexeu
        </pre>
        <ul><li>O endereço "<strong>Xexeu</strong>" aparece, mesmo sem nenhuma pessoa associada.</li></ul>

        <h2>4️⃣ FULL JOIN</h2>
        <pre>
  SELECT * FROM Pessoa P
  FULL JOIN Endereco E ON P.id_endereco = E.id_endereco;
      </pre>
        <p>Retorna todas as pessoas e todos os endereços, mesmo que não tenham correspondência.</p>

        <h2>🔍 Resultado esperado</h2>
        <pre>
id_pessoa | Nome    | id_endereco | id_endereco | Cidade
-------------------------------------------------------
1         | Léo     | 1           | 1           | Palmares
2         | Luciana | 2           | 2           | Catende
3         | Paulo   | NULL        | NULL        | NULL
NULL      | NULL    | NULL        | 3           | Xexeu
        </pre>
        <ul><li>O Paulo aparece sem endereço (porque não tem um <mark>id_endereco</mark>).</li>
            <li>O endereço "<strong>Xexeu</strong>" aparece sem pessoa associada.</li>
        </ul>
        <p>⚠️ Atenção! O <mark>FULL JOIN</mark> não é suportado pelo MySQL diretamente. Para simulá-lo, podemos usar <mark>LEFT JOIN</mark> + <mark>UNION</mark> + <mark>RIGHT JOIN</mark>.</p>

        <h2>5️⃣ LEFT JOIN com WHERE</h2>
        <pre>
  SELECT * FROM Pessoa P
  LEFT JOIN Endereco E ON P.id_endereco = E.id_endereco
  WHERE E.id_endereco IS NULL;
      </pre>
        <p>Retorna apenas as pessoas que não têm um endereço associado.</p>

        <h2>🔍 Resultado esperado</h2>
        <pre>
id_pessoa | Nome    | id_endereco   
----------------------------------
3         | Paulo   | NULL           
        </pre>

        <h2>6️⃣ RIGHT JOIN com WHERE</h2>
        <pre>
  SELECT * FROM Pessoa P
  RIGHT JOIN Endereco E ON P.id_endereco = E.id_endereco
  WHERE P.id_pessoa IS NULL;
      </pre>
        <p>Retorna apenas os endereços que não possuem uma pessoa associada.</p>

        <h2>🔍 Resultado esperado</h2>
        <pre>
id_pessoa | Cidade    
------------------
3         | Xexeu           
        </pre>

        <h2>7️⃣ Pessoas e seus endereços, mas mostrando ‘Sem Endereço’ onde for NULL</h2>
        <pre>
SELECT P.Nome, COALESCE(E.Rua, 'Sem Endereço') AS Endereco
FROM Pessoa P 
LEFT JOIN Endereco E ON P.id_endereco = E.id_endereco;
        </pre>

        <h2>🔍 Resultado esperado</h2>
        <pre>
Nome    | Endereco 
--------------------
Léo     | Palmares
Luciana | Catende
Paulo   | Sem Endereço
        </pre>
        <ul><li>Usa <mark>COALESCE()</mark> para substituir <mark>NULL</mark> por "Sem Endereço".</li></ul>

        <h2>8️⃣ Contando quantas pessoas têm cada endereço</h2>
        <pre>
SELECT E.Rua, COUNT(P.id_pessoa) AS TotalPessoas
FROM Pessoa P 
RIGHT JOIN Endereco E ON P.id_endereco = E.id_endereco
GROUP BY E.Rua;
        </pre>

        <h2>🔍 Resultado esperado</h2>
        <pre>
Cidade       | TotalPessoas 
----------------------------
Palmares     | 1
Catende      | 1
Xexeu        | 0
        </pre>
    </div>
</template>

<script setup>
import NavigationMenu from "../components/NavigationMenu.vue";
</script>

<style scoped>
.container {
    max-width: 900px;
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
    color: #272822;
}

mark {
    padding: .3rem;
    border-radius: 5px;
    background-color: #424242;
    color: #fff;
}

p,
li {
    font-size: 18px;
}

pre {
    background: #272822;
    color: #f8f8f2;
    padding: 15px;
    margin-bottom: 2rem;
    border-radius: 5px;
    overflow-x: auto;
    font-size: 16px;
}
</style>