import { Heart } from 'lucide-react';

export function LashLogo() {
  return <div className="lash-logo" aria-label="Bella Lash, Lash Designer">
    <Heart className="logo-heart" size={12} fill="currentColor" />
    <svg viewBox="0 0 120 45" className="lash-mark" aria-hidden="true">
      <path d="M12 10 Q60 47 108 10 Q61 61 12 10" fill="currentColor" />
      {Array.from({ length: 19 }, (_, i) => {
        const x = 15 + i * 5;
        const y = 14 + 21 * Math.sin((i / 18) * Math.PI);
        return <path key={i} d={`M${x} ${y} Q${x + (x - 60) * .12} ${y + 9} ${x + (x - 60) * .24} ${y + 13}`} fill="none" stroke="currentColor" strokeWidth="1.4" />;
      })}
    </svg>
    <span className="logo-wordmark">Bella Lash</span>
    <span className="logo-caption">LASH DESIGNER</span>
  </div>;
}