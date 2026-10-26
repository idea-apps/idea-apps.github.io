// Wspólne fragmenty treści (bez stylów): każda strona stylizuje klasy r-* po swojemu.
(function () {
  const I = window.IDEA;
  const sym = p => {
    if (/^\d/.test(p.name)) return p.name.slice(0, 2);
    const w = p.name.replace(/\s+/g, '');
    return w[0].toUpperCase() + w[1].toLowerCase();
  };
  const shots = p => [p.shot, p.shot2].filter(Boolean).map(s => `<img class="r-shot" src="${s}" alt="${p.name}" loading="lazy">`).join('');
  const R = {
    sym, shots,
    plat: p => p.platforms.split(' · ').map(x => `<span class="r-chip">${x}</span>`).join(''),
    appBody(p, o = {}) {
      const sh = o.noShots ? '' : (shots(p) ? `<div class="r-shots">${shots(p)}</div>` : '');
      return `<p class="r-tag">${p.tag}</p><p class="r-ds">${p.desc}</p>
<p class="r-who"><b>Dla kogo:</b> ${p.who || ''}</p>
<ul class="r-ft">${(p.feats || []).map(f => `<li>${f}</li>`).join('')}</ul>${sh}
<div class="r-meta">${R.plat(p)}</div>
<a class="r-cta" href="${p.url}" target="_blank" rel="noopener">Zobacz w App Store ↗</a>`;
    },
    steps: () => I.process,
    aiBody: () => `<h4 class="r-aih">${I.ai.t}</h4><p>${I.ai.d}</p>`,
    out: ['Jednostronicowy zakres prac', 'Działający prototyp na Twoim iPhonie', 'Kolejne wersje w TestFlight', 'Szybsza dostawa przy tej samej jakości', 'Aplikacja w App Store', 'Aktualizacje i wsparcie']
  };
  I.R = R;
})();
