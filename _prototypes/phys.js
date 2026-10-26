// Prosta fizyka kół dla prototypów: grawitacja, magnes, nieważkość, kolizje, przeciąganie i rzut.
window.Phys = function (root, opt) {
  const o = Object.assign({ g: .55, mode: 'down', fric: .996, rest: .5, onTap: null, onCollide: null, onDrag: null }, opt);
  const B = [];
  let W = root.clientWidth, H = root.clientHeight;
  const P = { x: -999, y: -999 };
  let drag = null, dpx = 0, dpy = 0, moved = 0, t0 = 0;
  const api = {
    B, o, P,
    get W() { return W }, get H() { return H },
    add(b) { b.vx = b.vx || 0; b.vy = b.vy || 0; b.m = b.m || b.r * b.r; b.rot = 0; B.push(b); return b },
    resize() { W = root.clientWidth; H = root.clientHeight }
  };
  const local = e => { const r = root.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top] };
  root.addEventListener('pointerdown', e => {
    const [x, y] = local(e);
    for (let i = B.length - 1; i >= 0; i--) {
      const b = B[i];
      if (b.nodrag) continue;
      if (Math.hypot(x - b.x, y - b.y) < b.r) {
        drag = b; b.drag = true; dpx = x - b.x; dpy = y - b.y; moved = 0; t0 = performance.now();
        root.setPointerCapture(e.pointerId); o.onDrag && o.onDrag(b, true); break;
      }
    }
  });
  root.addEventListener('pointermove', e => {
    const [x, y] = local(e); P.x = x; P.y = y;
    if (drag) {
      const nx = Math.max(drag.r, Math.min(W - drag.r, x - dpx)), ny = Math.max(drag.r, Math.min(H - drag.r, y - dpy));
      moved += Math.abs(nx - drag.x) + Math.abs(ny - drag.y);
      drag.vx = (nx - drag.x) * .9; drag.vy = (ny - drag.y) * .9; drag.x = nx; drag.y = ny;
    }
  });
  const up = () => {
    if (!drag) return;
    const b = drag; drag = null; b.drag = false; o.onDrag && o.onDrag(b, false);
    if (moved < 8 && performance.now() - t0 < 400 && o.onTap) o.onTap(b);
  };
  root.addEventListener('pointerup', up);
  root.addEventListener('pointercancel', up);
  root.addEventListener('pointerleave', () => { P.x = P.y = -999 });
  function step() {
    for (const b of B) {
      if (b.drag || b.fixed) continue;
      if (o.mode === 'down') {
        b.vy += o.g; b.vx *= o.fric;
      } else if (o.mode === 'vec') {
        b.vx += o.gx || 0; b.vy += o.gy || 0; b.vx *= .996; b.vy *= .996;
      } else if (o.mode === 'magnet') {
        if (P.x > -900) {
          const dx = P.x - b.x, dy = P.y - b.y, d = Math.hypot(dx, dy) || 1, f = Math.min(1, 220 / d) * .55;
          b.vx += dx / d * f; b.vy += dy / d * f;
        }
        b.vx *= .975; b.vy *= .975;
      } else {
        b.vx += (Math.random() - .5) * .08; b.vy += (Math.random() - .5) * .08; b.vx *= .999; b.vy *= .999;
      }
      b.x += b.vx; b.y += b.vy;
      if (b.x < b.r) { b.x = b.r; b.vx = -b.vx * o.rest }
      if (b.x > W - b.r) { b.x = W - b.r; b.vx = -b.vx * o.rest }
      if (b.y > H - b.r) { b.y = H - b.r; b.vy = -b.vy * o.rest; b.vx *= .97; if (Math.abs(b.vy) < 1.2) b.vy = 0 }
      if (b.y < b.r) { b.y = b.r; b.vy = -b.vy * o.rest }
      b.rot = Math.max(-40, Math.min(40, b.rot * .9 + b.vx * 1.6));
    }
    for (let k = 0; k < 3; k++) for (let i = 0; i < B.length; i++) for (let j = i + 1; j < B.length; j++) {
      const a = B[i], c = B[j], dx = c.x - a.x, dy = c.y - a.y, d = Math.hypot(dx, dy) || .01, m = a.r + c.r;
      if (d >= m) continue;
      const nx = dx / d, ny = dy / d, over = m - d;
      const fa = a.drag || a.fixed, fc = c.drag || c.fixed;
      const wa = fa ? 0 : 1 / a.m, wc = fc ? 0 : 1 / c.m, ws = wa + wc || 1;
      a.x -= nx * over * wa / ws; a.y -= ny * over * wa / ws; c.x += nx * over * wc / ws; c.y += ny * over * wc / ws;
      const rv = (c.vx - a.vx) * nx + (c.vy - a.vy) * ny;
      if (rv < 0) {
        const j2 = -rv * (1 + .6) / ws;
        a.vx -= j2 * wa * nx; a.vy -= j2 * wa * ny; c.vx += j2 * wc * nx; c.vy += j2 * wc * ny;
        if (k === 0 && -rv > 2.5 && o.onCollide) o.onCollide(a, c, -rv);
      }
    }
    for (const b of B) b.el.style.transform = `translate(${b.x - b.r}px,${b.y - b.r}px) rotate(${b.rot}deg)`;
    requestAnimationFrame(step);
  }
  step();
  return api;
};
