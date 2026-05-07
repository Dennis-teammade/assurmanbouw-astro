import { useState } from 'react';
import { HardHat, ChevronRight } from 'lucide-react';

interface Tab {
  id: string;
  label: string;
  link: string;
  title: string;
  text: string;
}

interface Props {
  tabs: Tab[];
  sectionLabel?: string;
  headline?: string;
  subheadline?: string;
  background?: string;
}

export default function TabPanel({
  tabs,
  sectionLabel = 'Per beroep',
  headline = 'Wat betekent dit voor jouw stiel?',
  subheadline,
  background = 'rgba(229,165,36,0.07)',
}: Props) {
  const [active, setActive] = useState(tabs[0]?.id ?? '');
  const activeTab = tabs.find(t => t.id === active);

  return (
    <section style={{ background, padding: '96px 32px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 13, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#E5A524', display: 'block', marginBottom: 12 }}>
            {sectionLabel}
          </span>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 900, fontSize: 'clamp(32px, 3.5vw, 48px)', lineHeight: 1.05, color: '#001F3F', margin: 0 }}>
            {headline}
          </h2>
          {subheadline && (
            <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: 1.65, color: '#001F3F', marginTop: 16, maxWidth: 520, margin: '16px auto 0' }}>
              {subheadline}
            </p>
          )}
        </div>

        <div style={{ display: 'flex', gap: 0, borderBottom: '2px solid rgba(0,31,63,0.12)', marginBottom: 40, justifyContent: 'center', overflowX: 'auto' }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`tab-btn${active === tab.id ? ' active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab && (
          <div style={{ background: '#FFFFFF', borderRadius: 12, padding: '36px 40px', display: 'flex', gap: 32, alignItems: 'flex-start', maxWidth: 860, margin: '0 auto' }}>
            <div style={{ background: 'rgba(229,165,36,0.12)', borderRadius: 12, padding: 18, flexShrink: 0 }}>
              <HardHat size={32} color="#E5A524" />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 22, color: '#001F3F', marginBottom: 12 }}>{activeTab.title}</h3>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 17, lineHeight: 1.65, color: '#001F3F', marginBottom: 20 }}>{activeTab.text}</p>
              <a href={activeTab.link} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: "'Open Sans', sans-serif", fontWeight: 700, fontSize: 14, color: '#E5A524', textDecoration: 'none' }}>
                Bekijk sectorpagina <ChevronRight size={14} />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
