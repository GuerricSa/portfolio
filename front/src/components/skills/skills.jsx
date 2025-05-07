import './skills.scss';
import htmlLogo from '../../images/skills_logos/html.svg';
import cssLogo from '../../images/skills_logos/css.svg';
import jsLogo from '../../images/skills_logos/javascript.svg';
import reactLogo from '../../images/skills_logos/react.svg';
import nodeLogo from '../../images/skills_logos/nodejs.svg';
import tailwindLogo from '../../images/skills_logos/tailwindcss.svg';
import phpLogo from '../../images/skills_logos/php.svg';
import rubyLogo from '../../images/skills_logos/ruby.svg';
import wordpressLogo from '../../images/skills_logos/wordpress.svg';
import drupalLogo from '../../images/skills_logos/drupal.svg';
import hubspotLogo from '../../images/skills_logos/hubspot.svg';
import figmaLogo from '../../images/skills_logos/figma.svg';
import notionLogo from '../../images/skills_logos/notion.svg';
import slackLogo from '../../images/skills_logos/slack.svg';
import { useState, useRef, useEffect } from 'react';

export default function Skills() {
  const [activeDescription, setActiveDescription] = useState("frontendLogos");
  const [containerHeight, setContainerHeight] = useState(0);
  const activeDescriptionRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 728);


  // Calcule la hauteur maximale parmi toutes les descriptions
  useEffect(() => {
    const updateHeight = () => {
      const descriptionNodes = document.querySelectorAll(".skills__description");
      if (!descriptionNodes.length) return;

      let maxHeight = 0;

      descriptionNodes.forEach(node => {
        const height = node.offsetHeight;
        if (height > maxHeight) {
          maxHeight = height;
        }
      });

      if (window.innerWidth >= 728) {
        setIsDesktop(true);
        setContainerHeight(maxHeight > 450 ? maxHeight : 450);
      } else {
        setIsDesktop(false);
        setContainerHeight(maxHeight);
      }
    };

    updateHeight();

    const handleWindowResize = () => {
      setContainerHeight("auto");

      requestAnimationFrame(() => {
        updateHeight();
      });
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);






  // Organisation des logos par catégorie
  const frontendLogos = [
    { src: htmlLogo, alt: 'Logo HTML' },
    { src: cssLogo, alt: 'Logo CSS' },
    { src: jsLogo, alt: 'Logo JavaScript' },
    { src: reactLogo, alt: 'Logo React' },
    { src: tailwindLogo, alt: 'Logo Tailwind CSS' }
  ];

  const backendLogos = [
    { src: nodeLogo, alt: 'Logo Node.js' },
    { src: phpLogo, alt: 'Logo PHP' },
    { src: rubyLogo, alt: 'Logo Ruby' }
  ];

  const cmsLogos = [
    { src: wordpressLogo, alt: 'Logo WordPress' },
    { src: drupalLogo, alt: 'Logo Drupal' },
    { src: hubspotLogo, alt: 'Logo HubSpot' }
  ];

  const designLogos = [
    { src: figmaLogo, alt: 'Logo Figma' }
  ];

  const toolsLogos = [
    { src: notionLogo, alt: 'Logo Notion' },
    { src: slackLogo, alt: 'Logo Slack' }
  ];

  const descriptions = {
    frontendLogos: "<h3><strong>Frontend</strong></h3><p>Le front-end, c’est la partie visible d’un site : ce que les utilisateurs voient et avec quoi ils interagissent. Cela inclut l’affichage des contenus, les animations, les boutons ou encore la navigation.</p><p>J’utilise principalement <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong> et <strong>Tailwind CSS</strong> pour créer des interfaces modernes, rapides et adaptées à tous les écrans.</p><p>C'est le coeur de mon métier et ce pourquoi la majorité de mes clients me paient.</p>",
    backendLogos: "<h3><strong>Backend</strong></h3><p>Le back-end désigne la partie “invisible” d’un site ou d’une application : gestion des données, des utilisateurs, des formulaires ou encore des bases de données.</p><p>J’ai découvert le back-end pendant ma formation avec <strong>Ruby on Rails</strong>, puis j’ai continué à apprendre avec <strong>Node.js</strong> et <strong>PHP</strong sur différents projets clients.</p><p>Ces compétences me permettent de créer des sites plus dynamiques, capables de stocker et traiter des informations de manière fiable.</p>",
    cmsLogos: "<h3><strong>CMS</strong></h3><p>Un CMS (Content Management System) est un outil qui permet de créer et gérer un site sans avoir à coder toute la structure à la main. C’est très pratique pour les sites vitrines ou les blogs.</p><p>Je maîtrise plusieurs CMS populaires comme <strong>WordPress</strong>, <strong>Drupal</strong> et <strong>HubSpot</strong>. Je les utilise pour créer des sites faciles à mettre à jour, performants et bien référencés.</p><p>Dans mon dernier job, j’ai beaucoup travaillé sur <strong>HubSpot</strong> et <strong>Wordpress</strong>pour intégrer des pages sur-mesure et accompagner des clients B2B dans leur stratégie web.</p>",
    toolsLogos: "<h3><strong>Autres outils</strong></h3><p>Au-delà du code, j’utilise plusieurs outils pour mieux collaborer, structurer mes projets ou concevoir des maquettes avant le développement.</p><p><strong>Figma</strong> me permet de transformer des idées en maquettes visuelles claires. <strong>Notion</strong est mon centre de gestion de projet : je m’en sers pour organiser les tâches et échanger avec mes clients, je m'en sers d'ailleurs aussi pour gérer mon entreprise</strong>. Slack est un outil de communication rapide, très utilisé en équipe.</p><p>Bien sur, il y a de nombreux autres outils avec lesquelles je peux travailler. Que ce soit chez Microsoft ou chez Google.</p>",
  }


  // Fonction pour positionner les logos sur un cercle
  const positionLogos = (logos, circle) => {
    const positions = {
      2: [
        { left: '25%', top: '50%' },
        { left: '75%', top: '50%' }
      ],
      3: [
        { left: '50%', top: '0%' },
        { left: '3.33%', top: '66.66%' },
        { left: '96.66%', top: '66.66%' }
      ],
      4: [
        { left: '50%', top: '0%' },
        { left: '0%', top: '50%' },
        { left: '50%', top: '100%' },
        { left: '100%', top: '50%' }
      ],
      5: [
        { left: '50%', top: '0%' },
        { left: '4%', top: '30%' },
        { left: '20%', top: '90%' },
        { left: '96%', top: '30%' },
        { left: '80%', top: '90%' }
      ]
    };

    return logos.map((logo, index) => {
      const position = positions[logos.length][index];
      return (
        <img
          key={logo.alt}
          src={logo.src}
          alt={logo.alt}
          width="40px"
          height="40px"
          loading='lazy'
          onClick={() => setActiveDescription(circle)}
          className={`logo w-7 lg:w-10 h-7 lg:h-10 transition-[filter] grayscale hover:grayscale-0${activeDescription === circle ? " grayscale-0" : ""}`}
          style={{
            left: position.left,
            top: position.top,
            transform: 'translate(-50%, -50%)'
          }}
        />
      );
    });
  };

  return (
    <section className="bg-primary skills">
      <div className="container">
        <h2 className="text-4xl font-bold mb-8 lg:mb-12 text-secondary">Mes compétences techniques</h2>
        <div
          className="flex flex-col md:flex-row-reverse justify-between gap-5"
        >
          <div className="w-full md:w-1/2 bg-secondary rounded-md">
            <div className="circle-container">
              <div className="circle circle-1">
                {positionLogos(frontendLogos, "frontendLogos")}
              </div>
              <div className="circle circle-2">
                {positionLogos(backendLogos, "backendLogos")}
              </div>
              <div className="circle circle-3">
                {positionLogos(cmsLogos, "cmsLogos")}
              </div>
              <div className="circle circle-4">
                {positionLogos([...designLogos, ...toolsLogos], "toolsLogos")}
              </div>
            </div>
          </div>
          <div
            className="w-full md:w-1/2 h-full relative skills__descriptions-container"
            style={{minHeight: containerHeight}}
          >
            {Object.entries(descriptions).map(([key, desc]) => (
              <div
                key={key}
                ref={activeDescription === key ? activeDescriptionRef : null}
                className={`skills__description w-full p-6 lg:p-10 bg-secondary rounded-md absolute transition-all duration-1000 ease-in-out
                  ${activeDescription === key ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full pointer-events-none'}`}
                dangerouslySetInnerHTML={{ __html: desc }}
                style={{minHeight: containerHeight}}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
