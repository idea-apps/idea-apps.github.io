// Wspólne, czytelne komponenty: szuflada aplikacji, panele (Jak pracuję, Usługi, Kontakt, O mnie) i dolny pasek.
(function () {
  const css = `
.ix *{box-sizing:border-box}
.ix-ov{position:fixed;inset:0;z-index:9000;background:rgba(8,8,14,.5);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);opacity:0;pointer-events:none;transition:opacity .3s}
.ix-ov.on{opacity:1;pointer-events:auto}
.ix-dr{position:fixed;top:0;right:0;bottom:0;width:min(560px,100vw);background:#fff;color:#16161c;z-index:9001;transform:translateX(105%);transition:transform .5s cubic-bezier(.2,.9,.2,1);display:flex;flex-direction:column;font:17px/1.55 -apple-system,BlinkMacSystemFont,"SF Pro Text",Helvetica,sans-serif;box-shadow:-30px 0 80px rgba(0,0,0,.35);-webkit-font-smoothing:antialiased}
.ix-dr.on{transform:none}
.ix-dr .hd{background:var(--ap);color:#fff;padding:26px 28px 24px;position:relative;flex:none}
.ix-dr .hd::after{content:"";position:absolute;inset:0;background:linear-gradient(160deg,rgba(255,255,255,.18),transparent 60%);pointer-events:none}
.ix-dr .hd>*{position:relative;z-index:1}
.ix-dr .top{display:flex;gap:16px;align-items:center}
.ix-dr .ic{width:76px;height:76px;border-radius:23%;object-fit:cover;display:grid;place-items:center;font:800 36px sans-serif;color:#fff;box-shadow:0 10px 26px rgba(0,0,0,.3);flex:none}
.ix-dr .cat{font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;opacity:.88}
.ix-dr h2{font-size:38px;line-height:1;letter-spacing:-.04em;font-weight:800;margin:3px 0 0}
.ix-dr .who{margin-top:14px;font-size:15px;opacity:.95}
.ix-dr .who b{font-weight:700}
.ix-dr .x{position:absolute;top:14px;right:16px;z-index:3;width:38px;height:38px;border-radius:50%;border:0;background:rgba(0,0,0,.28);color:#fff;font-size:22px;cursor:pointer;line-height:1}
.ix-dr .x:hover{background:rgba(0,0,0,.45)}
.ix-dr .bd{flex:1;overflow:auto;padding:26px 28px 20px}
.ix-dr .tag{font-size:26px;line-height:1.15;letter-spacing:-.03em;font-weight:800;margin-bottom:12px}
.ix-dr .ds{font-size:18px;color:#32323c;margin-bottom:20px}
.ix-dr h4{font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:#7a7a88;margin:6px 0 10px}
.ix-dr ul{list-style:none;margin:0 0 22px;padding:0}
.ix-dr li{position:relative;padding:9px 0 9px 32px;border-bottom:1px solid #eeeef2;font-size:17px}
.ix-dr li::before{content:"✓";position:absolute;left:0;top:9px;width:22px;height:22px;border-radius:50%;background:var(--ap);color:#fff;font-size:13px;font-weight:800;display:grid;place-items:center}
.ix-dr .shots{display:flex;gap:12px;overflow-x:auto;margin:0 -28px 22px;padding:2px 28px 6px;scroll-snap-type:x mandatory}
.ix-dr .shots img{height:420px;width:auto;border-radius:22px;box-shadow:0 0 0 1px rgba(0,0,0,.1),0 14px 30px -10px rgba(0,0,0,.35);flex:none;scroll-snap-align:start}
.ix-dr .meta{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:6px}
.ix-dr .meta span{font-size:14px;font-weight:600;padding:5px 13px;border-radius:99px;background:#f0f0f4;color:#3a3a46}
.ix-dr .ft{flex:none;border-top:1px solid #eeeef2;padding:14px 28px 18px;display:flex;gap:10px;align-items:center;background:#fff}
.ix-dr .cta{flex:1;text-align:center;background:var(--ap);color:#fff;font-weight:800;padding:15px 20px;border-radius:99px;font-size:17px;text-decoration:none;transition:.2s}
.ix-dr .cta:hover{filter:brightness(1.1);transform:translateY(-1px)}
.ix-dr .nv{all:unset;cursor:pointer;width:50px;height:50px;border-radius:50%;border:1.5px solid #d6d6de;display:grid;place-items:center;font-size:20px;color:#32323c}
.ix-dr .nv:hover{background:#f2f2f6}
.ix-md{position:fixed;left:50%;top:50%;width:min(920px,calc(100vw - 28px));max-height:calc(100vh - 40px);transform:translate(-50%,-46%) scale(.96);opacity:0;pointer-events:none;transition:.4s cubic-bezier(.2,.9,.2,1);background:#fff;color:#16161c;z-index:9002;border-radius:30px;overflow:auto;font:17px/1.55 -apple-system,BlinkMacSystemFont,"SF Pro Text",Helvetica,sans-serif;box-shadow:0 40px 100px rgba(0,0,0,.5);-webkit-font-smoothing:antialiased}
.ix-md.on{opacity:1;pointer-events:auto;transform:translate(-50%,-50%)}
.ix-md .x{position:sticky;float:right;top:14px;margin:14px 16px 0 0;z-index:3;width:38px;height:38px;border-radius:50%;border:0;background:#eeeef2;font-size:22px;cursor:pointer;line-height:1}
.ix-md .in{padding:34px 40px 40px}
.ix-md .k{font-size:13px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#e8561a}
.ix-md h2{font-size:clamp(32px,4.6vw,52px);line-height:1;letter-spacing:-.045em;font-weight:800;margin:6px 0 12px}
.ix-md .lead{font-size:19px;color:#32323c;max-width:36em;margin-bottom:26px}
.ix-md .st{display:grid;grid-template-columns:230px 1fr;gap:30px}
.ix-md .stl{display:grid;gap:6px;align-content:start}
.ix-md .stl button{all:unset;cursor:pointer;display:flex;gap:12px;align-items:center;padding:11px 14px;border-radius:14px;font-weight:700;font-size:16px;color:#4a4a58;transition:.2s}
.ix-md .stl button i{font-style:normal;width:28px;height:28px;border-radius:50%;background:#eeeef2;display:grid;place-items:center;font-size:13px;font-weight:800;flex:none;transition:.2s}
.ix-md .stl button:hover{background:#f5f5f8}
.ix-md .stl button.on{background:#16161c;color:#fff}
.ix-md .stl button.on i{background:#ffcf3a;color:#16161c}
.ix-md .sth{background:#f6f5f1;border-radius:22px;padding:28px 30px;min-height:280px;display:flex;flex-direction:column;justify-content:center}
.ix-md .sth .n{font-size:84px;font-weight:800;letter-spacing:-.06em;line-height:.8;color:#ffcf3a;-webkit-text-stroke:2px #16161c}
.ix-md .sth h3{font-size:30px;letter-spacing:-.04em;margin:14px 0 8px}
.ix-md .sth p{font-size:18px;color:#32323c}
.ix-md .ai{margin-top:22px;background:linear-gradient(120deg,#16161c,#2a2440);color:#fff;border-radius:22px;padding:24px 28px}
.ix-md .ai h3{font-size:22px;letter-spacing:-.03em;margin-bottom:6px}
.ix-md .ai p{opacity:.88;font-size:16.5px}
.ix-md .sv{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
.ix-md .sv div{background:#f6f5f1;border-radius:20px;padding:22px}
.ix-md .sv b{display:block;font-size:20px;letter-spacing:-.02em;margin-bottom:6px}
.ix-md .sv span{color:#3a3a46;font-size:16.5px}
.ix-md .big{display:inline-block;font-size:clamp(22px,3.6vw,40px);font-weight:800;letter-spacing:-.04em;padding:14px 26px;border-radius:99px;background:#16161c;color:#fff;text-decoration:none;overflow-wrap:anywhere}
.ix-md .big:hover{background:#e8561a}
.ix-md .btn2{all:unset;cursor:pointer;margin-left:10px;font-weight:700;padding:14px 20px;border-radius:99px;border:1.5px solid #cfcfd8}
.ix-md .btn2:hover{background:#f2f2f6}
.ix-md ol.q{padding-left:22px;margin:22px 0 0;color:#32323c;font-size:17px}
.ix-md ol.q li{margin-bottom:6px}
.ix-bar{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);z-index:8000;display:flex;gap:4px;padding:5px;background:rgba(18,18,24,.78);backdrop-filter:blur(18px) saturate(160%);-webkit-backdrop-filter:blur(18px) saturate(160%);border:1px solid rgba(255,255,255,.2);border-radius:99px;box-shadow:0 14px 40px rgba(0,0,0,.4);font:600 15px -apple-system,BlinkMacSystemFont,"SF Pro Text",Helvetica,sans-serif;-webkit-font-smoothing:antialiased}
.ix-bar.top{top:14px;bottom:auto;left:auto;right:16px;transform:none}
.ix-bar.top button{padding:8px 15px;font-size:14px}
.ix-bar button{all:unset;cursor:pointer;color:#fff;padding:10px 18px;border-radius:99px;transition:.2s;white-space:nowrap}
.ix-bar button:hover{background:rgba(255,255,255,.18)}
.ix-bar button.p{background:#ffcf3a;color:#16161c}
.ix-bar button.p:hover{background:#ffd95e}
@media(max-width:700px){.ix-bar.top{left:8px;right:8px;top:auto;bottom:10px;justify-content:center}.ix-dr{top:auto;width:100vw;height:92vh;border-radius:26px 26px 0 0;transform:translateY(105%)}.ix-dr .shots img{height:340px}.ix-md .st{grid-template-columns:1fr}.ix-md .stl{grid-template-columns:repeat(3,1fr)}.ix-md .stl button{padding:8px;font-size:0;justify-content:center}.ix-md .stl button i{font-size:14px}.ix-md .in{padding:22px 20px 28px}.ix-md .sv{grid-template-columns:1fr}.ix-bar button{padding:9px 12px;font-size:14px}.ix-md .sth .n{font-size:60px}}
`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const root = document.createElement('div'); root.className = 'ix';
  root.innerHTML = '<div class="ix-ov" id="ixov"></div><aside class="ix-dr" id="ixdr"></aside><div class="ix-md" id="ixmd"></div>';
  document.body.appendChild(root);
  const $ = s => root.querySelector(s);
  const ov = $('#ixov'), dr = $('#ixdr'), md = $('#ixmd');
  const I = window.IDEA, P = I.projects;
  const deep = c => `color-mix(in srgb,${c} 82%,#101018)`;
  let cur = null, onClose = null, opts = {};

  function closeAll() {
    const was = cur; cur = null;
    ov.classList.remove('on'); dr.classList.remove('on'); md.classList.remove('on');
    if (was !== null && opts.onClose) opts.onClose(was);
  }
  ov.onclick = closeAll;
  addEventListener('keydown', e => {
    if (e.key === 'Escape') closeAll();
    if (dr.classList.contains('on')) {
      if (e.key === 'ArrowRight') nav(1);
      if (e.key === 'ArrowLeft') nav(-1);
    }
  });
  function nav(d) {
    const i = P.findIndex(p => p.id === cur); if (i < 0) return;
    const n = P[(i + d + P.length) % P.length];
    api.app(n, opts);
  }
  const api = {
    close: closeAll,
    app(p, o) {
      md.classList.remove('on'); opts = o || opts || {};
      const was = cur; cur = p.id;
      const icon = p.icon ? `<img class="ic" src="${p.icon}" alt="">` : `<span class="ic" style="background:${p.color}">${p.name[0]}</span>`;
      const shots = [p.shot, p.shot2].filter(Boolean).map(s => `<img src="${s}" alt="" loading="lazy">`).join('');
      dr.style.setProperty('--ap', deep(p.color));
      dr.innerHTML = `<div class="hd"><button class="x" data-a="close" aria-label="Zamknij">×</button>
        <div class="top">${icon}<div><div class="cat">${p.cat}</div><h2>${p.name}</h2></div></div>
        <div class="who">Dla: <b>${p.who || ''}</b></div></div>
        <div class="bd"><div class="tag">${p.tag}</div><div class="ds">${p.desc}</div>
        ${p.feats ? `<h4>Co potrafi</h4><ul>${p.feats.map(f => `<li>${f}</li>`).join('')}</ul>` : ''}
        ${shots ? `<h4>Jak wygląda</h4><div class="shots">${shots}</div>` : ''}
        <h4>Dostępna na</h4><div class="meta">${p.platforms.split(' · ').map(x => `<span>${x}</span>`).join('')}</div></div>
        <div class="ft"><button class="nv" data-a="prev" aria-label="Poprzednia">‹</button><a class="cta" href="${p.url}" target="_blank" rel="noopener">Zobacz w App Store ↗</a><button class="nv" data-a="next" aria-label="Następna">›</button></div>`;
      ov.classList.add('on'); dr.classList.add('on');
      dr.querySelector('.bd').scrollTop = 0;
      if (opts.onOpen) opts.onOpen(p, was);
    },
    panel(kind) {
      dr.classList.remove('on'); cur = null;
      let h = '';
      if (kind === 'process') {
        h = `<div class="k">Proces</div><h2>Od pomysłu do App Store, w jednych rękach.</h2>
        <p class="lead">Bezpośredni kontakt z osobą, która pisze kod. Nic nie ginie po drodze, a postęp widać na własnym telefonie.</p>
        <div class="st"><div class="stl" id="ixsl">${I.process.map((s, i) => `<button data-i="${i}" class="${i ? '' : 'on'}"><i>${i + 1}</i>${s.t}</button>`).join('')}</div>
        <div class="sth" id="ixsh"></div></div>
        <div class="ai"><h3>${I.ai.t}</h3><p>${I.ai.d}</p></div>`;
      } else if (kind === 'services') {
        h = `<div class="k">Usługi</div><h2>Co mogę dla Ciebie zbudować.</h2><p class="lead">Cztery rodzaje zleceń. Jeśli Twój pomysł leży pomiędzy, napisz, dopasujemy zakres.</p><div class="sv">${I.services.map(s => `<div><b>${s.t}</b><span>${s.d}</span></div>`).join('')}</div>`;
      } else if (kind === 'about') {
        h = `<div class="k">O ideaapps</div><h2>Pracownia aplikacji Apple.</h2><p class="lead">${I.about}</p><div class="sv"><div><b>10+ lat</b><span>iOS, iPadOS i macOS, wcześniej Android</span></div><div><b>8 aplikacji</b><span>własnych, wszystkie w App Store</span></div><div><b>Swift, SwiftUI</b><span>UIKit, AppKit, Core ML, Claude API</span></div><div><b>1 osoba</b><span>od pomysłu po publikację i wsparcie</span></div></div>`;
      } else {
        h = `<div class="k">Kontakt</div><h2>Opowiedz o swoim pomyśle.</h2><p class="lead">Wystarczy kilka zdań. W odpowiedzi przychodzi szczera ocena, także wtedy, gdy projekt nie jest dopasowany.</p>
        <a class="big" href="mailto:${I.email}">${I.email}</a><button class="btn2" id="ixcp">Kopiuj adres</button>
        <ol class="q"><li>Co to ma robić i dla kogo?</li><li>Na jakie urządzenia: iPhone, iPad, Mac?</li><li>Masz już projekt, prototyp albo aplikację do poprawy?</li></ol>`;
      }
      md.innerHTML = `<button class="x" data-a="close">×</button><div class="in">${h}</div>`;
      ov.classList.add('on'); md.classList.add('on'); md.scrollTop = 0;
      if (kind === 'process') {
        const show = i => { const s = I.process[i]; md.querySelector('#ixsh').innerHTML = `<div class="n">${String(i + 1).padStart(2, '0')}</div><h3>${s.t}</h3><p>${s.d}</p>`; md.querySelectorAll('#ixsl button').forEach((b, k) => b.classList.toggle('on', k === i)); };
        show(0); md.querySelector('#ixsl').onclick = e => { const b = e.target.closest('button'); if (b) show(+b.dataset.i); };
        let t = 0; clearInterval(window._ixp); window._ixp = setInterval(() => { if (!md.classList.contains('on')) return clearInterval(window._ixp); t = (t + 1) % I.process.length; show(t); }, 6500);
        md.querySelector('#ixsl').addEventListener('click', () => clearInterval(window._ixp));
      }
      const cp = md.querySelector('#ixcp');
      if (cp) cp.onclick = () => { navigator.clipboard && navigator.clipboard.writeText(I.email).catch(() => { }); cp.textContent = 'Skopiowano ✓'; };
    },
    bar(items, pos) {
      const b = document.createElement('div'); b.className = 'ix-bar ix' + (pos === 'top' ? ' top' : '');
      const list = items || [['process', 'Proces'], ['services', 'Usługi'], ['about', 'O nas'], ['contact', 'Kontakt', 'p']];
      b.innerHTML = list.map(([k, n, c]) => `<button data-k="${k}" class="${c || ''}">${n}</button>`).join('');
      b.onclick = e => { const x = e.target.closest('button'); if (x) api.panel(x.dataset.k); };
      document.body.appendChild(b); return b;
    },
    opts(o) { opts = o || {}; }
  };
  root.addEventListener('click', e => {
    const a = e.target.closest('[data-a]'); if (!a) return;
    if (a.dataset.a === 'close') closeAll();
    if (a.dataset.a === 'next') nav(1);
    if (a.dataset.a === 'prev') nav(-1);
  });
  I.ui = api;
})();
