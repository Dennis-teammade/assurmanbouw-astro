import { useState, useEffect } from 'react';
import {
  Shield, Wrench, Truck, Users, Zap, CheckCircle, Layers, Building2, Scale, Car, HardHat,
  Flame, Heart, PiggyBank,
  ChevronLeft, ChevronRight,
} from 'lucide-react';

export interface InsuranceCardData {
  title: string;
  intro: string;
  bullets: string[];
  cta: string;
  link: string;
  icon: string;
}

interface Props {
  cards: InsuranceCardData[];
  sectionLabel?: string;
  headline: string;
  subheadline?: string;
  background?: string;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  shield: <Shield size={36} color="#E5A524" />,
  wrench: <Wrench size={36} color="#E5A524" />,
  truck: <Truck size={36} color="#E5A524" />,
  users: <Users size={36} color="#E5A524" />,
  zap: <Zap size={36} color="#E5A524" />,
  'check-circle': <CheckCircle size={36} color="#E5A524" />,
  layers: <Layers size={36} color="#E5A524" />,
  building2: <Building2 size={36} color="#E5A524" />,
  scale: <Scale size={36} color="#E5A524" />,
  car: <Car size={36} color="#E5A524" />,
  hardhat: <HardHat size={36} color="#E5A524" />,
  flame: <Flame size={36} color="#E5A524" />,
  heart: <Heart size={36} color="#E5A524" />,
  'piggy-bank': <PiggyBank size={36} color="#E5A524" />,
};

export default function InsuranceCarousel({
  cards,
  sectionLabel = 'Het Pakket',
  headline,
  subheadline,
  background = '#F5F2FF',
}: Props) {
  const [slide, setSlide] = useState(0);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 768) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxSlide = Math.max(0, cards.length - visible);
  const clamped = Math.min(slide, maxSlide);

  return (
    <section style={{ background, padding: '80px 0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#E5A524', marginBottom: 16 }}>
            {sectionLabel}
          </p>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(26px, 3.5vw, 48px)', lineHeight: 1, color: '#001F3F', margin: '0 auto', maxWidth: 762 }}>
            {headline}
          </h2>
          {subheadline && (
            <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: '#001F3F', marginTop: 16 }}>
              {subheadline}
            </p>
          )}
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ overflow: 'hidden' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${cards.length}, calc((100% - ${(visible - 1) * 20}px) / ${visible}))`,
                gap: 20,
                transform: `translateX(calc(-${clamped} * (100% / ${cards.length}) * ${cards.length / visible} + -${clamped * 20 / visible}px))`,
                transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  style={{
                    background: '#FFFFFF',
                    padding: 32,
                    boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
                    clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0% 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ background: 'rgba(229, 165, 36, 0.1)', borderRadius: 8, padding: 14, display: 'inline-flex', alignSelf: 'flex-start', marginBottom: 20 }}>
                    {ICON_MAP[card.icon] ?? <Shield size={36} color="#E5A524" />}
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 20, lineHeight: 1.27, color: '#001F3F', marginBottom: 10 }}>
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 15, lineHeight: 1.6, color: '#001F3F', marginBottom: 20 }}>
                    {card.intro}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                    {card.bullets.map((bullet, bidx) => (
                      <li key={bidx} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                        <CheckCircle size={16} color="#E5A524" style={{ flexShrink: 0, marginTop: 2 }} />
                        <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 14, lineHeight: 1.5, color: '#001F3F' }}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={card.link} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#E5A524', textDecoration: 'none' }}>
                    {card.cta}
                    <ChevronRight size={15} />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 40 }}>
            <button
              onClick={() => setSlide(s => Math.max(0, s - 1))}
              disabled={clamped === 0}
              className="brand-slide-nav-btn"
              style={{ opacity: clamped === 0 ? 0.35 : 1 }}
              aria-label="Vorige"
            >
              <ChevronLeft size={18} />
            </button>
            <div style={{ display: 'flex', gap: 8 }}>
              {Array.from({ length: maxSlide + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  style={{ height: 4, width: i === clamped ? 40 : 24, borderRadius: 2, background: i === clamped ? '#E5A524' : 'rgba(229,165,36,0.25)', border: 'none', cursor: 'pointer', padding: 0, transition: 'width 0.3s, background 0.3s' }}
                  aria-label={`Ga naar pagina ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setSlide(s => Math.min(maxSlide, s + 1))}
              disabled={clamped === maxSlide}
              className="brand-slide-nav-btn"
              style={{ opacity: clamped === maxSlide ? 0.35 : 1 }}
              aria-label="Volgende"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
