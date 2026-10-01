const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const themeBtn=document.getElementById('themeBtn');
const savedTheme=localStorage.getItem('theme');
if(savedTheme==='dark'){document.body.classList.add('dark');themeBtn.textContent='☀';}
themeBtn.addEventListener('click',()=>{
  document.body.classList.toggle('dark');
  const dark=document.body.classList.contains('dark');
  localStorage.setItem('theme',dark?'dark':'light');
  themeBtn.textContent=dark?'☀':'☾';
});

const filters=document.querySelectorAll('.filter');
const cards=document.querySelectorAll('.project-card');
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  const value=btn.dataset.filter;
  cards.forEach(card=>{
    card.style.display=(value==='all'||card.dataset.category===value)?'block':'none';
  });
}));
document.getElementById('year').textContent=new Date().getFullYear();

// Lightweight scroll reveal for a more interactive feel.
const revealItems = document.querySelectorAll('.skill-card,.focus-card,.project-card,.process-card,.timeline-item,.edu-card');
const revealObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
},{threshold:0.12});
revealItems.forEach((el,i)=>{
  el.style.transitionDelay = `${Math.min(i*35,180)}ms`;
  revealObserver.observe(el);
});
