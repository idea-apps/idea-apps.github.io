// Wspólny silnik teł: paleta z koloru aplikacji, animowana aurora, ziarno.
(function () {
  const css = `
.fx-aurora{position:fixed;inset:0;overflow:hidden;background:var(--fd,#0b0b12);transition:background 1.3s cubic-bezier(.3,.7,.2,1);z-index:0}
.fx-aurora i{position:absolute;left:50%;top:50%;width:62vmax;height:62vmax;margin:-31vmax;border-radius:50%;transition:transform 2.2s cubic-bezier(.2,.8,.2,1);will-change:transform}
.fx-aurora i::before{content:"";position:absolute;inset:0;border-radius:50%;background:var(--bc);filter:blur(70px);opacity:.72;transition:background 1.5s ease;animation:fxd var(--dur,22s) ease-in-out infinite alternate}
.fx-aurora i:nth-child(2)::before{animation-delay:-6s}.fx-aurora i:nth-child(3)::before{animation-delay:-11s}.fx-aurora i:nth-child(4)::before{animation-delay:-3s}
@keyframes fxd{0%{transform:translate(-6vmax,-4vmax) scale(1) rotate(0)}50%{transform:translate(5vmax,6vmax) scale(1.14) rotate(40deg)}100%{transform:translate(-3vmax,8vmax) scale(.92) rotate(90deg)}}
.fx-aurora::after{content:"";position:absolute;inset:0;background:radial-gradient(90% 80% at 50% 40%,rgba(6,6,12,.12),rgba(6,6,12,.5))}
.fx-grain{position:fixed;inset:0;z-index:1;pointer-events:none;opacity:.09;mix-blend-mode:overlay;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='180' height='180' filter='url(%23n)'/></svg>")}
`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const hsl = hex => {
    const n = parseInt(hex.slice(1), 16), r = (n >> 16) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
    const mx = Math.max(r, g, b), mn = Math.min(r, g, b), l = (mx + mn) / 2; let h = 0, s = 0;
    if (mx !== mn) {
      const d = mx - mn; s = l > .5 ? d / (2 - mx - mn) : d / (mx + mn);
      h = mx === r ? (g - b) / d + (g < b ? 6 : 0) : mx === g ? (b - r) / d + 2 : (r - g) / d + 4; h *= 60;
    }
    return [Math.round(h), Math.round(s * 100), Math.round(l * 100)];
  };
  const pal = hex => {
    const [h, s, l] = hsl(hex), sat = Math.max(55, Math.min(95, s + 8)), li = Math.max(42, Math.min(62, l));
    return {
      a: `hsl(${h} ${sat}% ${li}%)`,
      b: `hsl(${(h + 24) % 360} ${Math.min(90, sat)}% ${Math.min(62, li + 4)}%)`,
      c: `hsl(${(h + 336) % 360} ${Math.min(85, sat)}% ${Math.max(36, li - 6)}%)`,
      e: `hsl(${(h + 12) % 360} 90% 72%)`,
      d: `hsl(${h} ${Math.min(60, s)}% 7%)`,
      deep: `hsl(${h} ${Math.min(70, s)}% 16%)`
    };
  };
  const spots = [[-26, -22], [30, -14], [-18, 26], [26, 28], [0, 0], [-34, 8], [34, 6], [8, -30]];
  const fx = {
    hsl, pal,
    aurora(parent) {
      const el = document.createElement('div'); el.className = 'fx-aurora'; el.innerHTML = '<i></i><i></i><i></i><i></i>';
      parent = parent || document.body; parent.prepend(el);
      const g = document.createElement('div'); g.className = 'fx-grain'; document.body.appendChild(g);
      const bl = [...el.children]; let k = 0;
      const api = {
        el,
        set(hex, move) {
          const p = pal(hex); el.style.setProperty('--fd', p.d);
          const cols = [p.a, p.b, p.c, p.e];
          bl.forEach((b, i) => { b.style.setProperty('--bc', cols[i]); if (move !== false) { const s = spots[(k + i * 2) % spots.length]; b.style.transform = `translate(${s[0]}vmax,${s[1]}vmax)`; } });
          if (move !== false) k++;
          return p;
        }
      };
      return api;
    }
  };
  fx.mix = (a, b, t) => { const A = parseInt(a.slice(1), 16), B = parseInt(b.slice(1), 16); const ch = (x, s) => Math.round(((x >> s) & 255) * (1 - t) + ((B >> s) & 255) * t); const r = ch(A, 16), g = ch(A, 8), bl = ch(A, 0); return '#' + [r, g, bl].map(v => v.toString(16).padStart(2, '0')).join(''); };
  window.IDEA.fx = fx;
})();
