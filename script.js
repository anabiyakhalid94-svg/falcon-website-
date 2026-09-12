const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const year=document.getElementById('year'); if(year) year.textContent=new Date().getFullYear();

const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.14});
document.querySelectorAll('.reveal,.reveal-card').forEach(el=>observer.observe(el));

const progress=document.querySelector('.scroll-progress');
const parallaxItems=document.querySelectorAll('.parallax');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;if(progress) progress.style.width=`${max>0?(window.scrollY/max)*100:0}%`;const y=window.scrollY;parallaxItems.forEach((el,i)=>{el.style.transform=`translate3d(0,${Math.sin(y*.003+i)*12}px,0)`})},{passive:true});

if(window.matchMedia('(pointer:fine)').matches){document.querySelectorAll('.magnetic').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;el.style.transform=`translate(${x*.08}px,${y*.08}px)`});el.addEventListener('mouseleave',()=>{el.style.transform=''})})}

// Premium cinematic hero: the supplied artwork remains the exact visual base.
(function(){
  const hero=document.querySelector('.hero-art'); if(!hero) return;
  hero.classList.add('falcon-cinematic');
  const scene=document.createElement('div'); scene.className='cinematic-image';
  const sweep=document.createElement('div'); sweep.className='light-sweep';
  const glow=document.createElement('div'); glow.className='glow-breathe';
  const stars=document.createElement('div'); stars.className='stars';
  hero.replaceChildren(scene,sweep,glow,stars);
  const link=document.createElement('link'); link.rel='stylesheet'; link.href='hero-enhance.css'; document.head.appendChild(link);
})();

function submitForm(event){event.preventDefault();const msg=document.getElementById('form-message');if(msg) msg.textContent='Demo form submitted. Connect this form to WhatsApp, email or a form service before publishing.';event.target.reset();return false;}
