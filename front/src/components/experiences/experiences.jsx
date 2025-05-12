import './experiences.scss';
import { useState } from 'react';

export default function Experiences() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [revealedSecrets, setRevealedSecrets] = useState({});
  const [unlockingIndex, setUnlockingIndex] = useState();

  const experiences = [
    {
      secret: false,
      title: "Développeur web freelance",
      company: "Indépendant",
      date: "Avril 2024 - Aujourd'hui",
      description: [
        `<p>Puisqu'une présence en ligne est denvenu obligatoire, j'accompagne les entreprises et les indépendants dans la création ou la refonte de leur site internet.</p>
         <p>Je développe des solutions web sur-mesure, des landing pages efficaces, et j'interviens principalement sur <strong>WordPress</strong>, <strong>HubSpot CMS</strong> ou en <strong>React</strong>.</p>
         <p>Je mets à profit mon expérience en agence, mais aussi mes anciens métiers pour structurer les projets avec rigueur :</p>
         <ul>
           <li>planning clair</li>
           <li>validation par étapes</li>
           <li>qualité des échanges</li>
           <li>Vision business</li>
         </ul>
         <p>Mon objectif est simple : traduire les besoins de mes clients en solutions concrètes, belles, et surtout utiles.</p>`
      ],
    },
    {
      secret: false,
      title: "Développeur front-end",
      company: "Markentive - Paris",
      date: "Décembre 2022 - Avril 2024",
      description: [
        `<p>Premier poste après le bootcamp : un vrai plongeon dans le grand bain, avec beaucoup d'apprentissages à la clé. Chez Markentive, je suis monté en compétence rapidement grâce à une culture d'agence très formatrice : rigueur, qualité, rapidité d'exécution, et veille constante.</p>
         <p>J'ai travaillé principalement sur :</p>
         <ul>
           <li>HubSpot CMS (HTML, CSS, JS, Hubl) : développement de pages web et de modules personnalisés pour des entreprises B2B</li>
           <li>WordPress : notamment avec Elementor et WooCommerce. Ces sur ces projets que j'ai pu développer mes Skills en React et en PHP (version wordpress)</li>
         </ul>
         <p>Ces expériences m'ont permis de consolider mes bases, de mieux gérer les priorités et d'adopter une démarche structurée de développement.</p>`
      ],
    },
    {
      secret: false,
      title: "Développeur web (bootcamp)",
      company: "Le Wagon - Lille",
      date: "Août 2022 - Octobre 2022",
      description: [
        `<p>Formation intensive de 9 semaines pour apprendre les bases du développement web et poser les fondations solides de ma reconversion.</p>
         <p>Au programme :</p>
         <ul>
           <li>HTML, CSS, JavaScript</li>
           <li>Ruby, Ruby on Rails</li>
           <li>Bases de données, Git/GitHub</li>
           <li>Méthodes agiles et projets concrets en équipe</li>
         </ul>
         <p>Ce bootcamp a été le déclic final : j'étais prêt à changer de vie et à me lancer en tant que développeur.</p>`
      ],
    },
    {
      secret: true,
      title: "Backpacker",
      company: "",
      date: "Mai 2021 - Juin 2022",
      description: [
        `<p>Un an de voyage à l'autre bout du monde avec ma compagne. C'est sans aucun doute sur cette année là que j'ai le plus appris.</p>
         <p>Une expérience humaine et formatrice qui m'a permis de développer mes <strong>soft skills</strong> :</p>
         <ul>
           <li>résilience</li>
           <li>prise de recul</li>
           <li>gestion du stress</li>
           <li>écoute et persévérance</li>
         </ul>
         <p>C'est aussi pendant ce voyage que j'ai découvert le code. Entre deux bus de nuit et quelques randonnées, j'ai commencé à me former en ligne. OpenClassrooms, tutos YouTube, un blog de cuisine (pas la peine de le chercher il n'est pas en ligne)...</p>
         <p>Cette année m'a profondément changé. Elle a renforcé ma motivation à construire une carrière qui me ressemble, dans un métier stimulant et évolutif.</p>`
      ],
    },
    {
      secret: false,
      title: "Contrôleur de gestion",
      company: "LDM France",
      date: "Mars 2021 - Mars 2022",
      description: [
        `<p>Premier CDI dans le contrôle de gestion : un vrai baptême du feu en remplaçant la seule contrôleuse de la boîte pendant plusieurs mois.</p>
         <p>Responsable de :</p>
         <ul>
           <li>la création et l'analyse des comptes de résultats</li>
           <li>la budgétisation et le suivi des marges</li>
           <li>la gestion des stocks et fichiers de coûts</li>
         </ul>
         <p>Expérience très formatrice sur le plan technique, mais je me suis rapidement rendu compte que je cherchais autre chose : plus de variété, plus de créativité, plus d'impact.</p>
         <p>C'est à ce moment-là que l'idée d'une reconversion dans le développement web commence à faire son chemin.</p>`
      ],
    },
    {
      secret: false,
      title: "Contrôleur de gestion",
      company: "Parc Astérix",
      date: "Janvier 2020 - Avril 2021",
      description: [
        `<p>Alternance dans un grand groupe de loisirs (Compagnie des Alpes) qui m'a permis d'explorer tous les aspects du contrôle de gestion.</p>
         <p>Grâce à une manageuse exigeante et bienveillante, j'ai gagné en autonomie, en rigueur et en méthode.</p>
         <p>Mes missions :</p>
         <ul>
           <li>participation aux budgets</li>
           <li>automatisation de reporting</li>
           <li>clôtures mensuelles et annuelles</li>
           <li>suivi des investissements et des charges marketing</li>
           <li>création de tableaux de bord pour les opérationnels</li>
         </ul>
         <p>Une année riche en apprentissages et en responsabilités qui m'a permis de prendre conscience de mes forces… et du fait que je ne ferai pas longtemps dans ce métier.</p>`
      ],
    },
    {
      secret: true,
      title: "Et avant",
      company: "",
      date: "17 avril 1994 - Décembre 2019",
      description: [
        `<p>Des études en gestion, des stages en finance, une première vie pro dans les chiffres…</p>
         <p>Mais aussi beaucoup de questionnements, d'exploration et de remise en question.</p>
         <p>Chaque étape m'a appris quelque chose, m'a rapproché de ce que je voulais vraiment faire.</p>
         <p>Aujourd'hui, je code. Et tout ce que j'ai vécu avant m'aide à mieux écouter, mieux m'adapter et mieux travailler avec les gens.</p>`
      ],
    }
  ];

  const toggleExperience = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleSecret = (index) => {
    setUnlockingIndex(index)
    setTimeout(() => {
      setRevealedSecrets((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    }, 500);
  };

  return (
    <section className="container timeline" aria-labelledby="experiences-title">
      <h2 id="experiences-title" className="text-4xl font-bold mb-12 text-center text-primary">Mes expériences</h2>

      <div className="timeline mx-auto max-w-4xl" role="list">
        {experiences.map((experience, index) => (
          <div key={index} className="mb-6" role="listitem">
            {!experience.secret ? (
              <div
                className={`timeline-item cursor-pointer ${
                  activeIndex === index ? "timeline-item--opened" : ""
                }`}
                onClick={() => toggleExperience(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleExperience(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-expanded={activeIndex === index}
                aria-controls={`experience-content-${index}`}
              >
                <div className="timeline-item__header">
                  <div className="timeline-item__title">{experience.title}</div>
                  <div className="timeline-item__date">{experience.date}</div>
                </div>
                <div className="timeline-item__company text-tertiary mb-2">{experience.company}</div>
                <div
                  id={`experience-content-${index}`}
                  className={`timeline-item__content transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'opacity-100 max-h-[500px]' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                  aria-hidden={activeIndex !== index}
                >
                  <div
                    className="p-4 timeline-item__content-description"
                    dangerouslySetInnerHTML={{ __html: experience.description }}
                  />
                </div>
              </div>
            ) : (
              <div className="relative mb-6">
                {!revealedSecrets[index] ? (
                  <div className="flex justify-center">
                    <button
                      className={`lock${unlockingIndex === index ? ' unlocked' : ''}`}
                      onClick={() => toggleSecret(index)}
                      aria-label="Révéler une expérience secrète"
                    >
                    </button>
                  </div>
                ) : (
                  <div
                    className={`timeline-item cursor-pointer animate-fade-in-zoom transition-all duration-700 ${
                      activeIndex === index ? "timeline-item--opened" : ""
                    }`}
                    onClick={() => toggleExperience(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        toggleExperience(index);
                      }
                    }}
                    role="button"
                    tabIndex={0}
                    aria-expanded={activeIndex === index}
                    aria-controls={`secret-content-${index}`}
                  >
                    <div className="timeline-item__header">
                      <div className="timeline-item__title">{experience.title}</div>
                      <div className="timeline-item__date">{experience.date}</div>
                    </div>
                    <div className="timeline-item__company text-tertiary mb-2">{experience.company}</div>
                    <div
                      id={`secret-content-${index}`}
                      className={`timeline-item__content transition-all duration-300 ease-in-out ${
                        activeIndex === index ? 'opacity-100 max-h-[500px]' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}
                      aria-hidden={activeIndex !== index}
                    >
                      <div
                        className="p-4 timeline-item__content-description"
                        dangerouslySetInnerHTML={{ __html: experience.description }}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
