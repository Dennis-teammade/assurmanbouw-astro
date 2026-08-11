import { useState } from 'react';
import { Shield, Users, MapPin, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

export interface CaseStudy {
  category: string;
  title: string;
  businessName: string;
  ownerName?: string;
  cityName: string;
  description: string;
  action: string;
  image: string;
}

interface Props {
  cases: CaseStudy[];
}

export default function CaseStudyCarousel({ cases }: Props) {
  const [current, setCurrent] = useState(0);

  // Geen echte klantverhalen voor deze sector? Dan tonen we de sectie niet.
  // Afspraak met Maaike (11/8/2026): liever geen sectie dan verzonnen voorbeelden.
  // De pagina's renderen deze island ook al conditioneel; dit is de vangnet-guard.
  if (!cases || cases.length === 0) return null;

  const next = () => setCurrent(p => (p + 1) % cases.length);
  const prev = () => setCurrent(p => (p - 1 + cases.length) % cases.length);
  const c = cases[current];

  return (
    <section style={{ background: '#E9C466', position: 'relative', overflow: 'hidden', paddingTop: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
        <img src="/ASSURMAN_BRAND_ARROW-horizontal-WIT.png" alt="" style={{ height: 80, width: 'auto', opacity: 1 }} />
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 32px 64px', position: 'relative', zIndex: 2 }}>
        <div style={{
          background: '#FFFFFF',
          boxShadow: '0px 20px 25px -5px rgba(0,0,0,0.1), 0px 8px 10px -6px rgba(0,0,0,0.1)',
          clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 36px), calc(100% - 36px) 100%, 0% 100%)',
          position: 'relative',
        }}>
          <div style={{ position: 'absolute', top: -32, left: 32, background: '#FFFFFF', borderRadius: '12px 12px 0 0', padding: '12px 32px', border: '2px solid #F1F5F9', borderBottom: 'none', zIndex: 10 }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 15, color: '#3F5767' }}>Hoe het werkt</span>
          </div>

          <div style={{ padding: '32px 24px 32px' }}>
            <div className="case-header">
              <div>
                <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 'clamp(32px, 4vw, 48px)', lineHeight: 1, color: '#001F3F', marginBottom: 8 }}>
                  IN DE<br />PRAKTIJK
                </h2>
                <p style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#E5A524', margin: 0, letterSpacing: '1px', textTransform: 'uppercase' }}>Echte vakmannen, echte situaties</p>
              </div>
              <div className="case-header-right">
                <div style={{ maxWidth: 360, background: '#F8FAFC', padding: 14, borderRadius: 8 }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 14, color: '#001F3F', margin: 0, lineHeight: 1.5 }}>
                    Echte situaties, slimme dekking. Zie hoe verzekeringen het verschil maken in de praktijk.
                  </p>
                </div>
                <a href="/contact/" style={{ width: 48, height: 48, borderRadius: '50%', background: '#3F5767', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, textDecoration: 'none' }}>
                  <Phone size={20} color="white" />
                </a>
              </div>
            </div>

            <div className="case-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: '#3F5767', color: 'white', borderRadius: 6, padding: '6px 16px', alignSelf: 'flex-start' }}>
                  <Shield size={14} color="white" />
                  <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '1px' }}>{c.category}</span>
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(16px, 2vw, 20px)', lineHeight: 1.3, color: '#E5A524', margin: 0 }}>
                  {c.title}
                </h3>
                <div style={{ background: '#F8FAFC', padding: 14, borderRadius: 8 }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 13, lineHeight: 1.6, color: '#001F3F', margin: 0 }}>
                    {c.description}
                  </p>
                </div>
                <div style={{ borderLeft: '4px solid #E5A524', paddingLeft: 14, background: '#F1F5F9', paddingTop: 12, paddingBottom: 12, paddingRight: 12, borderRadius: '0 6px 6px 0' }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 600, fontSize: 13, lineHeight: 1.5, color: '#001F3F', margin: 0 }}>
                    {c.action}
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }}>
                  <Users size={14} color="#001F3F" />
                  <span style={{ fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 13, color: '#001F3F' }}>{c.businessName}</span>
                  {c.ownerName && <><span style={{ color: '#CBD5E1' }}>•</span><span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 13, color: '#001F3F' }}>{c.ownerName}</span></>}
                  <span style={{ color: '#CBD5E1' }}>•</span>
                  <MapPin size={14} color="#001F3F" />
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 13, color: '#001F3F' }}>{c.cityName}</span>
                </div>
              </div>

              <div className="case-img">
                <img src={c.image} alt={c.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 16 }}>
              <button onClick={prev} className="brand-slide-nav-btn" aria-label="Previous"><ChevronLeft size={18} /></button>
              <button onClick={next} className="brand-slide-nav-btn" aria-label="Next"><ChevronRight size={18} /></button>
              <div style={{ display: 'flex', gap: 8 }}>
                {cases.map((_, idx) => (
                  <div key={idx} style={{ height: 4, borderRadius: 2, background: idx === current ? '#E5A524' : 'rgba(229,165,36,0.2)', width: idx === current ? 40 : 24, transition: 'width 0.3s, background 0.3s' }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
