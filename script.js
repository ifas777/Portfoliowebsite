document.getElementById('year').textContent = new Date().getFullYear();

  // mobile menu
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

  // typing animation
  const roles = ["MIS Undergraduate", "Business Analyst in Training", "Data & Power BI Enthusiast", "Aspiring Systems Analyst"];
  const el = document.getElementById('typedRole');
  let ri = 0, ci = 0, deleting = false;
  function typeLoop(){
    const current = roles[ri];
    if(!deleting){
      ci++;
      el.textContent = current.slice(0, ci);
      if(ci === current.length){ deleting = true; setTimeout(typeLoop, 1400); return; }
    } else {
      ci--;
      el.textContent = current.slice(0, ci);
      if(ci === 0){ deleting = false; ri = (ri+1) % roles.length; }
    }
    setTimeout(typeLoop, deleting ? 35 : 55);
  }
  typeLoop();

  // scroll reveal
  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('in'); });
  }, {threshold:0.15});
  revealEls.forEach(el => io.observe(el));

  // skill bars fill on view
  const bars = document.querySelectorAll('.bar-fill');
  const barIo = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('filled'); barIo.unobserve(e.target);} });
  }, {threshold:0.4});
  bars.forEach(b => barIo.observe(b));

  // count up stats
  const counters = document.querySelectorAll('.stat .n');
  const countIo = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if(e.isIntersecting){
        const target = parseInt(e.target.dataset.count, 10);
        let cur = 0;
        const step = Math.max(1, Math.ceil(target / 30));
        const iv = setInterval(() => {
          cur += step;
          if(cur >= target){ cur = target; clearInterval(iv); }
          e.target.textContent = cur;
        }, 40);
        countIo.unobserve(e.target);
      }
    });
  }, {threshold:0.5});
  counters.forEach(c => countIo.observe(c));

  // active nav link on scroll
  const sections = document.querySelectorAll('section, header');
  const navLinks = document.querySelectorAll('.nav-link');
  const navIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const id = entry.target.getAttribute('id');
        navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#'+id));
      }
    });
  }, {rootMargin:'-45% 0px -50% 0px'});
  sections.forEach(s => navIo.observe(s));
