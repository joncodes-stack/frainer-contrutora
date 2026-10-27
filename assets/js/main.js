const h=document.querySelector('header');
const links=document.getElementById('links');
const burger=document.getElementById('burger');

// Menu mobile
const setMenu=open=>{
  links.classList.toggle('open',open);
  h.classList.toggle('menu-open',open);
  document.body.classList.toggle('no-scroll',open);
  burger.setAttribute('aria-expanded',open);
  burger.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
};
burger.addEventListener('click',()=>setMenu(!links.classList.contains('open')));
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
addEventListener('resize',()=>{if(innerWidth>900)setMenu(false)});

// Header fica sólido ao rolar
const onScroll=()=>h.classList.toggle('solid',scrollY>60);
addEventListener('scroll',onScroll);onScroll();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const form=document.getElementById('form-contato');
form.addEventListener('submit',e=>{
  e.preventDefault();
  // TODO: integrar com envio real (Formspree, e-mail ou WhatsApp)
  form.querySelector('.ok').style.display='block';
  form.reset();
});
