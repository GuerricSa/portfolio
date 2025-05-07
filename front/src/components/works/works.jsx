import './works.scss';
import { useState, useEffect, useRef } from 'react';
import piguetGallandImage from '../../images/works_homepage/piguetGalland.webp';
import knaufImage from '../../images/works_homepage/knauf.webp';
import pfmImage from '../../images/works_homepage/PFM.webp'
import raisonHomeImage from '../../images/works_homepage/raisonHome.webp'
import legalstartImage from '../../images/works_homepage/legalstart.webp'
import batriboxImage from '../../images/works_homepage/batribox.webp'
import premiumContactImage from '../../images/works_homepage/premiumContact.webp'
import upplyImage from '../../images/works_homepage/upply.webp'
import portfolioImage from '../../images/works_homepage/portolio.webp'


export default function Works() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoScrollActive, setAutoScrollActive] = useState(true);
  const autoScrollTimeOut = useRef(null);
  const isProgrammaticScroll = useRef(false);
  const cardRef = useRef(null);
  const sliderRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const works = [
    {
      id: 1,
      columnNumber: 1,
      title: "Knauf Industries",
      subtitle: "",
      image: knaufImage,
      link: "https://www.knauf-industries.com/",
      client: "Knauf Industries",
      technologies: ["Wordpress", "WooCommerce", "React", "PHP"]
    },
    {
      id: 2,
      columnNumber: 1,
      title: "Piguet Galland",
      subtitle: "",
      image: piguetGallandImage,
      link: "https://www.piguetgalland.ch/",
      client: "Piguet Galland",
      technologies: ["Hubspot", "JS", "chart.js"]
    },
    {
      id: 3,
      columnNumber: 2,
      title: "Portfolio",
      subtitle: "",
      image: portfolioImage,
      link: "/",
      client: "Portfolio",
      technologies: ["React", "Tailwind", "node.js"]
    },
    {
      id: 4,
      columnNumber: 2,
      title: "Precision for Medicine",
      subtitle: "",
      image: pfmImage,
      link: "https://www.precisionformedicine.com/",
      client: "Precision for Medicine",
      technologies: ["Hubspot", "JS"]
    },
    {
      id: 5,
      columnNumber: 2,
      title: "Legalstart",
      subtitle: "Support + mini-sites",
      image: legalstartImage,
      link: "https://www.legalstart.fr/",
      client: "Piguet Galland",
      technologies: ["Hubspot", "JS"]
    },
    {
      id: 6,
      columnNumber: 3,
      title: "Raison Home",
      subtitle: "Refonte partielle",
      image: raisonHomeImage,
      link: "https://www.raisonhome.com/fr/",
      client: "Raison Home",
      technologies: ["Hubspot", "JS"]
    },
    {
      id: 7,
      columnNumber: 3,
      title: "Batribox",
      subtitle: "",
      image: batriboxImage,
      link: "https://www.batribox.fr/",
      client: "Piguet Galland",
      technologies: ["Hubspot", "JS"]
    },
    {
      id: 8,
      columnNumber: 3,
      title: "Premium Contact",
      subtitle: "",
      image: premiumContactImage,
      link: "https://premiumcontact.fr/",
      client: "Piguet Galland",
      technologies: ["Hubspot", "JS"]
    },
    {
      id: 9,
      columnNumber: 3,
      title: "Upply",
      subtitle: "blog",
      image: upplyImage,
      link: "https://www.upply.com/fr/blog",
      client: "Piguet Galland",
      technologies: ["Hubspot", "JS"]
    }
  ];

  // gestion du slider auto
  const handleUserInteraction = () => {
    setAutoScrollActive(false);
    clearTimeout(autoScrollTimeOut.current);
    autoScrollTimeOut.current = setTimeout(() => {
      console.log("autoSroll activated")
      setAutoScrollActive(true)
    }, 30000);
  }

  // Gestion du responsive
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-scroll pour mobile
  useEffect(() => {
    if (!isDesktop && autoScrollActive) {
      const targetSlide = sliderRef.current.children[activeSlide];
      if (targetSlide) {
        isProgrammaticScroll.current = true;
        sliderRef.current.scrollTo({
          left: targetSlide.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeSlide, autoScrollActive, isDesktop]);

  useEffect(() => {
    if (sliderRef.current && !isDesktop) {
      isProgrammaticScroll.current = true;
      sliderRef.current.scrollTo({
        left: activeSlide * sliderRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [activeSlide, isDesktop]);

  // Scroll vers le slide actif
  useEffect(() => {
    if (sliderRef.current && !isDesktop) {
      const targetSlide = sliderRef.current.children[activeSlide];
      if (targetSlide) {
        isProgrammaticScroll.current = true;
        sliderRef.current.scrollTo({
          left: targetSlide.offsetLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [activeSlide, isDesktop]);

  // Fonction pour donner une hauteur différente par colonne
  const getHeightClass = (columnIndex) => {
    return columnIndex === 0 ? 'h-96' : columnIndex === 1 ? 'h-64' : 'h-72';
  };

  // Fonction pour diviser les travaux en colonnes pour desktop
  const getColumnWorks = (columnIndex) => {
    return works.filter(work => work.columnNumber === columnIndex + 1);
  };

  const WorkCard = ({ work, heightClass, columnIndex, isMobile = false }) => (
    <li
      ref={cardRef}
      className={`work-card ${
        isMobile ? 'min-w-[100%] sm:min-w-[75%] md:min-w-[50%] snap-start' : 'w-3/6 lg:w-full'
      } ${heightClass} bg-secondary rounded-lg overflow-hidden relative flex flex-col justify-between`}
    >
      <div className={`overflow-y-auto no-scrollbar ${ isMobile ? "h-56" : "h-full"}`}
      >
        <img
          src={work.image}
          alt={work.title}
          className="w-full"
        />
      </div>

      <div className={`${
        columnIndex === 0
        ? 'p-6'
        : columnIndex === 1
        ? 'p-4'
        : columnIndex === "mobile"
        ? "p-6"
        : 'px-2 py-4'
      }`}>
        <h3 className={`text-2xl leading-none font-bold cursor-pointer ${(work.subtitle && work.subtitle !== "")? "" : "mb-2"}`}>
          <a
            href={work.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary transition-[color] ease-in-out duration-300 hover:text-tertiary"
          >
            {work.title}
          </a>
        </h3>
        {(work.subtitle && work.subtitle !== "")
          ? <p className='mb-2'>{work.subtitle}</p>
          : ""
        }
        <div className="flex gap-2 flex-wrap">
          {work.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 bg-primary text-secondary rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </li>
  );

  return (
    <section className="py-20 bg-primary">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 text-center text-secondary">Mes réalisations</h2>

        {isDesktop ? (
          // Desktop: 3 colonnes, une UL par colonne
          <div className="hidden lg:flex gap-8">
            {[0, 1, 2].map((colIndex) => (
              <div key={colIndex} className={`relative ${colIndex === 0 ? "w-5/12" : colIndex === 1 ? "w-4/12" : "w-3/12"}`}>
                <ul className='flex flex-col sticky top-0 gap-8'>
                  {getColumnWorks(colIndex).map((work) => (
                    <WorkCard
                      key={work.id}
                      columnIndex={colIndex}
                      work={work}
                      heightClass={getHeightClass(colIndex)}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          // Mobile: un seul slider horizontal
          <div className='works__slider-container w-screen relative overflow-x-auto'>
            <ul
              ref={sliderRef}
              onScroll={handleUserInteraction}
              className="flex gap-8 lg:hidden snap-x snap-mandatory overflow-x-auto scroll-smooth touch-auto"
            >
              {works.map((work, index) => (
                <WorkCard
                  key={work.id}
                  work={work}
                  heightClass=""
                  columnIndex="mobile"
                  isMobile={true}
                  cardRef={index === 0 ? cardRef : null}
                />
              ))}
            </ul>
            <button
              onClick={() => {
                if (cardRef.current && sliderRef.current) {
                  const cardWidth = cardRef.current.offsetWidth;
                  const gap = 32; // 2rem = 32px
                  const scrollAmount = cardWidth + gap;
                  const slider = sliderRef.current;

                  const isAtBeginning = activeSlide === 0;
                  if (isAtBeginning) {
                    // Retour au début
                    slider.scrollTo({ left: slider.scrollWidth, behavior: 'smooth' });
                    setActiveSlide(works.length - 1);
                  } else {
                    // Scroll vers la gauche
                    isProgrammaticScroll.current = true;
                    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
                    setActiveSlide((prev) => (prev - 1));
                  }

                  handleUserInteraction();
                }
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md"
            >
              ◀
            </button>

            <button
              onClick={() => {
                if (cardRef.current && sliderRef.current) {
                  const cardWidth = cardRef.current.offsetWidth;
                  const gap = 32; // 2rem = 32px
                  const scrollAmount = cardWidth + gap;
                  const slider = sliderRef.current;

                  const isAtEnd = activeSlide === works.length - 1;

                  if (isAtEnd) {
                    // Retour au début
                    slider.scrollTo({ left: 0, behavior: 'smooth' });
                    setActiveSlide(0);
                  } else {
                    // Scroll vers la droite
                    isProgrammaticScroll.current = true;
                    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                    setActiveSlide((prev) => (prev + 1));
                    console.log(activeSlide)
                  }

                  handleUserInteraction();
                }
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary rounded-full p-2 shadow-md"
            >
              ▶
            </button>
          </div>
        )}
      </div>
    </section>
  );

}
