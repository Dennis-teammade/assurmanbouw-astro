import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

const verzekeringenItems = [
  { label: 'BA Onderneming', to: '/verzekeringen/ba-onderneming/' },
  { label: 'Arbeidsongevallenverzekering', to: '/verzekeringen/arbeidsongevallen/' },
  { label: 'Bedrijfsvoertuigen', to: '/verzekeringen/bedrijfsvoertuigen/' },
  { label: 'Machinebreukverzekering', to: '/verzekeringen/machinebreuk' },
  { label: 'BA 10', to: '/verzekeringen/ba-10/' },
  { label: 'Rechtsbijstandsverzekering', to: '/verzekeringen/rechtsbijstand' },
];

const sectovenItems = [
  { label: 'Aannemers', to: '/sectoren/aannemers' },
  { label: 'Elektriciens', to: '/sectoren/elektriciens' },
  { label: 'Dakwerkers', to: '/sectoren/dakwerkers' },
  { label: 'Schrijnwerkers', to: '/sectoren/schrijnwerkers' },
  { label: 'Schilders', to: '/sectoren/schilders' },
  { label: 'Loodgieters', to: '/sectoren/loodgieters' },
];

export default function Navigation() {
  const [showVerzekeringen, setShowVerzekeringen] = useState(false);
  const [showSectoren, setShowSectoren] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileVerzekeringen, setMobileVerzekeringen] = useState(false);
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
              <div className={`nav-dropdown ${showVerzekeringen ? 'visible' : 'hidden'}`}>
                {verzekeringenItems.map((item) => (
                  <a key={item.to} href={item.to} className="nav-dropdown-item" onClick={() => setShowVerzekeringen(false)}>
                    {item.label}
                  </a>
                ))}
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
          <div style={{ padding: '8px 15px 24px' }}>
            <button className="mobile-section-btn" onClick={() => setMobileVerzekeringen(!mobileVerzekeringen)}>
              Verzekeringen
              <ChevronDown size={16} style={{ transform: mobileVerzekeringen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
            </button>
            {mobileVerzekeringen && (
              <div>
                {verzekeringenItems.map((item) => (
                  <a key={item.to} href={item.to} className="mobile-sub-item" onClick={() => setMobileOpen(false)}>{item.label}</a>
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
