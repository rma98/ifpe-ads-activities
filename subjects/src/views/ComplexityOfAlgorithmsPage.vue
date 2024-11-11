<template>
  <div class="container">
    <h1><i class="fas fa-cogs"></i> Complexidade de Algoritmos: Uma Abordagem Matemática</h1>
    <p>
      A complexidade de algoritmos é uma medida matemática que avalia a eficiência de um algoritmo em termos de tempo e espaço. Ela nos ajuda a entender o comportamento de um algoritmo à medida que o tamanho da entrada aumenta.
    </p>
    <p>
      O conceito de complexidade é expresso principalmente na forma de <span class="math">O(n)</span> (complexidade de tempo) e <span class="math">O(1)</span> (complexidade de espaço), onde <span class="math">n</span> representa o tamanho da entrada.
    </p>

    <div class="iframe-grid">
      <div class="iframe-container">
        <iframe
          src="https://gamma.app/embed/qejokrps7vzw1ww"
          title="Complexidade de Algoritmos: Uma Abordagem Matemática"
          allow="fullscreen"
        ></iframe>
      </div>
      <div class="iframe-container">
        <iframe
          src="https://www.youtube.com/embed/UQzCFkRbIrE?si=-uNDXNZ7sZzoj5p5"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div class="iframe-container">
        <iframe
          src="https://www.loom.com/embed/622e29ca9ecb4425a4c3f978203d7f21?sid=75009003-56fe-4eba-8ca5-b66934b2ea13"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <div class="documentation">
      <a
        href="https://gamma.app/docs/Complexidade-de-Algoritmos-Uma-Abordagem-Matematica-qejokrps7vzw1ww"
        target="_blank"
      >
        <i class="fas fa-book"></i> Acesse a documentação completa
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComplexidadeAlgoritmos',
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  width: 100%;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
}

.container:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

h1 {
  font-size: 2rem;
  color: #007acc;
  text-align: center;
  margin-bottom: 16px;
}

p {
  font-size: 1.6rem;
  line-height: 1.6;
  margin-bottom: 16px;
}

.math {
  font-family: "Courier New", Courier, monospace;
  color: #d63384;
  background-color: #f8f9fa;
  padding: 2px 6px;
  border-radius: 4px;
}

/* Grid layout para iframes */
.iframe-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.iframe-container {
  position: relative;
  padding-bottom: 56.25%; /* Aspect ratio 16:9 */
  height: 0;
  overflow: hidden;
}

.iframe-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.documentation {
  text-align: center;
  margin-top: 20px;
}

.documentation a {
  color: #007acc;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.6rem;
  transition: color 0.3s;
}

.documentation a:hover {
  color: #005b99;
}

/* Responsividade */
@media (max-width: 600px) {
  .container {
    padding: 15px;
  }
}
</style>
