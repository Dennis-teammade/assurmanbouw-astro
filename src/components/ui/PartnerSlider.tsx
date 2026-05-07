import { useRef } from 'react';
import partners from '../../data/partners';

export default function PartnerSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const doubled = [...partners, ...partners];

  return (
    <div style={{ overflow: 'hidden', position: 'relative', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}>
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: '48px',
          alignItems: 'center',
          animation: 'partnerScroll 30s linear infinite',
          width: 'max-content',
        }}
        onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused')}
        onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.animationPlayState = 'running')}
      >
        {doubled.map((partner, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: 60,
              flexShrink: 0,
              opacity: 0.8,
              transition: 'opacity 0.2s, transform 0.2s',
            }}
          >
            <img
              src={partner.logo}
              alt={partner.name}
              style={{ height: 48, width: 'auto', objectFit: 'contain', maxWidth: 120 }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
