import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollObserver = () => {
  const location = useLocation();
  useEffect(() => {
    // Déclarer l'observateur en dehors de la boucle
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // Arrêter l'observation une fois la classe ajoutée
        }
      });
    }, {
      rootMargin: `0px 0px ${window.innerWidth < 768 ? '-30px' : '-50px'} 0px`,
      threshold: 0,
    });

    // Sélectionner toutes les sections
    const sections = document.querySelectorAll('section');

    // Observer chaque section
    sections.forEach((section) => {
      observer.observe(section); // Appliquer l'observateur à chaque section
    });

    // Fonction de nettoyage : déconnecter l'observateur lorsque le composant est démonté
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section); // Arrêter l'observation pour chaque section
      });
    };
  }, [location.pathname]); // Ce useEffect se lance une seule fois au montage du composant

  return null; // Pas de rendu à faire ici, juste de la logique
};

export default ScrollObserver;
