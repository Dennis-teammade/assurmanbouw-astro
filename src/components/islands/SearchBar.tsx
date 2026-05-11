import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    PagefindUI?: new (options: {
      element: HTMLElement;
      showImages?: boolean;
      resetStyles?: boolean;
      translations?: Record<string, string>;
    }) => void;
  }
}

interface Props {
  compact?: boolean;
}

export default function SearchBar({ compact = false }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current || !containerRef.current) return;

    const init = () => {
      if (window.PagefindUI && containerRef.current) {
        new window.PagefindUI({
          element: containerRef.current,
          showImages: false,
          translations: {
            placeholder: compact
              ? 'Zoek in kenniscentrum…'
              : 'Zoek in kenniscentrum… bv. arbeidsongevallen, BA-10, starter',
            zero_results: 'Geen resultaten voor "[SEARCH_TERM]"',
            many_results: '[COUNT] resultaten voor "[SEARCH_TERM]"',
            one_result: '1 resultaat voor "[SEARCH_TERM]"',
            clear_search: 'Zoekopdracht wissen',
          },
        });
        initialized.current = true;
      }
    };

    if (window.PagefindUI) {
      init();
    } else {
      const script = document.querySelector<HTMLScriptElement>('script[src="/pagefind/pagefind-ui.js"]');
      if (script) {
        script.addEventListener('load', init, { once: true });
      }
    }
  }, [compact]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        maxWidth: compact ? '320px' : '100%',
      }}
    />
  );
}
