// Wspólne dane dla kierunków taste-skill: treść bezosobowa, bez widełek czasowych.
(function(){
 const I=window.IDEA;
 I.T={
  verbs:['Opisać','Naszkicować','Zbudować','Poprawiać','Sprawdzić','Wydać','Rozwijać'],
  moments:['Najpierw rozmowa.','Potem prototyp.','Następnie budowa.','W trakcie iteracje.','Przed premierą jakość.','Na końcu sklep.','Po premierze rozwój.'],
  faq:[
   ['Czy AI napisze całą aplikację?','AI przyspiesza pracę, ale nie podejmuje decyzji. Agenci kodujący piszą ekrany, testy i tłumaczenia, a developer projektuje architekturę, czyta każdą zmianę i odpowiada za efekt.'],
   ['Kto odpowiada za jakość kodu?','Developer. Każda zmiana jest przeglądana, zanim trafi do produktu, a kod pozostaje czytelny i możliwy do rozwijania także przez innych.'],
   ['Czy kod i pomysł należą do zamawiającego?','Tak. Kod trafia do repozytorium zamawiającego, a prawa do aplikacji są ustalane w umowie na początku.'],
   ['Jak wygląda widoczność postępu?','Na własnym telefonie. Każda iteracja to nowa wersja w TestFlight, którą można wziąć do ręki i skomentować.'],
   ['Co z prywatnością danych?','Projekt zaczyna się od minimum danych, jasnej polityki prywatności i zgodności z wymogami Apple. Tam, gdzie to możliwe, modele AI działają na urządzeniu.'],
   ['Czy można poprawić istniejącą aplikację?','Tak. Pierwszym krokiem jest przegląd kodu: architektura, wydajność, zgodność z nowymi wersjami systemu. Potem plan zmian w małych krokach.']],
  intro:'ideaapps to niezależna pracownia aplikacji Apple. Natywne aplikacje na iOS, iPadOS i macOS powstają od pierwszej rozmowy po App Store.',
  intro2:'Prototypy i kod powstają z pomocą AI, a każda decyzja i każda zmiana jest sprawdzana przez doświadczonego developera. Ponad dziesięć lat pracy z platformami Apple i osiem własnych aplikacji w sklepie.',
  withShot:()=>I.projects.filter(p=>p.shot),
  mail:(txt)=>`mailto:${I.email}?subject=${encodeURIComponent('Pomysł na aplikację')}&body=${encodeURIComponent((txt?('Pomysł: '+txt+'\n\n'):'')+'Kilka zdań o pomyśle:\n')}`
 };
})();
(function(){
 const css='@media(prefers-reduced-motion:no-preference){.rv{opacity:0;transform:translateY(28px);transition:opacity .9s cubic-bezier(.2,.8,.2,1),transform 1s cubic-bezier(.2,.8,.2,1);transition-delay:var(--d,0ms)}.rv.in{opacity:1;transform:none}}';
 const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 if(!window.__noRv)window.addEventListener('load',()=>{
  const sel='section > *:not(.stage), footer > *, .faq .r, .diag .it, .frames a, .ex-row a, .stage-s, .cta > *';
  const els=[...document.querySelectorAll(sel)].filter(e=>e.getBoundingClientRect().top>innerHeight*.9);
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
  els.forEach((e,i)=>{e.classList.add('rv');e.style.setProperty('--d',(i%3)*70+'ms');io.observe(e)});
 });
})();
