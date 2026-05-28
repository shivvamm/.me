// Cursor blob (desktop only)
const blob = document.getElementById('blob');
if (blob && matchMedia('(pointer:fine)').matches) {
  window.addEventListener('mousemove', (e)=>{
    blob.style.left = e.clientX + 'px';
    blob.style.top  = e.clientY + 'px';
  });
  document.querySelectorAll('a, button, .project-card, input, textarea').forEach(el=>{
    el.addEventListener('mouseenter', ()=>{ blob.style.width='60px'; blob.style.height='60px'; blob.style.background='var(--pink)'; });
    el.addEventListener('mouseleave', ()=>{ blob.style.width='24px'; blob.style.height='24px'; blob.style.background='var(--lime)'; });
  });
} else if (blob) { blob.style.display = 'none'; }

// Scroll progress
const prog = document.getElementById('progress');
if (prog) {
  const onScroll = () => {
    const h = document.documentElement;
    const p = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    prog.style.width = p + '%';
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Animated counters
const animateCount = (el) => {
  const target = parseFloat(el.dataset.to);
  const suffix = el.dataset.suffix || '';
  const dur = 1400;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - t, 3);
    const val = Math.round(target * eased);
    el.textContent = (target >= 1000 ? val.toLocaleString() : val) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};
if ('IntersectionObserver' in window) {
  const countIO = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ animateCount(e.target); countIO.unobserve(e.target); } });
  }, { threshold: .4 });
  document.querySelectorAll('.count').forEach(el=>countIO.observe(el));

  // Reveal
  const revealIO = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.style.transition = 'opacity .7s ease, transform .7s ease';
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
        revealIO.unobserve(e.target);
      }
    });
  }, { threshold: .15 });
  document.querySelectorAll('.reveal').forEach(el=>revealIO.observe(el));
}

// GSAP if present (for index hero)
if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);
  if (document.getElementById('h1-l1')) gsap.from('#h1-l1', {y:80, opacity:0, duration:.7, ease:'power3.out'});
  if (document.getElementById('h1-l2')) gsap.from('#h1-l2', {y:80, opacity:0, duration:.7, delay:.1, ease:'power3.out'});
  if (document.getElementById('h1-l3')) gsap.from('#h1-l3', {y:40, opacity:0, duration:.7, delay:.22, ease:'power3.out'});
  gsap.utils.toArray('.project-card').forEach((card, i)=>{
    gsap.from(card, { y:60, opacity:0, duration:.7, delay: i*0.06, ease:'power2.out', scrollTrigger:{ trigger:card, start:'top 88%' } });
  });
}
