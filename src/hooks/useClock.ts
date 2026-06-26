import { useEffect, useState } from 'react';

/** Live HH:MM:SS clock for a given IANA timezone (default Europe/Warsaw). */
export function useClock(timeZone = 'Europe/Warsaw') {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('pl-PL', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return time;
}
