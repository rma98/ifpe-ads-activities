<template>
    <div>
        <header>
            <h1>Entendendo a Semântica do HTML5</h1>
        </header>

        <nav>
            <ul>
                <li><a href="#main">Conteúdo</a></li>
                <li><a href="#aside">Complementos</a></li>
                <li><a href="#footer">Rodapé</a></li>
            </ul>
        </nav>

        <main id="main">
            <section>
                <h2>O que são tags semânticas?</h2>
                <article>
                    <header>
                        <h3>Visão Geral</h3>
                    </header>
                    <p>Tags semânticas ajudam a descrever o propósito do conteúdo, como <code>&lt;header&gt;</code>,
                        <code>&lt;main&gt;</code> e <code>&lt;footer&gt;</code>.
                    </p>
                </article>

                <article>
                    <header>
                        <h3>Benefícios</h3>
                    </header>
                    <ul class="list-disc list-inside">
                        <li>Melhora acessibilidade</li>
                        <li>Ajuda no SEO</li>
                        <li>Organiza melhor o código</li>
                    </ul>
                </article>
            </section>
        </main>

        <aside id="aside">
            <h4>Links úteis</h4>
            <ul>
                <li><a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element" target="_blank">Referência das
                        tags</a></li>
                <li><a href="https://html5outliner.com" target="_blank">HTML5 Outliner</a></li>
            </ul>
        </aside>

        <footer id="footer">
            <p>&copy; 2025 Robson Albuquerque - Semântica é tudo! 🚀</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: "SemanticsPage"
}
</script>

<style scoped>
/* Reset inicial */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9fafb;
    color: #111827;
    line-height: 1.6;
}

/* HEADER */
header {
    background-color: #1f2937;
    color: white;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* NAV */
nav {
    background-color: #374151;
    padding: 1rem;
}

nav ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    list-style: none;
}

nav a {
    color: #e0f2fe;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
}

nav a:hover {
    color: #3b82f6;
}

/* MAIN */
main {
    max-width: 1000px;
    margin: auto;
    padding: 2rem;
}

section {
    margin-bottom: 3rem;
}

h2 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    color: #1e3a8a;
}

/* ARTICLES */
article {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease;
}

article:hover {
    transform: translateY(-4px);
}

article header h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: #2563eb;
}

/* ASIDE */
aside {
    background-color: #e5e7eb;
    padding: 2rem;
    border-top: 4px solid #3b82f6;
    max-width: 800px;
    margin: auto;
    border-radius: 8px;
}

aside h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #1f2937;
}

aside a {
    color: #2563eb;
    text-decoration: underline;
}

/* FOOTER */
footer {
    background-color: #1f2937;
    color: white;
    padding: 1rem;
    text-align: center;
    font-size: 0.9rem;
    margin-top: 3rem;
}

/* RESPONSIVO */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column;
        align-items: center;
    }

    main,
    aside {
        padding: 1rem;
    }

    h1 {
        font-size: 1.8rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    article {
        padding: 1rem;
    }
}
</style>
