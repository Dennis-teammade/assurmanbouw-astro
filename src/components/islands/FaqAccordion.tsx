import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface FaqItem {
  title: string;
  content: string;
}

interface Props {
  items: FaqItem[];
  sectionLabel?: string;
  headline?: string;
  subheadline?: string;
  background?: string;
  hideHeader?: boolean;
}

export default function FaqAccordion({
  items,
  sectionLabel = 'Uitgelegd',
  headline = 'In mensentaal',
  subheadline,
  background = '#FFFFFF',
  hideHeader = false,
}: Props) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ background, padding: hideHeader ? '0 0 80px' : '80px 0' }}>
      <div style={{ maxWidth: 768, margin: '0 auto', padding: '0 15px' }}>
        {!hideHeader && (
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: '1.4px', textTransform: 'uppercase', color: '#E5A524', marginBottom: 16 }}>
              {sectionLabel}
            </p>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: 'clamp(26px, 3vw, 41px)', lineHeight: 1, color: '#001F3F' }}>
              {headline}
            </h2>
            {subheadline && (
              <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 18, lineHeight: 1.6, color: '#001F3F', marginTop: 16 }}>
                {subheadline}
              </p>
            )}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.map((item, idx) => (
            <div key={idx} className="brand-faq-item">
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                style={{ width: '100%', padding: '18px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 12 }}
              >
                <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 'clamp(15px, 1.5vw, 18px)', lineHeight: 1.33, color: '#001F3F' }}>
                  {item.title}
                </span>
                <ChevronDown
                  size={20}
                  color="#001F3F"
                  style={{ flexShrink: 0, transform: open === idx ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                />
              </button>
              {open === idx && (
                <div style={{ padding: '0 20px 20px' }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 400, fontSize: 15, lineHeight: 1.625, color: '#001F3F', margin: 0, whiteSpace: 'pre-line' }}>
                    {item.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
