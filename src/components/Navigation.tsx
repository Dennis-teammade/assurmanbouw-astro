import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { verzekeringenPerCategorie, verzekeringUrl } from '../data/verzekeringen';

// Verzekeringen-menu volledig uit de centrale databron (src/data/verzekeringen.ts).
const verzekeringGroepen = verzekeringenPerCategorie();

const sectovenItems = [
  { label: 'Aannemers', to: '/sectoren/aannemers' },
  { label: 'Dakwerkers', to: '/sectoren/dakwerkers' },
  { label: 'Elektriciens', to: '/sectoren/elektriciens' },
  { label: 'Loodgieters', to: '/sectoren/loodgieters' },
  { label: 'Schilders', to: '/sectoren/schilders' },
  { label: 'Schrijnwerkers', to: '/sectoren/schrijnwerkers' },
  { label: 'Grondwerkers', to: '/sectoren/grondwerkers/' },
  { label: 'Bestraters & kasseileggers', to: '/sectoren/bestraters/' },
  { label: 'Stukadoors', to: '/sectoren/stukadoors/' },
  { label: 'Chappers', to: '/sectoren/chappers/' },
  { label: 'Vloerders & tegelzetters', to: '/sectoren/vloerders-tegelzetters/' },
  { label: 'Parketzetters', to: '/sectoren/parketzetters/' },
  { label: 'Zonnepaneel-installateurs', to: '/sectoren/zonnepanelen-installateurs/' },
  { label: 'Koeltechniek & HVAC', to: '/sectoren/koeltechniek-hvac/' },
  { label: 'Tuinaannemers', to: '/sectoren/tuinaannemers/' },
  { label: 'Hoveniers', to: '/sectoren/hoveniers/' },
  { label: 'Boomverzorgers', to: '/sectoren/boomverzorgers/' },
  { label: 'Asfalteerders', to: '/sectoren/asfalteerders/' },
  { label: 'Zwembadinstallateurs', to: '/sectoren/zwembadinstallateurs/' },
];

export default function Navigation() {
  const [showVerzekeringen, setShowVerzekeringen] = useState(false);
  const [showSectoren, setShowSectoren] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileVerzekeringen, setMobileVerzekeringen] = useState(false);
  const [mobileVerzCat, setMobileVerzCat] = useState<string | null>(null);
  const [mobileSectoren, setMobileSectoren] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState('');

  const verzekeringenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectovenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setPathname(window.location.pathname);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openVerzekeringen = () => {
    if (verzekeringenTimer.current) clearTimeout(verzekeringenTimer.current);
    setShowVerzekeringen(true);
  };
  const closeVerzekeringen = () => {
    verzekeringenTimer.current = setTimeout(() => setShowVerzekeringen(false), 200);
  };
  const openSectoren = () => {
    if (sectovenTimer.current) clearTimeout(sectovenTimer.current);
    setShowSectoren(true);
  };
  const closeSectoren = () => {
    sectovenTimer.current = setTimeout(() => setShowSectoren(false), 200);
  };

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: '#FFFFFF',
        boxShadow: scrolled ? '0 2px 8px rgba(0,31,63,0.12)' : '0 1px 3px rgba(0,31,63,0.08)',
        transition: 'box-shadow 0.3s ease',
      }}>
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: scrolled ? '6px 15px' : '10px 15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'padding 0.3s ease',
        }} className="nav-inner">

          <a href="/" style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <img
              src="/assurman-logo-cropped.svg"
              alt="Assurman"
              width={331}
              height={96}
              style={{ height: scrolled ? 56 : 80, width: 'auto', transition: 'height 0.3s ease' }}
            />
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
            <div style={{ position: 'relative' }} onMouseEnter={openVerzekeringen} onMouseLeave={closeVerzekeringen}>
              <button className={`nav-dropdown-btn${isActive('/verzekeringen') ? ' active' : ''}`}>
                Verzekeringen
                <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: showVerzekeringen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
              <div className={`nav-dropdown ${showVerzekeringen ? 'visible' : 'hidden'}`} style={{ minWidth: 760 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 4, padding: '18px 18px 14px' }}>
                  {verzekeringGroepen.map((groep) => (
                    <div key={groep.categorie} style={{ minWidth: 0 }}>
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.6px', textTransform: 'uppercase', color: '#E5A524', margin: '0 0 8px', paddingBottom: 6, borderBottom: '1px solid rgba(229,165,36,0.2)' }}>
                        {groep.label}
                      </p>
                      {groep.items.map((v) => (
                        <a
                          key={v.slug}
                          href={verzekeringUrl(v.slug)}
                          className="nav-dropdown-item"
                          style={{ padding: '6px 8px', borderBottom: 'none', borderRadius: 6, fontFamily: "'Outfit', sans-serif", fontSize: 13.5, lineHeight: 1.3 }}
                          onClick={() => setShowVerzekeringen(false)}
                        >
                          {v.titel}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
                <a href="/verzekeringen" className="nav-dropdown-all" onClick={() => setShowVerzekeringen(false)}>
                  <ArrowRight size={14} />
                  Alle verzekeringen bekijken
                </a>
              </div>
            </div>

            <div style={{ position: 'relative' }} onMouseEnter={openSectoren} onMouseLeave={closeSectoren}>
              <button className={`nav-dropdown-btn${isActive('/sectoren') ? ' active' : ''}`}>
                Sectoren
                <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: showSectoren ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
              <div className={`nav-dropdown ${showSectoren ? 'visible' : 'hidden'}`}>
                {sectovenItems.map((item) => (
                  <a key={item.to} href={item.to} className="nav-dropdown-item" onClick={() => setShowSectoren(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="/sectoren" className="nav-dropdown-all" onClick={() => setShowSectoren(false)}>
                  <ArrowRight size={14} />
                  Alle sectoren bekijken
                </a>
              </div>
            </div>

            <a href="/werkwijze" className={`nav-link${pathname === '/werkwijze' ? ' active' : ''}`}>Werkwijze</a>
            <a href="/gids/" className={`nav-link${pathname.startsWith('/gids') ? ' active' : ''}`}>Kenniscentrum</a>
            <a href="/contact/" className={`nav-link${pathname === '/contact/' ? ' active' : ''}`}>Contact</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a href="/gratis-verzekeringsscan/" className="nav-cta desktop-only">
              Gratis scan
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: '#001F3F', padding: 4 }}
              className="mobile-menu-btn"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div style={{
          maxHeight: mobileOpen ? '100vh' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease',
          background: '#FFFFFF',
          borderTop: mobileOpen ? '1px solid rgba(0,31,63,0.08)' : 'none',
        }} className="mobile-menu">
          <div style={{ padding: '8px 15px 24px', overflowY: 'auto', maxHeight: 'calc(100vh - 80px)' }}>
            <button className="mobile-section-btn" onClick={() => setMobileVerzekeringen(!mobileVerzekeringen)}>
              Verzekeringen
              <ChevronDown size={16} style={{ transform: mobileVerzekeringen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
            </button>
            {mobileVerzekeringen && (
              <div>
                {verzekeringGroepen.map((groep) => (
                  <div key={groep.categorie}>
                    <button
                      className="mobile-section-btn"
                      style={{ paddingLeft: 12, fontSize: 15 }}
                      onClick={() => setMobileVerzCat(mobileVerzCat === groep.categorie ? null : groep.categorie)}
                    >
                      {groep.label}
                      <ChevronDown size={15} style={{ transform: mobileVerzCat === groep.categorie ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
                    </button>
                    {mobileVerzCat === groep.categorie && (
                      <div>
                        {groep.items.map((v) => (
                          <a key={v.slug} href={verzekeringUrl(v.slug)} className="mobile-sub-item" style={{ paddingLeft: 24 }} onClick={() => setMobileOpen(false)}>
                            {v.titel}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <a href="/verzekeringen" className="mobile-sub-item" style={{ color: '#E5A524' }} onClick={() => setMobileOpen(false)}>Alle verzekeringen →</a>
              </div>
            )}

            <button className="mobile-section-btn" onClick={() => setMobileSectoren(!mobileSectoren)}>
              Sectoren
              <ChevronDown size={16} style={{ transform: mobileSectoren ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
            </button>
            {mobileSectoren && (
              <div>
                {sectovenItems.map((item) => (
                  <a key={item.to} href={item.to} className="mobile-sub-item" onClick={() => setMobileOpen(false)}>{item.label}</a>
                ))}
                <a href="/sectoren" className="mobile-sub-item" style={{ color: '#E5A524' }} onClick={() => setMobileOpen(false)}>Alle sectoren →</a>
              </div>
            )}

            <a href="/werkwijze" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Werkwijze</a>
            <a href="/gids/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Kenniscentrum</a>
            <a href="/contact/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Contact</a>

            <div style={{ paddingTop: 20 }}>
              <a href="/gratis-verzekeringsscan/" className="nav-cta" style={{ display: 'inline-block' }} onClick={() => setMobileOpen(false)}>
                Gratis scan
              </a>
            </div>
          </div>
        </div>
      </header>

    </>
  );
}
