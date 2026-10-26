// Wspólne dla jasnych stron: nawigacja, reveal, szkielet trio3.
(function(){
 const I=window.IDEA;
 const nav=document.createElement('div');nav.className='nav';
 nav.innerHTML=`<a class="logo" href="#"><i></i>ideaapps</a><div class="l"><a class="h" href="#proces" data-k="process">Proces</a><a class="h" href="#przyklady" data-k="apps">Przykłady</a><button data-k="services">Usługi</button><button class="p" data-k="contact">Napisz →</button></div>`;
 document.body.prepend(nav);
 queueMicrotask(()=>{});
 addEventListener('DOMContentLoaded',()=>{});
 setTimeout(()=>{nav.querySelectorAll('a[data-k]').forEach(a=>{const id=a.getAttribute('href').slice(1);if(!document.getElementById(id)){if(a.dataset.k==='apps'){a.remove();return}const b=document.createElement('button');b.className='h';b.dataset.k=a.dataset.k;b.textContent=a.textContent;a.replaceWith(b)}})},400);
 nav.addEventListener('click',e=>{const b=e.target.closest('[data-k]');if(!b)return;if(b.tagName==='A')return;I.ui.panel(b.dataset.k)});
 I.L={
  trio3:f=>`<div class="trio3">${['you','me','ai'].map(k=>`<div><b><i style="background:${I.who[k].c}"></i>${I.who[k].n}</b><span>${f[k]}</span></div>`).join('')}</div>`,
  reveal(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.rev').forEach(el=>io.observe(el))},
  tint:(c,t)=>`color-mix(in srgb,${c} ${t}%,#fff)`
 };
})();
