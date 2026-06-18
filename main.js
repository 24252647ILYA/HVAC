'use strict';
const nav=document.getElementById('nav');
const hamburger=document.getElementById('hbg');
const mobileMenu=document.getElementById('mnav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>10);},{passive:true});
hamburger?.addEventListener('click',()=>{
  mobileMenu.classList.toggle('open');
  const s=hamburger.querySelectorAll('span');
  if(mobileMenu.classList.contains('open')){s[0].style.transform='rotate(45deg) translate(4px,4px)';s[1].style.opacity='0';s[2].style.transform='rotate(-45deg) translate(4px,-4px)';}
  else{s.forEach(x=>{x.style.transform='';x.style.opacity='';});}
});
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');hamburger?.querySelectorAll('span').forEach(x=>{x.style.transform='';x.style.opacity='';});}));

const ro=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target);}});},{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.sr,.sr-left,.sr-right').forEach(el=>ro.observe(el));

function animCount(el){
  const t=parseFloat(el.dataset.count),suf=el.dataset.suffix||'',pre=el.dataset.prefix||'',dur=2000,s=performance.now(),isF=String(t).includes('.');
  function u(n){const p=Math.min((n-s)/dur,1),e=1-Math.pow(1-p,3),c=t*e;el.textContent=pre+(isF?c.toFixed(1):Math.round(c))+suf;if(p<1)requestAnimationFrame(u);}
  requestAnimationFrame(u);
}
const co=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){animCount(e.target);co.unobserve(e.target);}});},{threshold:0.5});
document.querySelectorAll('[data-count]').forEach(el=>co.observe(el));

document.querySelectorAll('.faq-item').forEach(item=>{item.addEventListener('click',()=>{const o=item.classList.contains('open');document.querySelectorAll('.faq-item.open').forEach(x=>x.classList.remove('open'));if(!o)item.classList.add('open');});});

const tBtns=document.querySelectorAll('.thermo-btn');
const tTemp=document.getElementById('thermoTemp');
const tMode=document.getElementById('thermoMode');
const tRing=document.getElementById('thermoRingProg');
const modes={cool:{t:72,m:'COOLING',o:150},heat:{t:68,m:'HEATING',o:220},fan:{t:70,m:'FAN ONLY',o:360}};
tBtns?.forEach(btn=>btn.addEventListener('click',()=>{
  tBtns.forEach(b=>b.classList.remove('active'));btn.classList.add('active');
  const m=modes[btn.dataset.mode];if(!m||!tTemp)return;
  const cur=parseInt(tTemp.textContent),diff=m.t-cur;let step=0;
  const iv=setInterval(()=>{step++;tTemp.textContent=Math.round(cur+diff*step/20);if(step>=20)clearInterval(iv);},30);
  if(tMode)tMode.textContent=m.m;if(tRing)tRing.style.strokeDashoffset=m.o;
}));

const bars=document.querySelectorAll('.t-bar');
const hs=[35,55,70,85,60,75,45,90,65,50];
bars.forEach((b,i)=>{function r(){b.style.height=hs[Math.floor(Math.random()*hs.length)]+'%';}setTimeout(r,i*80);setInterval(r,3000+i*150);});

const o1=document.querySelector('.hero-orb-1'),o2=document.querySelector('.hero-orb-2');
window.addEventListener('scroll',()=>{const y=window.scrollY;if(o1)o1.style.transform=`translateY(${y*.3}px)`;if(o2)o2.style.transform=`translateY(${y*.15}px)`;},{passive:true});

document.getElementById('contactForm')?.addEventListener('submit',e=>{
  e.preventDefault();const btn=e.target.querySelector('.submit-btn');const orig=btn.textContent;
  btn.textContent='Sending...';btn.disabled=true;
  setTimeout(()=>{btn.textContent='✓ Request Received — We\'ll Call You Back!';btn.style.background='linear-gradient(135deg,#059669,#047857)';
    setTimeout(()=>{btn.textContent=orig;btn.style.background='';btn.disabled=false;e.target.reset();},4000);},1200);
});

if(window.matchMedia('(pointer:fine)').matches){
  const g=document.createElement('div');
  g.style.cssText='position:fixed;pointer-events:none;z-index:9999;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(11,95,255,0.055) 0%,transparent 70%);transform:translate(-50%,-50%);top:0;left:0;';
  document.body.appendChild(g);
  document.addEventListener('mousemove',e=>{g.style.left=e.clientX+'px';g.style.top=e.clientY+'px';});
}

document.querySelectorAll('.svc-card,.case-card,.testi-card').forEach(c=>{
  c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=((e.clientX-r.left)/r.width-.5)*5,y=((e.clientY-r.top)/r.height-.5)*5;c.style.transform=`perspective(900px) rotateX(${-y}deg) rotateY(${x}deg) translateY(-4px)`;});
  c.addEventListener('mouseleave',()=>{c.style.transform='';});
});
