<template>
    <div class="container">
        <header>
            <h1>Projeto - Testes</h1>
            <p>Guia de execução e informações do projeto</p>
        </header>
        <nav class="navbar">
            <ul>
                <li><a @click.prevent="scrollToSection('team')" :class="{ 'active': activeLink === 'team' }">Equipe</a>
                </li>
                <li><a @click.prevent="scrollToSection('repos')"
                        :class="{ 'active': activeLink === 'repos' }">Repositórios</a></li>
                <li><a @click.prevent="scrollToSection('tutorial')"
                        :class="{ 'active': activeLink === 'tutorial' }">Guia de Execução</a></li>
                <li><a @click.prevent="scrollToSection('other-info')"
                        :class="{ 'active': activeLink === 'other-info' }">Outras Informações</a></li>
            </ul>
        </nav>
        <section id="team" class="team">
            <h2>Equipe</h2>
            <div class="tela">
                <div>
                    <img class="avatar" src="../assets/img/hiany.png" alt="Hiany Silva">
                    <div class="detalhes">
                        <p>Hiany Silva</p>
                    </div>
                </div>
                <div>
                    <img class="avatar" src="../assets/img/robson.png" alt="Robson Albuquerque">
                    <div class="detalhes">
                        <p>Robson Albuquerque</p>
                    </div>
                </div>
                <div>
                    <img class="avatar" src="../assets/img/vagner.png" alt="Vagner Alves">
                    <div class="detalhes">
                        <p>Vagner Alves</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="repos" class="links">
            <h2>Repositórios</h2>
            <div class="repo">
                <a href="https://github.com/rma98/resourcesManagement" target="_blank">
                    <i class="fas fa-code"></i> Frontend - Cypress
                </a>
            </div>
            <div class="repo">
                <a href="https://github.com/rma98/backend" target="_blank">
                    <i class="fas fa-database"></i> Backend - JUnit
                </a>
            </div>
        </section>
        <section id="tutorial" class="tutorial">
            <h2>Guia de Execução</h2>

            <div class="tutorial-item">
                <h3>Frontend - Cypress</h3>
                <p>
                    Para configurar o projeto do Frontend - Cypress em sua máquina, siga os seguintes passos:
                </p>
                <ol>
                    <li>Clique no link <a href="https://github.com/rma98/resourcesManagement" target="_blank">Frontend -
                            Cypress</a> para baixar o repositório.</li>
                    <li>Após o download, extraia o repositório e abra o diretório <code>resourcesManagement</code> no
                        seu terminal.</li>
                    <li>Entre no diretório <code>gerenciamentoSalas</code> dentro do projeto.</li>
                    <li>Execute o comando <code>npm install</code> para instalar todas as dependências do projeto.</li>
                    <li>Após a instalação, execute o comando <code>npm run dev</code> para rodar o projeto localmente.
                    </li>
                    <li>Para rodar o Cypress, abra outro terminal, mantendo o do projeto local aberto, e execute o
                        comando <code>npm install cypress --save-dev</code> para instalar o Cypress.</li>
                    <li>Para acessar o Cypress, execute o comando <code>npx cypress open</code> no terminal.</li>
                </ol>
            </div>

            <div class="tutorial-item">
                <h3>Backend - JUnit</h3>
                <p>
                    Para configurar o projeto Backend - JUnit, siga os passos abaixo:
                </p>
                <ol>
                    <li>Clique no link <a href="https://github.com/rma98/backend" target="_blank">Backend - JUnit</a>
                        para baixar o repositório.</li>
                    <li>Após o download, extraia o repositório e abra o diretório do projeto no seu terminal.</li>
                    <li>Execute o comando <code>mvn clean install</code> para instalar as dependências e construir o
                        projeto.</li>
                    <li>Para rodar o projeto, execute o comando <code>mvn spring-boot:run</code> no terminal.</li>
                </ol>
            </div>
        </section>
        <section id="other-info" class="other-info">
            <h2>Outras Informações Importantes</h2>

            <div class="info-item">
                <h3>Backend</h3>
                <ul>
                    <li><strong>Banco de Dados:</strong> É necessário criar o banco de dados
                        <code>resourcesmanagement</code> no MySQL. A equipe está utilizando o <strong>MySQL
                            Workbench</strong> para gerenciamento do banco.
                    </li>
                    <li><strong>Lombok:</strong> A dependência <strong>Lombok</strong> é essencial para o projeto
                        Backend. Certifique-se de que o Lombok esteja configurado corretamente em sua máquina para que o
                        projeto funcione como esperado.</li>
                    <li><strong>Cadastro de Usuário:</strong> Ao realizar o cadastro de um novo usuário, a equipe de
                        desenvolvimento recebe um email notificando o novo registro. O usuário cadastrado só poderá
                        realizar o login após aprovação da equipe. Um link de aprovação será enviado por email à equipe,
                        que deve acessar esse link para liberar o acesso do usuário. Até que a aprovação seja feita, o
                        usuário não conseguirá fazer login, mesmo após o cadastro.</li>
                </ul>
            </div>

            <div class="info-item">
                <h3>Frontend</h3>
                <ul>
                    <li><strong>Cypress:</strong> O Cypress exige que o projeto Frontend esteja rodando localmente em
                        sua máquina. Para isso, é necessário abrir dois terminais: um para rodar o frontend com
                        <code>npm run dev</code> e outro para executar o Cypress com <code>npx cypress open</code>.
                    </li>
                    <li><strong>Backend Rodando:</strong> Alguns testes no Cypress, como o teste de <em>login com
                            sucesso</em>, requerem que o backend esteja também rodando localmente. O email e a senha do
                        usuário precisam estar previamente cadastrados no banco de dados para que o teste seja executado
                        com sucesso.</li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "TestGuide",
    data() {
        return {
            activeLink: ''  // Mantém o link ativo
        };
    },
    methods: {
        scrollToSection(section) {
            this.activeLink = section;  // Atualiza o link ativo
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: auto;
    padding: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
}

header {
    padding: 20px;
    border-radius: 10px;
}

p {
    font-size: 1.7rem;
}

/* Estilização do menu */
.navbar {
    background-color: #007acc;
    padding: 10px 0;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.navbar li {
    display: inline-block;
    margin-right: 20px;
}

.navbar li:last-child {
    margin-right: 0;
    /* Remove o espaçamento após o último item */
}

/* Estilo base dos links */
.navbar a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    transition: 0.3s;
}

/* Estilo do link ativo */
.navbar a.active {
    color: #e0e0e0;
    /* Cor do link ativo */
    transform: scale(1.1);
    /* Efeito de zoom no link ativo */
}

/* Efeito de hover para links */
.navbar a:hover {
    color: #e0e0e0;
    transform: scale(1.1);
    cursor: pointer;
}

.team,
.links {
    margin: 20px 0;
}

.team h2 {
    margin-bottom: 1rem;
    font-size: 2rem;
}

.repo {
    margin: 10px 0;
}

.repo a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    background-color: #007acc;
    color: white;
    font-size: 1.7rem;
    padding: 10px;
    border-radius: 5px;
    transition: 0.3s;
}

.repo a:hover {
    background-color: #005f99;
    color: #e0e0e0;
    transform: scale(1.05);
}

i {
    margin-right: 8px;
}

.avatar {
    width: 200px;
    height: 200px;
    border-radius: 0;
    object-fit: cover;
    margin-bottom: 10px;
    transition: transform 0.4s ease, border-radius 0.4s ease, box-shadow 0.4s ease;
    cursor: pointer;
}

.avatar:hover {
    border-radius: 50%;
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
    background-color: hsl(155, 41%, 85%);
}

.detalhes p {
    text-align: center;
    font-size: 1.4rem;
    color: #1C1C1C;
}

.tela {
    display: flex;
    justify-content: center;
    gap: 40px;
}

.tela div {
    margin-left: 20px;
    margin-right: 20px;
}

.tutorial {
    text-align: left;
}

.tutorial h2 {
    font-size: 2rem;
}

.tutorial-item {
    margin-bottom: 20px;
}

.tutorial-item h3 {
    font-size: 1.7rem;
    color: #007acc;
}

.tutorial-item ol {
    padding-left: 20px;
}

.tutorial-item li {
    font-size: 1.7rem;
    margin-bottom: 10px;
}

a {
    color: #007acc;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.other-info {
    text-align: left;
}

.other-info h2 {
    font-size: 2rem;
}

.info-item {
    margin-bottom: 20px;
}

.info-item h3 {
    font-size: 1.7rem;
    color: #007acc;
}

.info-item ul {
    padding-left: 20px;
}

.info-item li {
    font-size: 1.7rem;
    margin-bottom: 10px;
}

code {
    font-family: 'Courier New', Courier, monospace;
    background-color: #f4f4f4;
    padding: 0.2em 0.4em;
    border-radius: 4px;
}

strong {
    font-weight: bold;
}

/* Responsividade para telas menores (como smartphones) */
@media (max-width: 768px) {

    .team h2,
    .links h2 {
        font-size: 1.6rem;
    }

    .navbar li {
        display: block;
        margin-bottom: 10px;
    }

    .navbar a {
        font-size: 1.2rem;
    }

    .repo a {
        font-size: 1.4rem;
        padding: 8px;
    }

    .tela {
        flex-direction: column;
        /* Torna a tela em uma coluna para dispositivos menores */
        align-items: center;
    }

    .tela div {
        margin: 10px 0;
    }

    .avatar {
        width: 150px;
        height: 150px;
    }

    .container {
        padding: 15px;
    }

    p {
        font-size: 1.4rem;
    }

    .tutorial-item {
        padding: 15px;
    }

    .tutorial-item ol li {
        font-size: 1.1rem;
    }

    .tutorial-item h3 {
        font-size: 1.6rem;
    }

    .info-item {
        padding: 15px;
    }

    .info-item ul li {
        font-size: 1.1rem;
    }

    .info-item h3 {
        font-size: 1.6rem;
    }
}

/* Responsividade para telas muito pequenas (como celulares em modo retrato) */
@media (max-width: 480px) {
    .repo a {
        font-size: 1.2rem;
        padding: 6px;
    }

    .avatar {
        width: 120px;
        height: 120px;
    }

    .tela {
        gap: 20px;
    }
}
</style>