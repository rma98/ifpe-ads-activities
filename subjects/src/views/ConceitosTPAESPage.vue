<template>
    <div class="container">
        <h1 class="title">
            <font-awesome-icon :icon="['fas', 'project-diagram']" class="icon" /> Tópicos Avançados em Engenharia de
            Software
        </h1>

        <div class="grid-layout">
            <div v-for="(item, index) in perguntasRespostas" :key="index" class="card">
                <h2 class="question">
                    <font-awesome-icon :icon="['fas', 'question-circle']" class="icon-question" /> {{ item.pergunta }}
                </h2>
                <p class="answer">{{ item.resposta }}</p>
            </div>
        </div>

        <div class="section">
            <h2>
                <font-awesome-icon :icon="['fas', 'tasks']" class="icon" /> Aplicação Prática do Scrum
            </h2>
            <p style="font-size: 1.7rem; margin-bottom: 2rem;">Scrum é uma estrutura ágil amplamente utilizada no
                desenvolvimento de software. Sua aplicação prática
                envolve eventos importantes e papéis fundamentais dentro do time.</p>

            <div class="grid-layout">
                <div class="sub-card" v-for="(item, index) in scrumDetalhes" :key="index">
                    <h3>
                        <font-awesome-icon :icon="item.icone" class="icon" /> {{ item.titulo }}
                    </h3>
                    <p>{{ item.descricao }}</p>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>
                <font-awesome-icon :icon="['fas', 'clipboard-list']" class="icon" /> Backlogs no Scrum e Daily Stand-ups
            </h2>
            <div class="grid-layout">
                <div class="sub-card">
                    <h3><font-awesome-icon :icon="['fas', 'list-ul']" class="icon" /> Backlog do Produto</h3>
                    <p>Lista priorizada de todas as funcionalidades, melhorias e correções que devem ser desenvolvidas
                        ao longo do projeto.</p>
                </div>
                <div class="sub-card">
                    <h3><font-awesome-icon :icon="['fas', 'tasks']" class="icon" /> Backlog da Sprint</h3>
                    <p>Conjunto de itens selecionados do backlog do produto que serão trabalhados durante uma Sprint
                        específica.</p>
                </div>
                <div class="sub-card">
                    <h3><font-awesome-icon :icon="['fas', 'users']" class="icon" /> Daily Stand-ups vs Daily Scrum</h3>
                    <p>Daily Scrum e Daily Stand-ups são essencialmente o mesmo evento: reuniões diárias curtas (até 15
                        minutos) para alinhar o progresso da equipe e identificar impedimentos.</p>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>
                <font-awesome-icon :icon="['fas', 'search']" class="icon" /> Técnicas de Elucidação de Requisitos
            </h2>
            <p style="font-size: 1.7rem; margin-bottom: 2rem;">Para coletar e entender os requisitos de um sistema,
                várias técnicas podem ser aplicadas, dependendo do
                contexto do projeto.</p>
            <div class="grid-layout">
                <div class="sub-card" v-for="(item, index) in tecnicasRequisitos" :key="index">
                    <h3>
                        <font-awesome-icon :icon="item.icone" class="icon" /> {{ item.titulo }}
                    </h3>
                    <p>{{ item.descricao }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const perguntasRespostas = [
    {
        pergunta: "Elabore um diagrama conceitual de uma empresa de vendas de passagens de ônibus.",
        resposta: "O diagrama conceitual define entidades como Passageiro, Passagem, Ônibus, Motorista, Rota e Pagamento, junto com seus relacionamentos. Pode ser feito usando Graphviz, MySQL Workbench ou ferramentas visuais como Draw.io."
    },
    {
        pergunta: "Quais principais técnicas de elucidações de requisitos?",
        resposta: "As principais técnicas incluem entrevistas, questionários, brainstorming, análise de documentos, prototipação e observação direta do usuário."
    },
    {
        pergunta: "Descreva características importantes das metodologias ágeis e Scrum.",
        resposta: "Metodologias ágeis priorizam entrega contínua, colaboração e adaptação. O Scrum divide o desenvolvimento em Sprints curtas, com reuniões diárias e revisão frequente dos resultados."
    },
    {
        pergunta: "Explique sobre testes de aceitação e de sistemas.",
        resposta: "Testes de aceitação garantem que o sistema atende aos requisitos do cliente, enquanto testes de sistemas verificam a integração e funcionamento de todas as partes. Ferramentas como Selenium e TestRail podem ser usadas."
    },
    {
        pergunta: "Qual a diferença entre o teste caixa preta e caixa branca?",
        resposta: "O teste caixa preta avalia a funcionalidade sem conhecer o código interno. O teste caixa branca verifica a lógica interna do código-fonte, garantindo que cada caminho de execução funcione corretamente."
    }
];

const scrumDetalhes = [
    { titulo: "Sprint Planning", icone: ['fas', 'clipboard-list'], descricao: "Reunião inicial para planejar o backlog da Sprint." },
    { titulo: "Daily Scrum", icone: ['fas', 'sync-alt'], descricao: "Reuniões diárias curtas para acompanhar o progresso." },
    { titulo: "Sprint Review", icone: ['fas', 'eye'], descricao: "Demonstração dos incrementos desenvolvidos na Sprint." },
    { titulo: "Sprint Retrospective", icone: ['fas', 'redo'], descricao: "Discussão sobre melhorias para a próxima Sprint." },
    { titulo: "Scrum Master", icone: ['fas', 'user-shield'], descricao: "Facilitador que ajuda a equipe a seguir os princípios do Scrum." },
    { titulo: "Product Owner", icone: ['fas', 'user-tie'], descricao: "Responsável por definir e priorizar o backlog do produto." },
    { titulo: "Time de Desenvolvimento", icone: ['fas', 'users'], descricao: "Equipe responsável pela entrega dos incrementos do produto." }
];

const tecnicasRequisitos = [
    { titulo: "Entrevistas", icone: ['fas', 'comments'], descricao: "Conversas diretas com stakeholders para entender suas necessidades." },
    { titulo: "Questionários", icone: ['fas', 'file-alt'], descricao: "Coleta de dados estruturada através de formulários escritos." },
    { titulo: "Brainstorming", icone: ['fas', 'lightbulb'], descricao: "Sessões colaborativas para gerar ideias e requisitos inovadores." },
    { titulo: "Análise de Documentos", icone: ['fas', 'folder-open'], descricao: "Revisão de documentação existente para extrair requisitos." },
    { titulo: "Prototipação", icone: ['fas', 'drafting-compass'], descricao: "Criação de versões preliminares do sistema para validação com usuários." },
    { titulo: "Observação Direta", icone: ['fas', 'eye'], descricao: "Acompanhamento do usuário em seu ambiente para identificar necessidades reais." }
];
</script>

<style scoped>
.container {
    max-width: 1100px;
    margin: auto;
    padding: 20px;
    font-family: Arial, sans-serif;
}

.title {
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.grid-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 2rem;
}

.card,
.sub-card {
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
}

.card:hover,
.sub-card:hover {
    transform: scale(1.02);
}

.icon {
    font-size: 22px;
    color: #007bff;
}

h2,
h3 {
    font-size: 2rem;
    padding: 1rem;
}

p {
    font-size: 1.5rem;

}
</style>