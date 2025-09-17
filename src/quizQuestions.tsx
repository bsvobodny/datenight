import {
  LuHeart,
  LuUsers,
  LuTrendingUp,
  LuMessageCircle,
  LuHouse,
  LuCalendar,
  LuShield,
  LuDollarSign,
  LuSmile,
  LuUserCheck,
  LuMountain,
  LuLock,
} from 'react-icons/lu'

export type Question = {
  id: number
  title: string
  icon: React.ReactNode
  category: string
  options: {
    A: string
    B: string
    C: string
    D: string
    E: string
  }
}

export type QuestionOptions = 'A' | 'B' | 'C' | 'D' | 'E'

export const questions: Question[] = [
  {
    id: 1,
    title: 'Communication quotidienne',
    icon: <LuMessageCircle className="w-6 h-6" />,
    category: 'Communication',
    options: {
      A: 'Nous parlons profondément de tout, nous nous écoutons vraiment',
      B: 'Nous discutons régulièrement mais parfois superficiellement',
      C: 'Nous échangeons surtout sur la logistique du quotidien',
      D: 'Nous parlons peu, chacun reste dans son monde',
      E: 'Nous avons du mal à communiquer, tensions fréquentes',
    },
  },
  {
    id: 2,
    title: 'Résolution des conflits',
    icon: <LuShield className="w-6 h-6" />,
    category: 'Communication',
    options: {
      A: 'Nous discutons calmement et trouvons toujours des solutions',
      B: 'Nous nous disputons parfois mais résolvons rapidement',
      C: 'Nous évitons souvent les conflits pour préserver la paix',
      D: 'Nos disputes sont fréquentes et difficiles à résoudre',
      E: 'Nous ne nous parlons plus quand nous sommes en désaccord',
    },
  },
  {
    id: 3,
    title: 'Intimité physique',
    icon: <LuHeart className="w-6 h-6" />,
    category: 'Intimité',
    options: {
      A: 'Parfaitement épanouissante et satisfaisante',
      B: 'Généralement satisfaisante avec quelques améliorations possibles',
      C: 'Correcte mais nous aimerions plus de spontanéité',
      D: 'Insuffisante, nous avons perdu en complicité',
      E: "Quasi inexistante, c'est un vrai problème",
    },
  },
  {
    id: 4,
    title: 'Partage des tâches domestiques',
    icon: <LuHouse className="w-6 h-6" />,
    category: 'Organisation',
    options: {
      A: 'Partage équitable et naturel, sans négociation',
      B: 'Généralement bien réparti avec quelques ajustements',
      C: "L'un de nous en fait plus que l'autre",
      D: 'Source de tensions régulières entre nous',
      E: 'Une personne fait tout ou presque',
    },
  },
  {
    id: 5,
    title: 'Temps de qualité ensemble',
    icon: <LuUsers className="w-6 h-6" />,
    category: 'Connexion',
    options: {
      A: 'Beaucoup de moments de qualité, nous nous retrouvons facilement',
      B: 'Régulièrement des moments privilégiés malgré nos emplois du temps',
      C: 'Nous sommes souvent ensemble mais pas toujours "présents"',
      D: 'Peu de temps de qualité, nous subissons le quotidien',
      E: 'Nous nous croisons plus que nous ne nous retrouvons',
    },
  },
  {
    id: 6,
    title: 'Soutien émotionnel',
    icon: <LuSmile className="w-6 h-6" />,
    category: 'Soutien',
    options: {
      A: 'Soutien inconditionnel et compréhension mutuelle totale',
      B: 'Nous savons nous réconforter et nous encourager',
      C: 'Soutien présent mais nous pourrions mieux faire',
      D: 'Difficile de se soutenir, nous gérons seuls nos émotions',
      E: 'Incompréhension mutuelle face aux difficultés',
    },
  },
  {
    id: 7,
    title: 'Projets et objectifs communs',
    icon: <LuTrendingUp className="w-6 h-6" />,
    category: 'Avenir',
    options: {
      A: 'Vision commune claire et projets concrets ensemble',
      B: 'Objectifs compatibles et quelques projets partagés',
      C: "Discussions sur l'avenir mais peu de décisions concrètes",
      D: 'Visions différentes qui créent des tensions',
      E: 'Aucune projection commune, nous vivons au jour le jour',
    },
  },
  {
    id: 8,
    title: "Respect de l'indépendance personnelle",
    icon: <LuUserCheck className="w-6 h-6" />,
    category: 'Équilibre',
    options: {
      A: 'Équilibre parfait entre vie de couple et autonomie',
      B: 'Nous savons préserver nos espaces personnels',
      C: 'Parfois trop fusionnels, parfois trop indépendants',
      D: "L'un a tendance à étouffer l'autre",
      E: 'Difficultés à concilier couple et individualité',
    },
  },
  {
    id: 9,
    title: 'Gestion financière',
    icon: <LuDollarSign className="w-6 h-6" />,
    category: 'Organisation',
    options: {
      A: 'Transparence totale et décisions communes sur tout',
      B: 'Comptes communs pour les dépenses partagées',
      C: "Chacun gère ses finances avec concertation sur l'important",
      D: "Visions différentes de l'argent qui créent des tensions",
      E: 'Un seul gère tout ou désorganisation totale',
    },
  },
  {
    id: 10,
    title: "Expression de l'affection",
    icon: <LuHeart className="w-6 h-6" />,
    category: 'Intimité',
    options: {
      A: "Démonstrations d'affection naturelles et variées au quotidien",
      B: 'Gestes tendres réguliers et mots doux occasionnels',
      C: "Affection présente mais nous pourrions mieux l'exprimer",
      D: 'Pudeur excessive, nous gardons nos sentiments pour nous',
      E: "Plus d'habitude que de vraies marques d'affection",
    },
  },
  {
    id: 11,
    title: 'Vie sociale et amis',
    icon: <LuUsers className="w-6 h-6" />,
    category: 'Social',
    options: {
      A: "Cercles d'amis harmonieusement mélangés",
      B: 'Sorties de couple et sorties individuelles équilibrées',
      C: "Nos amis respectifs s'apprécient globalement",
      D: 'Difficultés à concilier nos différents cercles sociaux',
      E: 'Isolation sociale ou conflits avec les proches',
    },
  },
  {
    id: 12,
    title: 'Croissance personnelle',
    icon: <LuTrendingUp className="w-6 h-6" />,
    category: 'Développement',
    options: {
      A: "Soutien inconditionnel dans tous nos projets d'évolution",
      B: 'Encouragements mutuels avec bienveillance',
      C: "Intérêt pour l'évolution de l'autre mais pas d'implication active",
      D: "Crainte que l'évolution de l'autre affecte notre couple",
      E: 'Aucun encouragement, voire des freins',
    },
  },
  {
    id: 13,
    title: 'Traditions et rituels de couple',
    icon: <LuCalendar className="w-6 h-6" />,
    category: 'Connexion',
    options: {
      A: 'Nombreux rituels qui rythment notre quotidien et nos saisons',
      B: 'Quelques traditions importantes que nous chérissons',
      C: 'Nous aimerions créer plus de moments ritualisés',
      D: 'Nos traditions se limitent aux occasions classiques',
      E: 'Aucun rituel particulier, nous fonctionnons sans cadre',
    },
  },
  {
    id: 14,
    title: 'Gestion du stress et des défis',
    icon: <LuMountain className="w-6 h-6" />,
    category: 'Résilience',
    options: {
      A: 'Solidarité totale, nous sortons renforcés des épreuves',
      B: 'Soutien mutuel même si nous gérons différemment le stress',
      C: 'Nous nous soutenons mais les crises nous fatiguent',
      D: 'Tendance à nous replier sur nous-mêmes sous le stress',
      E: 'Les difficultés créent plus de tensions que de solidarité',
    },
  },
  {
    id: 15,
    title: 'Confiance et honnêteté',
    icon: <LuLock className="w-6 h-6" />,
    category: 'Confiance',
    options: {
      A: 'Confiance totale et transparence absolue',
      B: 'Confiance solide avec quelques zones de pudeur respectées',
      C: 'Confiance globale malgré quelques doutes occasionnels',
      D: 'Méfiance sur certains sujets, communication compliquée',
      E: 'Manque de confiance qui empoisonne la relation',
    },
  },
]
