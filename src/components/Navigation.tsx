import { useState, useRef, useEffect } from 'react';
import {
  ChevronDown, ChevronRight, Menu, X, ArrowRight, FileText,
  ShieldHalf, Hammer, HeartHandshake, PiggyBank,
  BrickWall, PaintRoller, Zap, Trees,
  Shield, Wrench, Truck, Users, CheckCircle, Layers, Building2, Scale, Car, HardHat, Flame, Heart,
  Shovel, Construction, LayoutGrid, Brush, AlignJustify, Droplets, Sun, Snowflake, Sprout, Leaf, TreeDeciduous, Waves, House,
} from 'lucide-react';
import { verzekeringenPerCategorie, verzekeringUrl, CATEGORIE_META } from '../data/verzekeringen';
import type { LucideIcon } from 'lucide-react';

// Verzekeringen-menu volledig uit de centrale databron (src/data/verzekeringen.ts).
const verzekeringGroepen = verzekeringenPerCategorie();

// Categorie-iconen (CATEGORIE_META.icoon-keys) → lucide-react.
// 'tools' bestaat niet in lucide; dichtstbijzijnde equivalent = Hammer
// (Wrench is al de polis-icoon van machinebreuk).
const CATEGORIE_ICON: Record<string, LucideIcon> = {
  'shield-half': ShieldHalf,
  'tools': Hammer,
  'heart-handshake': HeartHandshake,
  'pig-money': PiggyBank,
};

// Sectoren ingedeeld in 4 groepen (zelfde mega-menu-opmaak als Verzekeringen).
const sectorGroepen = [
  {
    key: 'ruwbouw',
    label: 'Ruwbouw & infrastructuur',
    subzin: 'Grond, wegen en structuur',
    icoon: 'wall',
    items: [
      { label: 'Aannemers', to: '/sectoren/aannemers/', omschrijving: 'Algemene coördinatie', icoon: 'hard-hat' },
      { label: 'Grondwerkers', to: '/sectoren/grondwerkers/', omschrijving: 'Graafwerk en fundering', icoon: 'shovel' },
      { label: 'Asfalteerders', to: '/sectoren/asfalteerders/', omschrijving: 'Wegen en verharding', icoon: 'construction' },
      { label: 'Bestraters & kasseileggers', to: '/sectoren/bestraters/', omschrijving: 'Opritten en pleinen', icoon: 'brick-wall' },
    ],
  },
  {
    key: 'afwerking',
    label: 'Afwerking & interieur',
    subzin: 'Binnen en oppervlakte',
    icoon: 'paint',
    items: [
      { label: 'Schilders', to: '/sectoren/schilders/', omschrijving: 'Binnen en buiten', icoon: 'paint-roller' },
      { label: 'Schrijnwerkers', to: '/sectoren/schrijnwerkers/', omschrijving: 'Maatwerk in hout', icoon: 'hammer' },
      { label: 'Stukadoors', to: '/sectoren/stukadoors/', omschrijving: 'Pleister- en raapwerk', icoon: 'brush' },
      { label: 'Chappers', to: '/sectoren/chappers/', omschrijving: 'Dekvloeren', icoon: 'layers' },
      { label: 'Vloerders & tegelzetters', to: '/sectoren/vloerders-tegelzetters/', omschrijving: 'Vloer- en wandtegels', icoon: 'layout-grid' },
      { label: 'Parketzetters', to: '/sectoren/parketzetters/', omschrijving: 'Houten vloeren', icoon: 'align-justify' },
    ],
  },
  {
    key: 'technieken',
    label: 'Technieken & installatie',
    subzin: 'Elektriciteit, water, klimaat',
    icoon: 'bolt',
    items: [
      { label: 'Elektriciens', to: '/sectoren/elektriciens/', omschrijving: 'Installatie en renovatie', icoon: 'zap' },
      { label: 'Loodgieters', to: '/sectoren/loodgieters/', omschrijving: 'Sanitair en leidingen', icoon: 'droplets' },
      { label: 'Zonnepaneel-installateurs', to: '/sectoren/zonnepanelen-installateurs/', omschrijving: 'PV en omvormers', icoon: 'sun' },
      { label: 'Koeltechniek & HVAC', to: '/sectoren/koeltechniek-hvac/', omschrijving: 'Klimaat en verwarming', icoon: 'snowflake' },
    ],
  },
  {
    key: 'buiten',
    label: 'Dak, tuin & buitenruimte',
    subzin: 'Boven en rond het gebouw',
    icoon: 'trees',
    items: [
      { label: 'Dakwerkers', to: '/sectoren/dakwerkers/', omschrijving: 'Dak en dichting', icoon: 'house' },
      { label: 'Tuinaannemers', to: '/sectoren/tuinaannemers/', omschrijving: 'Aanleg en onderhoud', icoon: 'sprout' },
      { label: 'Hoveniers', to: '/sectoren/hoveniers/', omschrijving: 'Groen en beplanting', icoon: 'leaf' },
      { label: 'Boomverzorgers', to: '/sectoren/boomverzorgers/', omschrijving: 'Snoei en vellen', icoon: 'tree-deciduous' },
      { label: 'Zwembadinstallateurs', to: '/sectoren/zwembadinstallateurs/', omschrijving: 'Aanleg en techniek', icoon: 'waves' },
    ],
  },
];

// Sector-categorie-iconen (Tabler-keys uit de referentie) → lucide-react.
const SECTOR_ICON: Record<string, LucideIcon> = {
  'wall': BrickWall,
  'paint': PaintRoller,
  'bolt': Zap,
  'trees': Trees,
};

// Polis-iconen voor het rechterpaneel: icoon-key uit verzekeringen.ts → lucide-react.
// Zelfde keys als ICON_MAP in InsuranceCarousel.tsx (één visuele taal site-breed).
const POLIS_ICON: Record<string, LucideIcon> = {
  'shield': Shield,
  'wrench': Wrench,
  'truck': Truck,
  'users': Users,
  'zap': Zap,
  'check-circle': CheckCircle,
  'layers': Layers,
  'building2': Building2,
  'scale': Scale,
  'car': Car,
  'hardhat': HardHat,
  'flame': Flame,
  'heart': Heart,
  'piggy-bank': PiggyBank,
};

// Per-beroep iconen voor het Sectoren-rechterpaneel (logisch passend bij de stiel).
const SECTOR_POLIS_ICON: Record<string, LucideIcon> = {
  'hard-hat': HardHat,
  'shovel': Shovel,
  'construction': Construction,
  'brick-wall': BrickWall,
  'paint-roller': PaintRoller,
  'hammer': Hammer,
  'brush': Brush,
  'layers': Layers,
  'layout-grid': LayoutGrid,
  'align-justify': AlignJustify,
  'zap': Zap,
  'droplets': Droplets,
  'sun': Sun,
  'snowflake': Snowflake,
  'house': House,
  'sprout': Sprout,
  'leaf': Leaf,
  'tree-deciduous': TreeDeciduous,
  'waves': Waves,
};

export default function Navigation() {
  const [showVerzekeringen, setShowVerzekeringen] = useState(false);
  const [activeVerzCat, setActiveVerzCat] = useState<string>(verzekeringGroepen[0]?.categorie ?? '');
  const [showSectoren, setShowSectoren] = useState(false);
  const [activeSectorCat, setActiveSectorCat] = useState<string>(sectorGroepen[0]?.key ?? '');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileVerzekeringen, setMobileVerzekeringen] = useState(false);
  const [mobileVerzCat, setMobileVerzCat] = useState<string | null>(null);
  const [mobileSectoren, setMobileSectoren] = useState(false);
  const [mobileSectorCat, setMobileSectorCat] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [pathname, setPathname] = useState('');

  const verzekeringenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectovenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setPathname(window.location.pathname);
    // De utility-topbar (34px) is niet sticky: ze scrollt weg. De fixed hoofdnav volgt
    // de onderrand van de topbar naar boven (34 → 0) en blijft daarna sticky op top:0.
    // Op mobiel (<=900px) is de topbar verborgen; de media-query houdt de nav dan op 0.
    const TOPBAR_H = 34;
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      document.documentElement.style.setProperty(
        '--util-offset',
        Math.max(0, TOPBAR_H - window.scrollY) + 'px'
      );
    };
    onScroll();
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
      <header className="site-header" style={{
        position: 'fixed',
        left: 0,
        right: 0,
        zIndex: 100,
        background: '#FFFFFF',
        boxShadow: scrolled ? '0 2px 8px rgba(0,31,63,0.12)' : '0 1px 3px rgba(0,31,63,0.08)',
        transition: 'box-shadow 0.3s ease',
      }}>
        <div style={{
          position: 'relative',
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
            <div
              style={{ position: 'static' }}
              onMouseEnter={openVerzekeringen}
              onMouseLeave={closeVerzekeringen}
              onFocus={openVerzekeringen}
              onBlur={closeVerzekeringen}
            >
              <button className={`nav-dropdown-btn${isActive('/verzekeringen') ? ' active' : ''}`} aria-haspopup="true" aria-expanded={showVerzekeringen}>
                Verzekeringen
                <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: showVerzekeringen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
              <div className={`nav-dropdown ${showVerzekeringen ? 'visible' : 'hidden'}`} style={{ padding: 0 }}>
                <div className="vmm">
                  <div className="vmm-left">
                    {verzekeringGroepen.map((groep) => {
                      const meta = CATEGORIE_META[groep.categorie];
                      const Icon = CATEGORIE_ICON[meta.icoon] ?? ShieldHalf;
                      const active = activeVerzCat === groep.categorie;
                      return (
                        <button
                          key={groep.categorie}
                          type="button"
                          className={`vmm-cat${active ? ' active' : ''}`}
                          aria-controls={`vmm-panel-${groep.categorie}`}
                          onMouseEnter={() => setActiveVerzCat(groep.categorie)}
                          onFocus={() => setActiveVerzCat(groep.categorie)}
                          onClick={() => setActiveVerzCat(groep.categorie)}
                        >
                          <span className="vmm-ico"><Icon size={17} /></span>
                          <span className="vmm-txt">
                            <span className="vmm-title">{groep.label}</span>
                            <span className="vmm-sub">{meta.subzin}</span>
                          </span>
                          <ChevronRight size={15} className="vmm-arrow" />
                        </button>
                      );
                    })}
                  </div>
                  <div className="vmm-right">
                    {verzekeringGroepen.map((groep) => (
                      <div
                        key={groep.categorie}
                        id={`vmm-panel-${groep.categorie}`}
                        role="region"
                        aria-label={groep.label}
                        className={`vmm-panel${activeVerzCat === groep.categorie ? ' active' : ''}`}
                      >
                        <h3 className="vmm-head">Verzekeringen rond {groep.label.toLowerCase()}</h3>
                        <div className="vmm-grid">
                          {groep.items.map((v) => {
                            const PolIcon = POLIS_ICON[v.icoon] ?? Shield;
                            return (
                              <a
                                key={v.slug}
                                href={verzekeringUrl(v.slug)}
                                className="vmm-pol"
                                onClick={() => setShowVerzekeringen(false)}
                              >
                                <span className="vmm-pol-ico"><PolIcon size={22} color="#E5A524" /></span>
                                <span className="vmm-pol-txt">
                                  <span className="vmm-pol-t">{v.titel}</span>
                                  <span className="vmm-pol-d">{v.menuOmschrijving}</span>
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <a href="/verzekeringen/" className="vmm-foot" onClick={() => setShowVerzekeringen(false)}>
                  <span className="vmm-foot-l"><FileText size={17} />Bekijk alle verzekeringen</span>
                  <span className="vmm-foot-r">Overzicht <ArrowRight size={15} /></span>
                </a>
              </div>
            </div>

            <div
              style={{ position: 'static' }}
              onMouseEnter={openSectoren}
              onMouseLeave={closeSectoren}
              onFocus={openSectoren}
              onBlur={closeSectoren}
            >
              <button className={`nav-dropdown-btn${isActive('/sectoren') ? ' active' : ''}`} aria-haspopup="true" aria-expanded={showSectoren}>
                Sectoren
                <ChevronDown size={15} style={{ transition: 'transform 0.2s', transform: showSectoren ? 'rotate(180deg)' : 'rotate(0deg)' }} />
              </button>
              <div className={`nav-dropdown ${showSectoren ? 'visible' : 'hidden'}`} style={{ padding: 0 }}>
                <div className="vmm">
                  <div className="vmm-left">
                    {sectorGroepen.map((groep) => {
                      const Icon = SECTOR_ICON[groep.icoon] ?? BrickWall;
                      const active = activeSectorCat === groep.key;
                      return (
                        <button
                          key={groep.key}
                          type="button"
                          className={`vmm-cat${active ? ' active' : ''}`}
                          aria-controls={`vmm-sector-panel-${groep.key}`}
                          onMouseEnter={() => setActiveSectorCat(groep.key)}
                          onFocus={() => setActiveSectorCat(groep.key)}
                          onClick={() => setActiveSectorCat(groep.key)}
                        >
                          <span className="vmm-ico"><Icon size={17} /></span>
                          <span className="vmm-txt">
                            <span className="vmm-title">{groep.label}</span>
                            <span className="vmm-sub">{groep.subzin}</span>
                          </span>
                          <ChevronRight size={15} className="vmm-arrow" />
                        </button>
                      );
                    })}
                  </div>
                  <div className="vmm-right">
                    {sectorGroepen.map((groep) => (
                      <div
                        key={groep.key}
                        id={`vmm-sector-panel-${groep.key}`}
                        role="region"
                        aria-label={groep.label}
                        className={`vmm-panel${activeSectorCat === groep.key ? ' active' : ''}`}
                      >
                        <h3 className="vmm-head">{groep.label}</h3>
                        <div className="vmm-grid">
                          {groep.items.map((item) => {
                            const SecIcon = SECTOR_POLIS_ICON[item.icoon] ?? Building2;
                            return (
                              <a key={item.to} href={item.to} className="vmm-pol" onClick={() => setShowSectoren(false)}>
                                <span className="vmm-pol-ico"><SecIcon size={22} color="#E5A524" /></span>
                                <span className="vmm-pol-txt">
                                  <span className="vmm-pol-t">{item.label}</span>
                                  <span className="vmm-pol-d">{item.omschrijving}</span>
                                </span>
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <a href="/sectoren/" className="vmm-foot" onClick={() => setShowSectoren(false)}>
                  <span className="vmm-foot-l"><FileText size={17} />Bekijk alle sectoren</span>
                  <span className="vmm-foot-r">Overzicht <ArrowRight size={15} /></span>
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
                {verzekeringGroepen.map((groep) => {
                  const meta = CATEGORIE_META[groep.categorie];
                  const Icon = CATEGORIE_ICON[meta.icoon] ?? ShieldHalf;
                  const open = mobileVerzCat === groep.categorie;
                  return (
                    <div key={groep.categorie}>
                      <button
                        type="button"
                        className={`vmacc-head${open ? ' open' : ''}`}
                        aria-expanded={open}
                        onClick={() => setMobileVerzCat(open ? null : groep.categorie)}
                      >
                        <span className="vmacc-ico"><Icon size={18} /></span>
                        <span className="vmacc-txt">
                          <span className="vmacc-title">{groep.label}</span>
                          <span className="vmacc-count">{groep.items.length} verzekeringen</span>
                        </span>
                        <ChevronDown size={17} className="vmacc-chev" />
                      </button>
                      <div className={`vmacc-body${open ? ' open' : ''}`}>
                        {groep.items.map((v) => (
                          <a key={v.slug} href={verzekeringUrl(v.slug)} className="vmacc-link" onClick={() => setMobileOpen(false)}>
                            {v.titel}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                })}
                <a href="/verzekeringen/" className="mobile-sub-item" style={{ color: '#E5A524', paddingLeft: 16 }} onClick={() => setMobileOpen(false)}>Alle verzekeringen →</a>
              </div>
            )}

            <button className="mobile-section-btn" onClick={() => setMobileSectoren(!mobileSectoren)}>
              Sectoren
              <ChevronDown size={16} style={{ transform: mobileSectoren ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
            </button>
            {mobileSectoren && (
              <div>
                {sectorGroepen.map((groep) => {
                  const Icon = SECTOR_ICON[groep.icoon] ?? BrickWall;
                  const open = mobileSectorCat === groep.key;
                  return (
                    <div key={groep.key}>
                      <button
                        type="button"
                        className={`vmacc-head${open ? ' open' : ''}`}
                        aria-expanded={open}
                        onClick={() => setMobileSectorCat(open ? null : groep.key)}
                      >
                        <span className="vmacc-ico"><Icon size={18} /></span>
                        <span className="vmacc-txt">
                          <span className="vmacc-title">{groep.label}</span>
                          <span className="vmacc-count">{groep.items.length} sectoren</span>
                        </span>
                        <ChevronDown size={17} className="vmacc-chev" />
                      </button>
                      <div className={`vmacc-body${open ? ' open' : ''}`}>
                        {groep.items.map((item) => (
                          <a key={item.to} href={item.to} className="vmacc-link" onClick={() => setMobileOpen(false)}>
                            {item.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  );
                })}
                <a href="/sectoren/" className="mobile-sub-item" style={{ color: '#E5A524', paddingLeft: 16 }} onClick={() => setMobileOpen(false)}>Alle sectoren →</a>
              </div>
            )}

            <a href="/werkwijze" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Werkwijze</a>
            <a href="/gids/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Kenniscentrum</a>
            <a href="/contact/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Contact</a>
            {/* Items uit de utility-topbar — die balk is op mobiel verborgen, dus hier
                bereikbaar houden via het hamburger-menu. */}
            <a href="/over-assurman/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Over ons</a>
            <a href="/bijstand/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Bijstand</a>
            <a href="/maak-afspraak/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>Maak afspraak</a>

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
