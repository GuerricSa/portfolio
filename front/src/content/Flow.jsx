const flow = {
  Q1: {
    key: 'q1',
    question: 'Quel est votre besoin ?',
    type: 'select',
    options: [
      { label: 'Je recherche un accompagnement', value: 'accompagnement', next: 'Q2' },
      { label: 'J’ai besoin d’un site', value: 'site', next: 'Q7' },
    ],
  },
  Q2: {
    key: 'q2',
    question: 'Vous avez donc déjà un site internet ?',
    type: 'select',
    options: [
      { label: 'Oui', value: 'oui', next: 'Q3' },
      { label: 'Non', value: 'non', next: 'Q6' },
    ],
  },
  Q3: {
    key: 'q3',
    question: 'Est-il sur un CMS ?',
    type: 'select',
    options: [
      { label: 'Oui', value: 'oui', next: 'Q4' },
      { label: 'Non', value: 'non', next: 'Q5' },
      { label: 'Je ne sais pas', value: 'idk', next: 'Q5' },
    ],
  },
  Q4: {
    key: 'q4',
    question: 'Quel est le CMS de votre site actuel ?',
    type: 'select',
    options: [
      { label: 'Wordpress', value: 'wordpress', next: 'Q5' },
      { label: 'Hubspot', value: 'hubspot', next: 'Q5' },
      { label: 'Wix', value: 'wix', next: 'E1' },
      { label: 'SquareSpace', value: 'squarespace', next: 'E1' },
      { label: 'Webflow', value: 'webflow', next: 'Q5' },
      { label: 'Shopify', value: 'shopify', next: 'Q5' },
      { label: 'Magento', value: 'magento', next: 'Q5' },
      { label: 'PrestaShop', value: 'prestashop', next: 'Q5' },
      { label: 'Autre', value: 'autre', next: 'Q5' },
    ],
  },
  Q5: {
    key: 'q5',
    question: 'De quel type d’accompagnement avez-vous besoin ?',
    type: 'multi-select',
    options: [
      { label: 'Création de nouvelles pages', value: 'newPages', next: 'E2' },
      { label: 'Modification légère sur des pages existantes', value: 'lightEdit', next: 'E2' },
      { label: 'Nouvelles sections sur des pages existantes', value: 'sections', next: 'E2' },
      { label: 'Refonte totale', value: 'refonte', next: 'E3' },
    ],
  },
  Q6: {
    key: 'q6',
    question: 'Vous recherchez donc du conseil ?',
    type: 'select',
    options: [
      { label: 'Oui', value: 'oui', next: 'E4' },
      { label: 'Non', value: 'non', next: 'E4' },
    ],
  },
  Q7: {
    key: 'q7',
    question: 'Avez-vous des maquettes du site que vous souhaitez réaliser ?',
    type: 'select',
    options: [
      { label: 'Oui', value: 'oui', next: 'Q8' },
      { label: 'Non', value: 'non', next: 'Q8' },
    ],
  },
  Q8: {
    key: 'q8',
    question: 'Est-ce une page de vente, un site vitrine, ou un site marchand ?',
    type: 'select',
    options: [
      { label: 'Une page de vente', value: 'landing', next: 'Q9' },
      { label: 'Un site vitrine', value: 'vitrine', next: 'Q9' },
      { label: 'Un site marchand', value: 'ecommerce', next: 'Q9' },
    ],
  },
  Q9: {
    key: 'q9',
    question: 'Y a-t-il des spécificités à votre site ?',
    type: 'multi-select',
    options: [
      { label: 'Blog', value: 'blog', next: 'Q10' },
      { label: 'Connexions à des outils tiers', value: 'api', next: 'Q10' },
      { label: 'Animations spéciales', value: 'animations', next: 'Q10' },
      { label: 'Site multilingue', value: 'multilingue', next: 'Q10' },
    ],
  },
  Q10: {
    key: 'q10',
    question: 'Combien de pages souhaitez-vous avoir ?',
    type: 'range',
    min: 1,
    max: 10,
    step: 1,
    next: 'E5',
  },
  E1: {
    key: 'e1',
    type: 'answer',
    title: 'Ces CMS ne sont pas personnalisables',
    text: `Il y a très peu de modification de code possible sur ce genre de CMS.
Malgré tout :
- Si vous pensez que je peux vous aider, contactez-moi directement.
- Si vous en avez marre d’être limité et souhaitez changer de CMS, vous pouvez m’envoyer un mail ou recommencer l’estimation en choisissant “non” à "j’ai déjà un site internet."`,
    buttons: [
      { label: 'Contactez-moi', action: 'contact' },
      { label: 'Recommencer l’estimation', action: 'restart' },
    ],
  },
  E2: {
    key: 'e2',
    type: 'answer',
    title: 'Voici mon tarif',
    text: `Il est difficile de donner un tarif exact, mais pour l’accompagnement, je facture environ 400€ par jour. Pourquoi environ ? Parce que la prise en main d’un site internet que je n’ai pas développé me prend plusieurs heures, donc si je ne travaille que 2/3 jours, le tarif aura tendance à être plus important. Si l’accompagnement est sur le long terme, je serai de plus en plus efficace, ce sera donc moins cher. Si vous souhaitez travailler avec moi, vous pouvez programmer un point sur mon Calendly.`,
    buttons: [
      { label: 'Prendre rendez-vous', action: 'calendly' },
      { label: 'Recommencer l’estimation', action: 'restart' },
    ],
  },
  E3: {
    key: 'e3',
    type: 'answer',
    title: 'Vous souhaitez une refonte totale',
    text: `Pour estimer la refonte totale, vous pouvez recommencer l’estimation avec le bouton ci-dessous. Soit depuis le début, soit avec la réponse : “j’ai déjà un site internet” marqué à “non”, pour estimer la création d’un nouveau site. Si vous préférez, vous pouvez aussi directement prendre rendez-vous, pour qu’on en discute de vive voix.`,
    buttons: [
      { label: 'Recommencer depuis le début', action: 'restart' },
      { label: 'Recommencer pour la création d’un site internet', action: 'restart-new-site' },
      { label: 'Prendre rendez-vous', action: 'calendly' },
    ],
  },
  E4: {
    key: 'e4',
    type: 'answer',
    title: 'Consulting',
    text: `Pouvez-vous m’en dire un peu plus sur ce que je peux-vous apporter ? Je ne manquerai pas de vous répondre dans les plus brefs délais.`,
    form: true,
  },
  E5: {
    key: 'e5',
    type: 'answer',
    title: 'Estimation création',
    text: `D’après les estimations, pour un Reponseq8 de Reponseq10 pages, Reponseq7 et avec les options : Reponseq9, il faut compter : EstimationTotal€.
    Bien sûr, ceci n’est qu’une estimation. Si vous souhaitez approfondir le sujet, prenez un rendez-vous sur mon Calendly, je serai ravi d’en discuter.`,
    buttons: [
      { label: 'Recommencez une estimation', action: 'restart' },
      { label: 'Prendre rendez-vous', action: 'calendly' },
    ],
  },
};

export default flow;
