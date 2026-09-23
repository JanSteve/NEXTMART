'use client';

import { useState, useEffect } from 'react';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);

    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    media.addEventListener('change', handler);
    return () => media.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

export function useBreakpoint(bp: keyof typeof breakpoints): boolean {
  return useMediaQuery(`(min-width: ${breakpoints[bp]}px)`);
}

export function useIsMobile(): boolean {
  return !useBreakpoint('md');
}

export function useIsDesktop(): boolean {
  return useBreakpoint('lg');
}
