import { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
}

interface Props {
  navItems: NavItem[];
  heroSectionId?: string;
}

export default function StickyNav({ navItems, heroSectionId = 'hero' }: Props) {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(navItems[0]?.id ?? '');

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById(heroSectionId);
      if (hero) {
        setStickyVisible(hero.getBoundingClientRect().bottom <= 0);
      }

      const ids = navItems.map(n => n.id);
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(ids[i]);
          break;
        }
      }
    };

    const setStickyVisible = (v: boolean) => setVisible(v);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [navItems, heroSectionId]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    // Offset = geshrunkte hoofdnav (--nav-h-shrunk) + deze sticky subnav-balk zelf.
    // Afgeleid van de centrale header-variabele i.p.v. een los magic number (was -80).
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h-shrunk')) || 68;
    const offset = navH + 48; // ~48px = hoogte van de subnav-balk + marge
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div style={{
      position: 'sticky',
      top: 'var(--nav-h-shrunk, 68px)',
      zIndex: 90,
      background: '#FFFFFF',
      borderBottom: '1px solid rgba(0,31,63,0.08)',
      transform: visible ? 'translateY(0)' : 'translateY(-110%)',
      transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
      overflow: 'auto',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 0, justifyContent: 'center', flexWrap: 'wrap' }}>
        {navItems.map(item => (
          <button
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className={`sn-btn${activeSection === item.id ? ' active' : ''}`}
          >
            <CheckCircle size={14} className="sn-check" />
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
