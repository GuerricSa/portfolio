import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function ScrollToTopOnPathChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
