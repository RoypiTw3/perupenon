/* Perú Peñón — interacción */
(function () {
  const html = document.documentElement;
  const body = document.body;

  /* Preloader: solo la primera vez en la sesión */
  const pre = document.querySelector('.preloader');
  if (pre) {
    if (sessionStorage.getItem('pp-pre')) {
      html.classList.add('no-preloader');
    } else {
      body.classList.add('is-locked');
      window.addEventListener('load', () => {
        setTimeout(() => {
          pre.classList.add('is-done');
          body.classList.remove('is-locked');
          sessionStorage.setItem('pp-pre', '1');
          pre.addEventListener('transitionend', () => pre.remove(), { once: true });
        }, 1500);
      });
    }
  }

  /* Menú */
  const burger = document.querySelector('.header__burger');
  const scrim = document.querySelector('.nav__scrim');
  const toggleMenu = (force) => {
    const open = force !== undefined ? force : !html.classList.contains('is-menu-open');
    html.classList.toggle('is-menu-open', open);
    body.classList.toggle('is-locked', open);
    if (burger) burger.setAttribute('aria-expanded', String(open));
  };
  if (burger) burger.addEventListener('click', () => toggleMenu());
  if (scrim) scrim.addEventListener('click', () => toggleMenu(false));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggleMenu(false); });

  /* Página actual en el menú */
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__links a').forEach((a) => {
    const target = a.getAttribute('href').split('/').pop() || 'index.html';
    if (target === here) a.setAttribute('aria-current', 'page');
  });

  /* Revelado al hacer scroll */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  /* Carrusel de tarjetas */
  document.querySelectorAll('.cards').forEach((wrap) => {
    const track = wrap.querySelector('.cards__track');
    const prev = wrap.querySelector('[data-prev]');
    const next = wrap.querySelector('[data-next]');
    const bar = wrap.querySelector('.cards__bar i');
    if (!track) return;
    const step = () => track.querySelector('.card').getBoundingClientRect().width + 20;
    const update = () => {
      if (!bar) return;
      const max = track.scrollWidth - track.clientWidth;
      const n = track.children.length;
      const visible = Math.max(1, Math.round(track.clientWidth / step()));
      bar.style.width = (visible / n * 100) + '%';
      const p = max > 0 ? track.scrollLeft / max : 0;
      bar.style.transform = `translateX(${p * (100 / (visible / n) - 100)}%)`;
    };
    prev && prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
    next && next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
    track.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });

  /* Formulario de contacto → abre WhatsApp con el mensaje listo */
  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = new FormData(form);
      const msg =
        `Hola, soy ${d.get('nombre')}.\n` +
        `Teléfono: ${d.get('telefono')}\n` +
        `Correo: ${d.get('correo')}\n\n` +
        `${d.get('mensaje')}`;
      window.open('https://wa.me/573107333883?text=' + encodeURIComponent(msg), '_blank', 'noopener');
    });
  }
})();
