(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  // Ano no rodapé
  $('#ano').textContent = new Date().getFullYear();

  // Menu mobile
  const btn = $('.menu-btn');
  const nav = $('#menu');
  const fechar = () => {
    nav.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  };
  btn.addEventListener('click', () => {
    const abrir = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', abrir);
    btn.setAttribute('aria-expanded', String(abrir));
  });
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) fechar(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') fechar(); });
  window.matchMedia('(min-width: 721px)').addEventListener('change', fechar);

  // Link ativo conforme a seção visível
  const links = $$('.nav a');
  const secoes = links.map((a) => $(a.getAttribute('href')));
  const obs = new IntersectionObserver((itens) => {
    itens.forEach((i) => {
      if (!i.isIntersecting) return;
      links.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + i.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  secoes.forEach((s) => s && obs.observe(s));

  // Botão de voltar ao topo
  const topo = $('#topo');
  const atualizaTopo = () => topo.classList.toggle('is-on', window.scrollY > 600);
  window.addEventListener('scroll', atualizaTopo, { passive: true });
  atualizaTopo();
  topo.addEventListener('click', () => window.scrollTo({ top: 0 }));

  // Texto digitado no título
  const alvo = $('#digita');
  const frases = ['Front-End', 'Back-End', 'em JavaScript', 'em PHP', 'em Java', 'em MySQL'];
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let f = 0, c = frases[0].length, apagando = false;
  const passo = () => {
    const frase = frases[f];
    alvo.textContent = frase.slice(0, c);
    let espera = apagando ? 45 : 90;
    if (!apagando && c === frase.length) { apagando = true; espera = 1400; }
    else if (apagando && c === 0) { apagando = false; f = (f + 1) % frases.length; espera = 350; }
    else c += apagando ? -1 : 1;
    setTimeout(passo, espera);
  };
  setTimeout(passo, 1800);
})();
