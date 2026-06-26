import { useEffect, useRef } from 'react';

/**
 * Returns a ref for a horizontal progress bar element whose scaleX is
 * driven by the page scroll position (0 → 1).
 */
export function useScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight || 1;
      const p = Math.min(1, Math.max(0, (window.scrollY || doc.scrollTop) / max));
      if (ref.current) ref.current.style.transform = `scaleX(${p})`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return ref;
}
