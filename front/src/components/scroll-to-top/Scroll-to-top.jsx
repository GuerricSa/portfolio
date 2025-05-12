import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export default function ScrollToTopOnPathChange() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={ScrollToTop}
          className="z-50 -translate-x-2/4 fixed bottom-8 md:bottom-16 left-2/4 bg-primary text-tertiary p-2 rounded-full shadow-lg hover:bg-tertiary hover:text-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-tertiary focus:ring-offset-2"
          aria-label="Remonter en haut de la page"
        >
          <span className="sr-only">Remonter en haut de la page</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
