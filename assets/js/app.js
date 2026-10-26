(function(){
const $=s=>document.querySelector(s);
const projects=window.APPS,P=id=>projects.find(p=>p.id===id);
// overlay aplikacji
const ov=$('#ov');
function lum(h){const n=parseInt(h.slice(1),16),r=n>>16,g=n>>8&255,b=n&255;return(.299*r+.587*g+.114*b)/255}
function openApp(p,x,y){
 const dark=lum(p.bg)<.62,ic=dark?'#fff':'#0a0a0a';
 ov.style.cssText=`--c:${p.bg};--c2:${p.a1};--c3:${p.a2};--ic:${ic};--x:${x}px;--y:${y}px`;
 const web=p.web,L=[['App Store ↗',p.url,'p'],['Strona aplikacji ↗',web,''],['Prywatność ↗',web+'privacy.html',''],['Wsparcie ↗',web+'support.html','']];
 $('#sc').innerHTML=`<div class="gr"><div>${p.icon?`<img class="ico" src="${p.icon}" alt="">`:''}<span class="mono">${p.cat} · ${p.platforms}</span><h2>${p.name}</h2><p class="tg">${p.tag}</p><p class="ds">${p.desc}</p>${p.feats?`<ul>${p.feats.map(f=>`<li>${f}</li>`).join('')}</ul>`:''}<div class="lk">${L.map(l=>`<a class="${l[2]}" href="${l[1]}" target="_blank" rel="noopener">${l[0]}</a>`).join('')}</div></div><div class="ph">${p.shot?`<img src="${p.shot}" alt="Zrzut ekranu aplikacji ${p.name}">${p.shot2?`<img src="${p.shot2}" alt="">`:''}`:`<div class="fb">${p.name[0]}</div>`}</div></div>`;
 $('#sc').scrollTop=0;ov.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';requestAnimationFrame(()=>requestAnimationFrame(()=>ov.classList.add('show')))}
function closeApp(){ov.classList.remove('show');ov.setAttribute('aria-hidden','true');document.body.style.overflow=''}
$('#cl').onclick=closeApp;addEventListener('keydown',e=>{if(e.key==='Escape')closeApp()});
$('#grid').onclick=e=>{const a=e.target.closest('.pc');if(a){e.preventDefault();openApp(P(a.dataset.id),e.clientX,e.clientY)}};
// rolka: karty zrzutów
const shots=['kierbud','kwity','mounda','50groszy','obiadki'].map(P);
const pos=[[0,2,31,46],[34,0,31,46],[68,4,31,46],[14,52,31,46],[50,52,31,46]];
$('#cds').insertAdjacentHTML('afterbegin',shots.map((p,i)=>`<div class="c" style="left:${pos[i][0]}%;top:${pos[i][1]}%;width:${pos[i][2]}%;height:${pos[i][3]}%"><img src="${p.shot}" alt="Zrzut ekranu aplikacji ${p.name}"></div>`).join(''));
const cs=[...document.querySelectorAll('#cds .c')],reel=$('#reel');
const hs=['Od pomysłu do aplikacji','Prototyp, który można wziąć do ręki','Kod pisany z agentami, sprawdzany przez developera','Aplikacja w App Store'];
let hi=-1;
function upd(){const r=reel.getBoundingClientRect(),p=Math.max(0,Math.min(1,-r.top/(reel.offsetHeight-innerHeight)));
 cs.forEach((c,i)=>{const k=Math.max(0,Math.min(1,p*cs.length*1.1-i*.9));c.style.opacity=k;c.style.transform=`translateY(${(1-k)*80}px) scale(${.7+.3*k})`});
 const s=Math.min(hs.length-1,Math.floor(p*hs.length));if(s!==hi){hi=s;$('#rh').textContent=hs[s];[...$('#dots').children].forEach((d,k)=>d.classList.toggle('on',k<=s))}}
addEventListener('scroll',()=>requestAnimationFrame(upd),{passive:true});upd();

// hero: animacja AI + Dev
const apps=['kwity','mounda','50groszy','kierbud','obiadki','kajet'].map(P);
const code=['<span class="kw">struct</span> HomeView: <span class="kw">View</span> {','  <span class="kw">@State var</span> items: [Item] = []','  <span class="kw">var</span> body: <span class="kw">some View</span> {','    List(items) { ItemRow($0) }','  }','}','<span class="d">// agent pisze, developer zatwierdza</span>','<span class="ok">✔ testy zielone</span>'].join('\n');
const K=[...document.querySelectorAll('.k4')],tp=$('#tp'),names=['Wymagania','Prototyp','Kod','Premiera'];let ai=0,tm=[];
const at=(f,ms)=>tm.push(setTimeout(f,ms));
function typeCode(){const plain=code.replace(/<[^>]+>/g,'');let n=0;const tick=()=>{n+=3;let c=0,out='',i=0;while(i<code.length&&c<n){if(code[i]==='<'){const j=code.indexOf('>',i);out+=code.slice(i,j+1);i=j+1;continue}out+=code[i];c++;i++}
 const op=(out.match(/<span/g)||[]).length-(out.match(/<\/span>/g)||[]).length;tp.innerHTML=out+'</span>'.repeat(Math.max(0,op))+'<span class="cur"></span>';if(c<plain.length)at(tick,28)};tick()}
function act(i){K.forEach((k,j)=>{k.classList.toggle('on',j===i);k.classList.toggle('dn',j<i)});$('#st').textContent=names[i];[...$('#pg').children].forEach((d,j)=>d.classList.toggle('on',j<=i))}
function cycle(){const a=apps[ai%apps.length];
 $('#gl').style.setProperty('--g',a.a1);$('#stage').style.setProperty('--g',a.a1);$('#an').textContent=a.name;
 K.forEach(k=>k.classList.remove('on','dn'));document.querySelectorAll('.ck').forEach(c=>c.classList.remove('on'));$('#wf').classList.remove('on','col');tp.innerHTML='';
 const ri=$('#ri');ri.style.transition='none';ri.closest('.k4').classList.remove('on','dn');void ri.offsetWidth;ri.style.transition='';ri.src=a.shot;ri.alt='Zrzut ekranu aplikacji '+a.name;$('#bi').src=a.icon||'';$('#bn').textContent=a.name+' — dostępna';
 act(0);document.querySelectorAll('.ck').forEach((c,j)=>at(()=>c.classList.add('on'),500+j*550));
 at(()=>{act(1);$('#wf').classList.add('on')},3000);at(()=>$('#wf').classList.add('col'),4300);
 at(()=>{act(2);typeCode()},5600);
 at(()=>act(3),9000);
 at(()=>{ai++;cycle()},13500)}
cycle();
// loader i reveal
addEventListener('load',()=>{setTimeout(()=>$('#ld').classList.add('out'),1300);
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.rv').forEach(el=>io.observe(el))});
})();
