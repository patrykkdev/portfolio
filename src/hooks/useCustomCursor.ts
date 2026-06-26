import { useEffect } from 'react';

/**
 * Smooth-following custom cursor. Expects an element with id `pk-cursor`
 * in the DOM. Hidden automatically on coarse (touch) pointers. Scales up
 * over links and any `[data-cursor]` element.
 */
export function useCustomCursor() {
  useEffect(() => {
    const cur = document.getElementById('pk-cursor');
    if (!cur) return;

    const finePointer = window.matchMedia('(pointer:fine)').matches;
    if (!finePointer) {
      cur.style.display = 'none';
      return;
    }

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    let scale = 1;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const loop = () => {
      cx += (mx - cx) * 0.2;
      cy += (my - cy) * 0.2;
      cur.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%) scale(${scale})`;
      raf = requestAnimationFrame(loop);
    };

    const enter = () => {
      scale = 2.4;
      cur.style.background = 'var(--fg, #111111)';
    };
    const leave = () => {
      scale = 1;
      cur.style.background = 'transparent';
    };

    const targets = Array.from(document.querySelectorAll<HTMLElement>('a, [data-cursor]'));
    targets.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    window.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);
}
