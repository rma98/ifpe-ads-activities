<template>
    <div class="container">
        <h1>Guia Rápido de Comandos Git</h1>
        <div v-for="(section, index) in gitCommands" :key="index" class="card">
            <h2><font-awesome-icon :icon="['fas', section.icon]" /> {{ section.title }}</h2>
            <ul>
                <li v-for="(cmd, i) in section.commands" :key="i">
                    <code>{{ cmd }}</code>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFolderPlus, faCodeBranch, faSyncAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faFolderPlus, faCodeBranch, faSyncAlt, faTrash);

export default {
    components: {
        FontAwesomeIcon,
    },
    data() {
        return {
            gitCommands: [
                {
                    title: 'Adicionar um Submódulo',
                    icon: 'fa-folder-plus',
                    commands: [
                        'git submodule add <URL_DO_REPOSITORIO>',
                        'git commit -m "Adicionado submódulo"',
                        'git push origin main'
                    ]
                },
                {
                    title: 'Atualizar um Submódulo',
                    icon: 'fa-sync-alt',
                    commands: [
                        'cd backend - Entre no diretório do submódulo',
                        'git pull origin main',
                        'cd ..',
                        'git add backend',
                        `git commit -m "Atualizado submódulo backend"`,
                        'git push origin main'
                    ]
                },
                {
                    title: 'Remover um Submódulo',
                    icon: 'fa-trash',
                    commands: [
                        'git config -f .gitmodules --remove-section submodule.backend',
                        'git rm --cached backend',
                        'rm -rf backend',
                        'git commit -m "Removido submódulo backend"',
                        `git push origin main`
                    ]
                },
                {
                    title: 'Criar, Trocar e Apagar Branch',
                    icon: 'fa-code-branch',
                    commands: [
                        'git branch nova-branch',
                        'git checkout nova-branch',
                        'git branch -d branch-antiga'
                    ]
                },
                {
                    title: 'Criar e Atualizar um Fork',
                    icon: 'fa-sync-alt',
                    commands: [
                        'git remote add upstream <URL_REPOSITORIO_ORIGINAL>',
                        'git fetch upstream',
                        'git checkout main',
                        'git merge upstream/main',
                        'git push origin main'
                    ]
                },
                {
                    title: 'Apagar Commits Antigos sem Perder os Recentes',
                    icon: 'fa-trash',
                    commands: [
                        'git rebase -i HEAD~N (onde N é o número de commits a revisar)',
                        'Marque "drop" para apagar o commit desejado',
                        'git push --force'
                    ]
                },
                {
                    title: 'Apagar Todos os Commits a Partir de um Ponto',
                    icon: 'fa-trash',
                    commands: [
                        'git reset --hard <ID_COMMIT>',
                        'git push --force'
                    ]
                }
            ]
        };
    }
};
</script>

<style scoped>
.container {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    text-align: center;
}

h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
}

.card {
    background: #fff;
    padding: 15px;
    margin: 10px 0;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

h2 {
    color: #007bff;
    font-size: 18px;
    margin-bottom: 10px;
}

ul {
    list-style: none;
    padding: 0;
}

li {
    background: #f8f9fa;
    padding: 8px;
    margin: 5px 0;
    border-radius: 5px;
    font-family: monospace;
    font-size: 14px;
    overflow-x: auto;
}

code {
    color: #d63384;
}

@media (max-width: 600px) {
    .container {
        padding: 10px;
    }

    h1 {
        font-size: 20px;
    }

    h2 {
        font-size: 16px;
    }
}
</style>