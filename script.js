/*
 * Simple copywriter agent for the ScaleBase website.
 *
 * This agent contains arrays of killer headlines, taglines and sublines.
 * On page load it randomly selects one set and updates the hero section.
 * The goal is to mimic the behaviour of a copywriter generating engaging
 * marketing messages without needing any external API calls.
 */

const copywriterAgent = {
  headlines: [
    'Inove. Escale. Conquiste.',
    'Cresça sem limites com tecnologia de ponta',
    'Seu próximo nível começa aqui',
  ],
  taglines: [
    'Impulsione sua empresa com soluções personalizadas que automatizam e aceleram processos.',
    'Chegue mais longe com performance robusta, automação inteligente e segurança máxima.',
    'Transforme dados em resultados e garanta vantagem competitiva em cada etapa.',
  ],
  sublines: [
    'Resultados reais. Preços transparentes. Sem amarras.',
    'Suporte dedicado para cada fase do seu crescimento.',
    'Tecnologia que se adapta à sua visão de futuro.',
  ],
  /**
   * Seleciona aleatoriamente uma mensagem de cada categoria.
   * @returns {{headline: string, tagline: string, sub: string}}
   */
  generateHeroCopy() {
    const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
    return {
      headline: random(this.headlines),
      tagline: random(this.taglines),
      sub: random(this.sublines),
    };
  },
};

// Aplica a cópia gerada quando o DOM estiver pronto
window.addEventListener('DOMContentLoaded', () => {
  const heroH1 = document.querySelector('.hero-content h1');
  const heroP = document.querySelector('.hero-content p');
  const heroSub = document.querySelector('.hero-subtext');
  if (heroH1 && heroP && heroSub) {
    const copy = copywriterAgent.generateHeroCopy();
    heroH1.innerHTML = copy.headline;
    heroP.innerHTML = copy.tagline;
    heroSub.innerHTML = copy.sub;
  }
});