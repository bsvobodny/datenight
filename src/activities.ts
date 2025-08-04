export type Activity = {
  id: string
  name: string
  description: string
}

export type Category = {
  name: string
}

type SubCategory = {
  name: string
  activities: Activity[]
}

type Activities = Record<string, SubCategory>

export const entertainment: Activities = {
  jeux_et_defis: {
    name: 'Jeux et Défis',
    activities: [
      {
        id: 'a1b2c3d4e5f6',
        name: 'Jeu de société à deux',
        description:
          'Choisissez un jeu de société adapté à deux joueurs pour passer un moment ludique et complice ensemble dans une atmosphère détendue.',
      },
      {
        id: 'b2c3d4e5f6a1',
        name: 'Puzzle ensemble',
        description:
          'Assemblez un puzzle à deux pour développer votre patience et votre collaboration tout en créant quelque chose de beau ensemble.',
      },
      {
        id: 'c3d4e5f6a1b2',
        name: 'Jeu de cartes classique',
        description:
          'Redécouvrez les plaisirs simples avec un jeu de cartes traditionnel qui favorise la stratégie et les échanges amusants entre partenaires.',
      },
      {
        id: 'd4e5f6a1b2c3',
        name: 'Charades romantiques',
        description:
          'Jouez aux charades avec des mots liés à votre relation, vos souvenirs communs ou des thèmes romantiques pour des éclats de rire.',
      },
      {
        id: 'e5f6a1b2c3d4',
        name: 'Quiz sur votre relation',
        description:
          'Testez vos connaissances mutuelles avec un quiz personnalisé sur votre histoire, vos goûts et vos rêves partagés ou individuels.',
      },
      {
        id: 'f6a1b2c3d4e5',
        name: 'Jeu du "Tu préfères"',
        description:
          'Explorez vos préférences et découvrez de nouveaux aspects de votre personnalité mutuelle avec ce jeu de choix amusant et révélateur.',
      },
      {
        id: 'a1b2c3d4e5f7',
        name: 'Devinettes et énigmes',
        description:
          'Stimulez votre intellect avec des devinettes et énigmes qui vous feront réfléchir ensemble et célébrer vos victoires intellectuelles communes.',
      },
      {
        id: 'b2c3d4e5f7a1',
        name: 'Jeu de mémoire sur vos souvenirs',
        description:
          'Créez un jeu de mémoire basé sur vos photos et souvenirs communs pour raviver de beaux moments passés ensemble.',
      },
      {
        id: 'c3d4e5f7a1b2',
        name: 'Bataille de pouces',
        description:
          "Retrouvez votre âme d'enfant avec cette activité simple et amusante qui peut se transformer en moment de complicité et de rires.",
      },
      {
        id: 'd4e5f7a1b2c3',
        name: 'Jeu de construction (Lego, Jenga)',
        description:
          'Construisez quelque chose ensemble ou testez votre adresse avec des jeux de construction qui demandent concentration et délicatesse partagées.',
      },
    ],
  },
  activities_culturelles: {
    name: 'Activités Culturelles',
    activities: [
      {
        id: 'e5f7a1b2c3d4',
        name: "Visite virtuelle d'un musée",
        description:
          'Explorez ensemble les plus grands musées du monde depuis votre canapé grâce aux visites virtuelles pour enrichir votre culture commune.',
      },
      {
        id: 'f7a1b2c3d4e5',
        name: "Lecture d'un livre ensemble",
        description:
          "Partagez la lecture d'un livre en alternant les chapitres ou en lisant simultanément pour ensuite échanger vos impressions et analyses.",
      },
      {
        id: 'a1b2c3d4e5f8',
        name: "Écoute d'un album musical complet",
        description:
          "Redécouvrez le plaisir d'écouter un album dans son intégralité en vous concentrant sur les nuances musicales et les émotions transmises.",
      },
      {
        id: 'b2c3d4e5f8a1',
        name: 'Visionnage de courts métrages',
        description:
          "Découvrez l'art du court métrage en explorant différents genres et styles cinématographiques pour des discussions enrichissantes sur l'art visuel.",
      },
      {
        id: 'c3d4e5f8a1b2',
        name: 'Apprentissage de mots dans une langue étrangère',
        description:
          'Apprenez ensemble quelques mots ou expressions dans une langue qui vous fascine pour enrichir votre vocabulaire et votre culture linguistique.',
      },
      {
        id: 'd4e5f8a1b2c3',
        name: 'Dégustation de thés ou cafés',
        description:
          'Organisez une dégustation de différents thés ou cafés pour éveiller vos papilles et découvrir de nouvelles saveurs ensemble avec attention.',
      },
      {
        id: 'e5f8a1b2c3d4',
        name: "Écoute d'une pièce radiophonique",
        description:
          "Plongez dans l'univers de la fiction audio avec une pièce radiophonique captivante qui stimulera votre imagination et votre écoute active.",
      },
      {
        id: 'f8a1b2c3d4e5',
        name: "Découverte d'un artiste inconnu",
        description:
          "Explorez le travail d'un artiste que vous ne connaissez pas encore pour élargir vos horizons artistiques et partager de nouvelles émotions esthétiques.",
      },
      {
        id: 'a1b2c3d4e5f9',
        name: 'Lecture de poésie à voix haute',
        description:
          'Lisez de la poésie à tour de rôle pour apprécier la beauté des mots, le rythme des vers et créer une atmosphère intime.',
      },
      {
        id: 'b2c3d4e5f9a1',
        name: "Exploration d'une culture différente",
        description:
          'Choisissez une culture que vous connaissez peu et explorez ses traditions, sa cuisine, son art pour voyager intellectuellement sans bouger de chez vous.',
      },
    ],
  },
  activities_apprentissage: {
    name: "Activités d'Apprentissage",
    activities: [
      {
        id: 'c3d4e5f9a1b2',
        name: 'Tuto de danse lente',
        description:
          'Apprenez ensemble les pas de base de la danse lente pour créer des moments romantiques et développer votre complicité physique harmonieuse.',
      },
      {
        id: 'd4e5f9a1b2c3',
        name: 'Cours de cuisine simple',
        description:
          'Préparez ensemble un plat simple en suivant une recette détaillée pour partager les plaisirs culinaires et créer de savoureux souvenirs communs.',
      },
      {
        id: 'e5f9a1b2c3d4',
        name: "Apprentissage d'un nœud de cravate",
        description:
          "Maîtrisez ensemble l'art de faire un nœud de cravate élégant, compétence pratique qui peut s'avérer utile dans diverses occasions formelles.",
      },
      {
        id: 'f9a1b2c3d4e5',
        name: 'Initiation à la calligraphie',
        description:
          "Découvrez l'art de la belle écriture en vous initiant aux techniques de calligraphie pour créer de beaux textes décoratifs ensemble.",
      },
      {
        id: 'a1b2c3d4e5f0',
        name: 'Leçon de massage thérapeutique',
        description:
          'Apprenez les techniques de base du massage thérapeutique pour vous détendre mutuellement et créer des moments de bien-être partagé réguliers.',
      },
      {
        id: 'b2c3d4e5f0a1',
        name: "Apprentissage d'une chanson ensemble",
        description:
          'Choisissez une chanson que vous aimez tous les deux et apprenez-la par cœur pour pouvoir la chanter ensemble lors de moments spéciaux.',
      },
      {
        id: 'c3d4e5f0a1b2',
        name: "Cours d'origami avancé",
        description:
          "Perfectionnez votre technique d'origami avec des modèles plus complexes qui demandent patience, précision et concentration pour créer de vraies œuvres d'art.",
      },
      {
        id: 'd4e5f0a1b2c3',
        name: 'Initiation à la magie simple',
        description:
          "Apprenez quelques tours de magie simples pour surprendre vos proches et développer votre dextérité tout en vous amusant avec l'art de l'illusion.",
      },
      {
        id: 'e5f0a1b2c3d4',
        name: 'Apprentissage de techniques de relaxation',
        description:
          'Découvrez ensemble différentes méthodes de relaxation comme la respiration profonde ou la méditation pour améliorer votre bien-être quotidien mutuel.',
      },
      {
        id: 'f0a1b2c3d4e5',
        name: 'Cours de premiers secours basique',
        description:
          "Apprenez les gestes de premiers secours essentiels pour être préparés en cas d'urgence et développer des compétences utiles pour votre sécurité.",
      },
    ],
  },
}

export const intimate: Activities = {
  connexion_emotionnelle_profonde: {
    name: 'Connexion Émotionnelle Profonde',
    activities: [
      {
        id: '7d4f2e8a9b3c1d5f',
        name: 'Exercice de regard dans les yeux (5 min)',
        description:
          'Regardez-vous intensément dans les yeux pendant 5 minutes sans parler, créant une connexion profonde et intime qui renforce votre lien émotionnel.',
      },
      {
        id: 'a8c3e7f2d9b4e1c6',
        name: 'Partage de peurs et vulnérabilités',
        description:
          "Partagez vos peurs les plus profondes et vos vulnérabilités dans un espace sécurisé, renforçant la confiance et l'intimité émotionnelle.",
      },
      {
        id: 'f5b8d2c7e3a9f1d4',
        name: "Écriture d'une lettre d'amour",
        description:
          "Rédigez une lettre d'amour personnalisée exprimant vos sentiments les plus profonds, créant un souvenir précieux et touchant pour votre partenaire.",
      },
      {
        id: 'c9e4f7a2d8b5c3e1',
        name: 'Jeu des "36 questions pour tomber amoureux"',
        description:
          "Explorez 36 questions scientifiquement conçues pour approfondir l'intimité émotionnelle et potentiellement raviver ou renforcer les sentiments amoureux entre partenaires.",
      },
      {
        id: 'b7f3e8d1c4a9e2f5',
        name: 'Partage de fantasmes non-sexuels',
        description:
          "Partagez vos rêves, aspirations et fantasmes de vie non-sexuels, explorant ensemble vos désirs profonds et vos visions d'avenir.",
      },
      {
        id: 'e6a9f4b7c2d8e5f1',
        name: "Discussion sur vos langages d'amour",
        description:
          "Explorez et identifiez vos langages d'amour respectifs pour mieux comprendre comment donner et recevoir l'affection de manière significative.",
      },
      {
        id: 'd8f2c5e9a3b7f4c1',
        name: 'Exercice de pardon et réconciliation',
        description:
          'Pratiquez le pardon mutuel et la réconciliation pour résoudre les conflits passés et renforcer votre lien émotionnel et spirituel.',
      },
      {
        id: 'a4e7f9b2c6d3e8f5',
        name: 'Partage de vos plus beaux souvenirs ensemble',
        description:
          'Remémorez-vous et partagez vos moments les plus précieux et significatifs vécus ensemble, ravivant la joie et la connexion émotionnelle.',
      },
      {
        id: 'f1c8e4b9d2a7f3e6',
        name: "Création d'un tableau de vision couple",
        description:
          'Créez ensemble un tableau visuel représentant vos objectifs, rêves et aspirations communes pour votre avenir en tant que couple.',
      },
      {
        id: 'c5f9e2a8d4b7c1f3',
        name: "Méditation de l'amour bienveillant",
        description:
          "Pratiquez ensemble une méditation focalisée sur l'amour bienveillant, cultivant la compassion et l'amour inconditionnel l'un envers l'autre.",
      },
    ],
  },
  intimite_physique_douce: {
    name: 'Intimité Physique Douce',
    activities: [
      {
        id: 'e8d3f7a4c9b2e5f1',
        name: 'Massage sensuel non-sexuel',
        description:
          'Offrez-vous mutuellement un massage relaxant et sensuel sans intention sexuelle, focalisé sur la détente et la connexion physique tendre.',
      },
      {
        id: 'b9f4c6e1d7a3f8b2',
        name: 'Caresses douces et attentionnées',
        description:
          'Échangez des caresses délicates et attentionnées sur tout le corps, explorant le toucher tendre et la sensualité douce.',
      },
      {
        id: 'f2a7e9c4d8b5f1c3',
        name: 'Brossage mutuel des cheveux',
        description:
          'Brossez délicatement les cheveux de votre partenaire avec attention et tendresse, créant une intimité apaisante et relaxante.',
      },
      {
        id: 'd6c9f3e8a2b7d4f1',
        name: 'Massage du cuir chevelu',
        description:
          'Massez doucement le cuir chevelu de votre partenaire avec vos doigts, procurant une relaxation profonde et une sensation apaisante.',
      },
      {
        id: 'a3f8e4c7b9d2a5f6',
        name: 'Caresses du visage délicates',
        description:
          'Caressez tendrement le visage de votre partenaire avec vos mains, explorant chaque contour avec douceur et affection.',
      },
      {
        id: 'c1e9f5b8d3a7c4f2',
        name: 'Étreintes prolongées',
        description:
          "Tenez-vous dans les bras l'un de l'autre pendant plusieurs minutes, permettant une connexion physique profonde et réconfortante.",
      },
      {
        id: 'f7b4c8e2d9a3f6c1',
        name: 'Massage des mains détaillé',
        description:
          'Massez méticuleusement les mains de votre partenaire, incluant les doigts, paumes et poignets, avec attention et délicatesse.',
      },
      {
        id: 'e5d8f2a9c4b7e3f1',
        name: 'Caresses du dos apaisantes',
        description:
          'Caressez le dos de votre partenaire avec des mouvements lents et apaisants, procurant relaxation et connexion physique douce.',
      },
      {
        id: 'b8f1c5e9d2a6f4c3',
        name: 'Jeu de plumes sur la peau',
        description:
          'Utilisez des plumes douces pour caresser délicatement la peau de votre partenaire, créant des sensations subtiles et agréables.',
      },
      {
        id: 'a2c7f9e4d8b3a5f1',
        name: 'Massage aux huiles chaudes',
        description:
          'Utilisez des huiles chaudes pour masser votre partenaire, combinant chaleur réconfortante et toucher sensuel pour une expérience relaxante.',
      },
    ],
  },
  activities_sensuelles: {
    name: 'Activités Sensuelles',
    activities: [
      {
        id: 'f9c4e7b2d8a5f3c1',
        name: "Dégustation à l'aveugle avec fruits",
        description:
          'Nourrissez votre partenaire avec différents fruits les yeux bandés, explorant les saveurs et textures ensemble de manière sensuelle.',
      },
      {
        id: 'c6f8e3a9d4b7c2f5',
        name: 'Massage avec glaçons',
        description:
          'Utilisez des glaçons pour masser délicatement la peau de votre partenaire, créant des sensations de froid contrastées et stimulantes.',
      },
      {
        id: 'e4a8f5c2d9b3e7f1',
        name: 'Échange de baisers créatifs',
        description:
          "Explorez différents types de baisers créatifs et playful, découvrant de nouvelles façons d'exprimer votre affection et passion.",
      },
      {
        id: 'd7f2c9e4a8b5d1f3',
        name: 'Jeu de température (chaud/froid)',
        description:
          'Alternez entre sensations chaudes et froides sur la peau de votre partenaire, créant un contraste stimulant et sensuel.',
      },
      {
        id: 'b5e9f3c7d2a8b4f1',
        name: 'Caresses avec différentes textures',
        description:
          'Utilisez divers matériaux aux textures variées pour caresser votre partenaire, explorant les sensations tactiles et la sensualité.',
      },
      {
        id: 'f1c8e5a9d3b7f2c4',
        name: 'Massage avec chocolat fondu',
        description:
          'Utilisez du chocolat fondu tiède pour masser votre partenaire, combinant gourmandise et sensualité dans une expérience délicieuse.',
      },
      {
        id: 'a8d4f7c2e9b5a3f1',
        name: 'Jeu de souffle sur la peau',
        description:
          'Soufflez délicatement sur différentes parties du corps de votre partenaire, créant des sensations subtiles et érotiques.',
      },
      {
        id: 'c3f9e6d1a7c8f4b2',
        name: "Caresses guidées par l'autre",
        description:
          'Laissez votre partenaire guider vos mains pour vous montrer comment il aime être caressé, explorant ses préférences sensuelles.',
      },
      {
        id: 'e7b3f8c5d9a2e6f1',
        name: 'Exploration sensorielle douce',
        description:
          'Explorez ensemble tous vos sens de manière douce et sensuelle, découvrant de nouvelles sensations et plaisirs partagés.',
      },
      {
        id: 'f4c1e8b9d5a7f3c2',
        name: 'Massage avec plumes',
        description:
          'Utilisez des plumes de différentes tailles et textures pour masser délicatement votre partenaire, créant des sensations douces et agréables.',
      },
    ],
  },
}

export const reconnexion: Activities = {
  relaxation: {
    name: 'Activités de Relaxation',
    activities: [
      {
        id: 'a4c8f2e9b1d7',
        name: 'Séance de méditation guidée à deux',
        description:
          "Moment d'introspection partagé pour apaiser l'esprit et renforcer la connexion spirituelle à travers une méditation guidée pratiquée ensemble en silence contemplatif.",
      },
      {
        id: 'b7e3a1f5c8d2',
        name: 'Étirements et yoga doux ensemble',
        description:
          'Pratique douce du yoga en binôme pour détendre les muscles, améliorer la flexibilité et harmoniser vos énergies dans un cadre paisible et bienveillant.',
      },
      {
        id: 'c9f4b2e8a6d3',
        name: 'Massage des épaules mutuellement',
        description:
          "Échange de massages relaxants pour soulager les tensions du quotidien, favoriser la détente musculaire et créer un moment d'intimité et de bienveillance mutuelle.",
      },
      {
        id: 'd1a7c5f9b4e2',
        name: 'Bain aux chandelles partagé',
        description:
          'Immersion romantique dans un bain chaud éclairé de bougies parfumées, créant une atmosphère apaisante et sensuelle pour vous reconnecter dans la douceur.',
      },
      {
        id: 'e8b3d6a2f7c1',
        name: "Écoute d'un podcast de développement personnel",
        description:
          "Découverte commune d'un contenu enrichissant sur le développement personnel, ouvrant la discussion sur vos aspirations et votre croissance personnelle en couple.",
      },
      {
        id: 'f2c9e5b8d4a6',
        name: 'Exercices de respiration synchronisée',
        description:
          'Pratique de techniques respiratoires coordonnées pour harmoniser vos rythmes, réduire le stress et créer une connexion profonde par la synchronisation de vos souffles.',
      },
      {
        id: 'a6d1f8c3b7e9',
        name: 'Massage des pieds réciproque',
        description:
          "Soin mutuel des pieds par des massages relaxants, libérant les tensions accumulées et offrant un moment de détente pure dans un geste d'amour.",
      },
      {
        id: 'b4e7a9f2c5d8',
        name: "Séance d'aromathérapie avec huiles essentielles",
        description:
          "Utilisation d'huiles essentielles apaisantes pour créer une ambiance relaxante, stimuler vos sens et favoriser un état de bien-être profond et de sérénité partagée.",
      },
      {
        id: 'c3f6b1e4a8d7',
        name: 'Relaxation progressive musculaire à deux',
        description:
          'Technique de détente systématique des groupes musculaires, pratiquée ensemble pour relâcher les tensions physiques et mentales dans un moment de calme absolu.',
      },
      {
        id: 'd9a2c7f5b6e3',
        name: 'Écoute de musique relaxante en se tenant la main',
        description:
          "Moment d'intimité silencieuse où vous vous laissez bercer par des mélodies apaisantes, main dans la main, créant une connexion émotionnelle profonde et harmonieuse.",
      },
    ],
  },
  creativite: {
    name: 'Activités Créatives Douces',
    activities: [
      {
        id: 'e5b8d2f9a4c7',
        name: 'Dessin libre côte à côte',
        description:
          "Expression artistique spontanée où chacun laisse libre cours à sa créativité, partageant l'inspiration et découvrant les talents cachés de votre partenaire en douceur.",
      },
      {
        id: 'f1c4e7b3a9d6',
        name: 'Coloriage pour adultes ensemble',
        description:
          'Activité méditative de coloriage qui favorise la concentration, réduit le stress et permet de créer ensemble dans un environnement calme et créatif.',
      },
      {
        id: 'a8d5f2c6b1e9',
        name: 'Origami en duo',
        description:
          'Art japonais du pliage de papier pratiqué ensemble, développant patience et précision tout en créant de belles œuvres symboliques de votre collaboration harmonieuse.',
      },
      {
        id: 'b2e9a5f8c4d7',
        name: 'Écriture de haïkus romantiques',
        description:
          "Composition poétique de courts poèmes japonais exprimant vos sentiments amoureux, stimulant la créativité littéraire et renforçant l'expression de vos émotions profondes.",
      },
      {
        id: 'c7f3b9e2a6d4',
        name: "Création d'un collage de vos rêves",
        description:
          "Assemblage artistique d'images représentant vos aspirations communes, visualisant votre avenir ensemble et matérialisant vos projets dans une œuvre créative inspirante.",
      },
      {
        id: 'd4a1f6c9b5e8',
        name: 'Tricot ou crochet ensemble',
        description:
          'Activité manuelle relaxante où vous apprenez ou pratiquez ensemble ces arts textiles, créant des objets utiles tout en partageant un moment de tranquillité créative.',
      },
      {
        id: 'e6b4d8f1c2a9',
        name: "Modelage d'argile simple",
        description:
          "Création tactile avec de l'argile permettant d'exprimer votre créativité par le toucher, réalisant des objets simples dans un moment de détente artistique partagée.",
      },
      {
        id: 'f9c2e6b7a3d5',
        name: 'Carnet de gratitude partagé',
        description:
          "Écriture commune des moments, personnes et expériences pour lesquels vous êtes reconnaissants, cultivant la positivité et renforçant l'appréciation mutuelle de votre bonheur.",
      },
      {
        id: 'a3d7f4c8b9e1',
        name: "Création d'une playlist commune",
        description:
          'Sélection musicale collaborative reflétant vos goûts et souvenirs partagés, créant une bande sonore personnalisée de votre relation et de vos moments précieux ensemble.',
      },
      {
        id: 'b8e5a2f7c6d4',
        name: 'Photographie créative à la maison',
        description:
          'Exploration artistique de la photographie dans votre environnement quotidien, capturant la beauté du moment présent et créant des souvenirs visuels de votre intimité.',
      },
    ],
  },
  connexion: {
    name: 'Activités de Connexion',
    activities: [
      {
        id: 'c1f5b8e3a7d9',
        name: 'Partage de 3 moments forts de la journée',
        description:
          "Échange quotidien des expériences marquantes vécues, permettant de rester connectés à la vie de l'autre et de partager les joies et défis quotidiens.",
      },
      {
        id: 'd6a9f2c4b8e7',
        name: 'Compliments sincères (5 minutes chacun)',
        description:
          "Moment dédié à exprimer reconnaissance et admiration mutuelle, renforçant l'estime de soi et la connexion émotionnelle par des mots bienveillants et authentiques.",
      },
      {
        id: 'e4b7d1f9c5a3',
        name: "Lecture d'un poème romantique",
        description:
          "Partage de la beauté poétique par la lecture d'œuvres romantiques, nourrissant l'âme et stimulant l'expression des sentiments à travers les mots d'autres amoureux.",
      },
      {
        id: 'f8c3e6b2a9d1',
        name: "Échange de lettres d'amour courtes",
        description:
          "Écriture et partage de messages d'amour personnels, immortalisant vos sentiments sur papier et créant des souvenirs tangibles de votre affection mutuelle profonde.",
      },
      {
        id: 'a2d8f5c7b4e6',
        name: 'Jeu des questions profondes',
        description:
          'Exploration mutuelle par des questions introspectives révélant vos pensées, valeurs et rêves secrets, approfondissant la connaissance et la compréhension de votre partenaire.',
      },
      {
        id: 'b5e1a8f3c9d7',
        name: "Partage de souvenirs d'enfance",
        description:
          'Voyage nostalgique dans vos histoires personnelles, révélant les expériences formatrices qui ont façonné votre personnalité et créant une intimité par la vulnérabilité partagée.',
      },
      {
        id: 'c9f6b3e7a1d4',
        name: 'Discussion sur vos rêves futurs',
        description:
          "Exploration commune de vos aspirations et projets d'avenir, alignant vos visions et construisant ensemble la route vers vos objectifs partagés et individuels.",
      },
      {
        id: 'd7a4f1c8b6e2',
        name: 'Écoute active sans jugement',
        description:
          "Pratique de l'écoute bienveillante où chacun peut s'exprimer librement, se sentant entendu et compris sans crainte de jugement, renforçant la confiance mutuelle.",
      },
      {
        id: 'e3b9d5f2c1a8',
        name: 'Exercice de reconnaissance mutuelle',
        description:
          "Moment structuré pour exprimer gratitude et appréciation pour les qualités, actions et présence de votre partenaire, nourrissant l'amour et la connexion émotionnelle.",
      },
      {
        id: 'f1c6e4b7a3d9',
        name: 'Moment de silence contemplatif ensemble',
        description:
          "Partage d'un silence paisible et conscient, permettant de se connecter au moment présent et de ressentir la présence réconfortante de l'autre sans besoin de paroles.",
      },
    ],
  },
}

export const deepIntimate: Activities = {
  preliminaires_creatifs: {
    name: 'Préliminaires Créatifs',
    activities: [
      {
        id: '5f4dcc3b5aa765d61d8327deb882cf99',
        name: 'Jeu du strip-tease mutuel',
        description:
          "Séance de déshabillage progressif et sensuel où chaque partenaire retire lentement ses vêtements tout en maintenant le contact visuel et l'excitation mutuelle.",
      },
      {
        id: 'ad5e2a4b8c9d7e3f6a1b2c3d4e5f6789',
        name: 'Massage érotique complet',
        description:
          'Massage intégral du corps avec huiles parfumées, combinant techniques de relaxation et stimulation sensuelle pour éveiller tous les sens progressivement.',
      },
      {
        id: '9876543210abcdef1234567890fedcba',
        name: 'Exploration avec bandeau',
        description:
          "Jeu sensoriel où l'un des partenaires a les yeux bandés pendant que l'autre explore son corps avec différentes textures et caresses.",
      },
      {
        id: '123456789abcdef0123456789abcdef0',
        name: 'Jeu de rôles léger',
        description:
          'Interprétation de personnages ou scénarios imaginaires pour explorer différentes dynamiques et fantasmes dans un cadre ludique et consensuel.',
      },
      {
        id: 'fedcba0987654321fedcba0987654321',
        name: 'Caresses avec la bouche',
        description:
          'Exploration sensuelle du corps du partenaire en utilisant les lèvres et la langue pour créer des sensations variées et intenses.',
      },
      {
        id: 'abcdef123456789abcdef123456789ab',
        name: 'Massage tantrique',
        description:
          "Technique de massage spirituel et sensuel visant à éveiller l'énergie sexuelle et créer une connexion profonde entre les partenaires.",
      },
      {
        id: '456789abcdef0123456789abcdef0123',
        name: 'Jeu de domination douce',
        description:
          'Exploration consensuelle de la dynamique dominant-dominé avec douceur, respect et communication constante pour maintenir le confort mutuel.',
      },
      {
        id: '789abcdef0123456789abcdef0123456',
        name: 'Exploration de zones érogènes',
        description:
          'Découverte méthodique et attentive des zones sensibles du corps pour comprendre les préférences et réactions de chaque partenaire.',
      },
      {
        id: 'def0123456789abcdef0123456789abc',
        name: 'Caresses avec objets sensuels',
        description:
          "Utilisation d'accessoires aux textures variées comme plumes, soie ou glace pour créer des sensations nouvelles et surprenantes.",
      },
      {
        id: '0123456789abcdef0123456789abcdef',
        name: 'Jeu de température érotique',
        description:
          "Alternance entre sensations chaudes et froides sur le corps en utilisant glaçons, bougies ou autres éléments pour intensifier l'excitation.",
      },
    ],
  },
  intimite_sexuelle_variee: {
    name: 'Intimité Sexuelle Variée',
    activities: [
      {
        id: 'a1b2c3d4e5f6789012345678901234ab',
        name: 'Positions du Kamasutra',
        description:
          "Exploration de différentes positions sexuelles inspirées du Kamasutra pour varier les sensations et approfondir l'intimité physique entre partenaires.",
      },
      {
        id: 'b2c3d4e5f6789012345678901234abc1',
        name: 'Jeux avec accessoires',
        description:
          "Utilisation consensuelle d'accessoires intimes pour enrichir l'expérience sexuelle et découvrir de nouvelles sensations ensemble de façon sécuritaire.",
      },
      {
        id: 'c3d4e5f6789012345678901234abc12d',
        name: 'Sexe oral mutuel',
        description:
          "Pratique du sexe oral réciproque pour offrir et recevoir du plaisir simultanément, créant une expérience d'intimité partagée et équilibrée.",
      },
      {
        id: 'd4e5f6789012345678901234abc12de3',
        name: 'Exploration tantrique',
        description:
          "Approche sexuelle basée sur les principes tantriques, privilégiant la connexion spirituelle, la respiration synchronisée et l'énergie sexuelle consciente.",
      },
      {
        id: 'e5f6789012345678901234abc12de34f',
        name: 'Jeu de miroirs',
        description:
          "Utilisation de miroirs pendant l'intimité pour observer et apprécier visuellement la beauté de l'acte sexuel et augmenter l'excitation mutuelle.",
      },
      {
        id: 'f6789012345678901234abc12de34f45',
        name: 'Sexe lent et contemplatif',
        description:
          'Rapport sexuel privilégiant la lenteur, la présence et la contemplation mutuelle pour approfondir la connexion émotionnelle et spirituelle.',
      },
      {
        id: '789012345678901234abc12de34f456g',
        name: 'Jeu de pouvoir consensuel',
        description:
          'Exploration des dynamiques de pouvoir dans la sexualité avec établissement préalable de limites claires et respect mutuel des consentements.',
      },
      {
        id: '89012345678901234abc12de34f456g7',
        name: 'Exploration de fantasmes',
        description:
          'Partage et réalisation consensuelle de fantasmes sexuels pour enrichir la vie intime et découvrir de nouvelles facettes du désir mutuel.',
      },
      {
        id: '9012345678901234abc12de34f456g78h',
        name: 'Sexe avec musique rythmée',
        description:
          'Rapport sexuel accompagné de musique choisie pour synchroniser les mouvements et créer une atmosphère sensuelle et rythmée particulière.',
      },
      {
        id: '012345678901234abc12de34f456g78hi',
        name: 'Jeu de retenue et libération',
        description:
          "Alternance entre moments de retenue et de libération du plaisir pour intensifier les sensations et prolonger l'expérience d'excitation mutuelle.",
      },
    ],
  },
  moments_culmination: {
    name: 'Moments de Culmination',
    activities: [
      {
        id: '12345678901234abc12de34f456g78hij',
        name: 'Orgasme simultané',
        description:
          "Recherche et atteinte de l'orgasme au même moment pour partager l'intensité maximale du plaisir et créer une connexion profonde.",
      },
      {
        id: '2345678901234abc12de34f456g78hijk',
        name: "Échange de regards pendant l'acte",
        description:
          "Maintien du contact visuel pendant l'intimité pour renforcer la connexion émotionnelle et partager intensément le moment de plaisir.",
      },
      {
        id: '345678901234abc12de34f456g78hijkl',
        name: "Sexe avec déclarations d'amour",
        description:
          "Expression verbale de l'amour pendant l'acte sexuel pour combiner plaisir physique et connexion émotionnelle dans un moment d'intimité totale.",
      },
      {
        id: '45678901234abc12de34f456g78hijklm',
        name: 'Moment de gratitude post-intimité',
        description:
          "Expression de reconnaissance mutuelle après l'intimité pour honorer le moment partagé et renforcer les liens affectifs entre partenaires.",
      },
      {
        id: '5678901234abc12de34f456g78hijklmn',
        name: "Câlins prolongés après l'amour",
        description:
          "Étreintes tendres et durables suivant l'acte sexuel pour maintenir la connexion physique et émotionnelle dans la douceur post-coïtale.",
      },
      {
        id: '678901234abc12de34f456g78hijklmno',
        name: 'Échange de mots doux',
        description:
          "Partage de paroles tendres et affectueuses après l'intimité pour exprimer les sentiments et renforcer la complicité émotionnelle du couple.",
      },
      {
        id: '78901234abc12de34f456g78hijklmnop',
        name: 'Massage post-coïtal',
        description:
          "Massage relaxant et tendre offert après l'acte sexuel pour prolonger les sensations agréables et maintenir le contact physique bienveillant.",
      },
      {
        id: '8901234abc12de34f456g78hijklmnopq',
        name: 'Moment de silence partagé',
        description:
          "Instant de quiétude contemplative après l'intimité où les partenaires savourent ensemble le calme et la plénitude post-orgasmique.",
      },
      {
        id: '901234abc12de34f456g78hijklmnopqr',
        name: 'Planification de la prochaine soirée',
        description:
          "Discussion tendre sur les prochains moments d'intimité à partager, créant une anticipation positive et renforçant la complicité du couple.",
      },
      {
        id: '01234abc12de34f456g78hijklmnopqrs',
        name: 'Endormissement enlacés',
        description:
          "Transition vers le sommeil dans les bras l'un de l'autre après l'intimité, prolongeant la connexion physique et émotionnelle.",
      },
    ],
  },
}

export const bonusMix: Activities = {
  gourmandes: {
    name: 'Activités Gourmandes',
    activities: [
      {
        id: 'a1b2c3d4e5f6',
        name: "Préparation d'un cocktail ensemble",
        description:
          'Créez des cocktails personnalisés en mélangeant vos saveurs préférées. Expérimentez avec des ingrédients frais et partagez des moments complices autour de la création de boissons uniques et savoureuses.',
      },
      {
        id: 'b2c3d4e5f6g7',
        name: 'Dégustation de chocolats fins',
        description:
          'Explorez différentes variétés de chocolats artisanaux et découvrez leurs subtilités. Savourez chaque bouchée en analysant les arômes et textures pour développer vos papilles gustatives ensemble.',
      },
      {
        id: 'c3d4e5f6g7h8',
        name: "Création d'un plateau de fromages",
        description:
          'Composez un plateau gastronameique avec des fromages variés, accompagnements et vins. Apprenez les accords parfaits et créez une expérience culinaire raffinée pour vos soirées romantiques.',
      },
      {
        id: 'd4e5f6g7h8i9',
        name: 'Préparation de smoothies exotiques',
        description:
          'Mélangez des fruits tropicaux et ingrédients nutritifs pour créer des smoothies colorés. Expérimentez avec des combinaisons originales et partagez des boissons saines et délicieuses ensemble.',
      },
      {
        id: 'e5f6g7h8i9j0',
        name: 'Dégustation de vins',
        description:
          "Découvrez l'art de la dégustation œnologique en explorant différents cépages et terroirs. Apprenez à identifier les arômes et développez votre palais pour apprécier pleinement chaque vin.",
      },
      {
        id: 'f6g7h8i9j0k1',
        name: 'Création de cocktails sans alcool',
        description:
          'Inventez des mocktails créatifs avec des jus, sirops et épices. Explorez des saveurs rafraîchissantes et originales pour créer des boissons festives sans alcool parfaites pour toute occasion.',
      },
      {
        id: 'g7h8i9j0k1l2',
        name: "Préparation d'un dessert simple",
        description:
          'Cuisinez ensemble un dessert facile et délicieux en partageant les tâches. Créez des souvenirs sucrés tout en apprenant de nouvelles techniques culinaires dans une ambiance détendue.',
      },
      {
        id: 'h8i9j0k1l2m3',
        name: 'Dégustation de thés rares',
        description:
          "Explorez des thés exceptionnels du monde entier et découvrez leurs propriétés uniques. Apprenez les techniques d'infusion et créez un moment de détente autour de ces boissons ancestrales.",
      },
      {
        id: 'i9j0k1l2m3n4',
        name: "Création d'un repas aphrodisiaque",
        description:
          "Préparez un dîner sensuel avec des ingrédients réputés aphrodisiaques. Créez une atmosphère romantique tout en cuisinant des plats qui stimulent les sens et renforcent l'intimité.",
      },
      {
        id: 'j0k1l2m3n4o5',
        name: 'Pique-nique intérieur',
        description:
          "Organisez un pique-nique romantique dans votre salon avec des mets délicats. Créez une atmosphère champêtre à l'intérieur et partagez un moment convivial sur une couverture douillette.",
      },
    ],
  },
  artistiques: {
    name: 'Activités Artistiques',
    activities: [
      {
        id: 'k1l2m3n4o5p6',
        name: 'Peinture corporelle non-sexuelle',
        description:
          "Explorez l'art corporel en peignant des motifs artistiques sur vos mains et bras. Créez des œuvres temporaires colorées et laissez libre cours à votre créativité dans un cadre respectueux.",
      },
      {
        id: 'l2m3n4o5p6q7',
        name: "Création d'un poème ensemble",
        description:
          'Écrivez un poème collaboratif en alternant les vers et les strophes. Explorez vos émotions à travers les mots et créez une œuvre littéraire unique qui reflète votre relation.',
      },
      {
        id: 'm3n4o5p6q7r8',
        name: 'Photoshoot romantique amateur',
        description:
          'Organisez une séance photo créative pour capturer vos moments complices. Expérimentez avec différents angles et éclairages pour créer des souvenirs visuels mémorables de votre relation.',
      },
      {
        id: 'n4o5p6q7r8s9',
        name: "Création d'une bande dessinée de votre histoire",
        description:
          "Racontez votre histoire d'amour sous forme de BD avec dessins et bulles. Créez des personnages à votre image et immortalisez vos moments forts dans un format artistique original.",
      },
      {
        id: 'o5p6q7r8s9t0',
        name: "Sculpture d'argile ensemble",
        description:
          "Modelez l'argile pour créer des sculptures expressives en collaboration. Laissez vos mains donner forme à vos idées et créez des œuvres d'art tangibles qui représentent votre créativité commune.",
      },
      {
        id: 'p6q7r8s9t0u1',
        name: "Création d'un livre photo",
        description:
          "Compilez vos plus belles photos dans un album personnalisé avec légendes. Organisez vos souvenirs chronologiquement et créez un livre précieux qui raconte votre histoire d'amour.",
      },
      {
        id: 'q7r8s9t0u1v2',
        name: "Écriture d'une chanson",
        description:
          'Composez une mélodie et écrivez des paroles qui vous ressemblent. Créez votre hymne personnel en combinant vos talents musicaux et littéraires pour une œuvre unique et personnelle.',
      },
      {
        id: 'r8s9t0u1v2w3',
        name: "Création d'une danse",
        description:
          'Choreographiez une danse sur votre musique préférée en synchronisant vos mouvements. Exprimez-vous à travers le langage corporel et créez une performance unique qui reflète votre complicité.',
      },
      {
        id: 's9t0u1v2w3x4',
        name: "Peinture à l'aquarelle",
        description:
          "Explorez la technique de l'aquarelle en créant des œuvres délicates et fluides. Jouez avec les couleurs et la transparence pour développer votre sensibilité artistique dans une activité relaxante.",
      },
      {
        id: 't0u1v2w3x4y5',
        name: "Création d'un mandala",
        description:
          "Dessinez des mandalas complexes pour développer votre concentration et créativité. Créez des motifs géométriques symétriques qui favorisent la méditation et l'expression artistique personnelle ensemble.",
      },
    ],
  },
  communication: {
    name: 'Activités de Communication',
    activities: [
      {
        id: 'u1v2w3x4y5z6',
        name: 'Jeu de questions intimes',
        description:
          'Posez-vous des questions profondes pour mieux vous connaître et renforcer votre intimité. Explorez vos pensées, désirs et rêves dans un cadre bienveillant et confidentiel.',
      },
      {
        id: 'v2w3x4y5z6a7',
        name: 'Partage de journaux personnels',
        description:
          'Échangez des extraits de vos journaux intimes pour partager vos pensées les plus profondes. Créez un climat de confiance mutuelle en révélant vos réflexions personnelles.',
      },
      {
        id: 'w3x4y5z6a7b8',
        name: "Création d'un code secret",
        description:
          'Inventez un langage codé unique pour communiquer de manière privée et complice. Développez des signes, mots et symboles qui renforcent votre intimité et votre complicité.',
      },
      {
        id: 'x4y5z6a7b8c9',
        name: 'Écriture de vœux de renouvellement',
        description:
          'Rédigez de nouveaux vœux personnalisés pour célébrer votre relation actuelle. Exprimez vos engagements et promesses futures dans des mots sincères et touchants qui reflètent votre évolution.',
      },
      {
        id: 'y5z6a7b8c9d0',
        name: 'Partage de listes de souhaits',
        description:
          'Créez et échangez des listes de désirs personnels et communs pour mieux vous comprendre. Explorez vos aspirations futures et planifiez ensemble la réalisation de vos rêves partagés.',
      },
      {
        id: 'z6a7b8c9d0e1',
        name: "Création d'un contrat d'amour",
        description:
          'Rédigez un accord personnalisé définissant vos engagements mutuels et attentes relationnelles. Établissez des règles bienveillantes qui renforcent votre complicité et votre respect mutuel.',
      },
      {
        id: 'a7b8c9d0e1f2',
        name: 'Échange de promesses quotidiennes',
        description:
          'Partagez chaque jour une promesse ou engagement personnel pour maintenir la connexion. Créez un rituel quotidien qui renforce votre lien et démontre votre attention constante.',
      },
      {
        id: 'b8c9d0e1f2g3',
        name: 'Partage de rêves érotiques',
        description:
          'Discutez ouvertement de vos fantasmes et désirs intimes dans un cadre respectueux. Explorez votre intimité en partageant vos rêves érotiques pour approfondir votre complicité sensuelle.',
      },
      {
        id: 'c9d0e1f2g3h4',
        name: 'Discussion sur vos limites',
        description:
          'Communiquez clairement sur vos limites personnelles et zones de confort respectif. Établissez un dialogue ouvert sur vos besoins et frontières pour maintenir une relation saine.',
      },
      {
        id: 'd0e1f2g3h4i5',
        name: "Création d'un calendrier intime",
        description:
          'Planifiez ensemble des moments intimes spéciaux et des activités romantiques régulières. Organisez votre vie de couple en anticipant des occasions privilégiées pour renforcer votre intimité.',
      },
    ],
  },
  sensorielles: {
    name: 'Sensorielles',
    activities: [
      {
        id: 'f8d6a4b2c3e1f7g9h5i2j8k4l6m3n9o1p7q5r8s2t4u6v3w9x1y5z7',
        name: 'Jeu des 5 sens',
        description:
          "Exploration mutuelle des cinq sens à travers diverses expériences tactiles, gustatives, olfactives, visuelles et auditives pour renforcer l'intimité et la connexion sensorielle entre partenaires.",
      },
      {
        id: 'a2b8c4d6e1f9g3h7i5j2k8l4m6n1o9p3q7r5s2t8u4v6w1x9y3z7',
        name: 'Exploration tactile aveugle',
        description:
          'Découverte des textures, formes et sensations par le toucher uniquement, les yeux bandés, pour développer la sensibilité tactile et créer une expérience sensorielle intense et nouvelle.',
      },
      {
        id: 'c3d9e5f1g7h2i8j4k6l3m9n5o1p7q2r8s4t6u3v9w5x1y7z2',
        name: "Jeu d'odeurs et parfums",
        description:
          "Identification et appréciation de différentes fragrances et arômes pour stimuler l'odorat et créer des associations positives, favorisant la détente et l'éveil des sens ensemble.",
      },
      {
        id: 'e4f1g8h6i2j9k5l7m3n1o8p4q6r2s9t5u7v3w1x8y4z6',
        name: 'Dégustation les yeux fermés',
        description:
          "Expérience gustative à l'aveugle permettant de redécouvrir les saveurs, textures et températures des aliments tout en développant la confiance mutuelle et l'attention aux détails sensoriels.",
      },
      {
        id: 'g5h2i9j7k3l1m8n4o6p2q9r5s7t3u1v8w4x6y2z9',
        name: 'Écoute de sons de la nature',
        description:
          "Immersion auditive dans les bruits naturels pour favoriser la relaxation, la méditation et la connexion avec l'environnement, créant un moment de paix et d'harmonie partagée.",
      },
      {
        id: 'i6j3k1l9m5n7o3p1q8r4s6t2u9v5w7x3y1z8',
        name: 'Jeu de textures diverses',
        description:
          'Exploration de matériaux aux textures variées pour stimuler le sens du toucher, développer la curiosité tactile et créer des expériences sensorielles nouvelles et enrichissantes ensemble.',
      },
      {
        id: 'k7l4m2n1o9p6q3r1s8t5u7v2w9x4y6z3',
        name: 'Exploration de températures',
        description:
          'Expérimentation avec différentes températures pour éveiller les sensations thermiques, créer des contrastes intéressants et développer une nouvelle conscience corporelle et sensorielle mutuelle.',
      },
      {
        id: 'm8n5o3p2q1r9s6t4u2v1w8x5y7z4',
        name: "Jeu d'équilibre à deux",
        description:
          "Exercices d'équilibre en duo pour développer la coordination, la confiance mutuelle et la proprioception tout en créant une expérience ludique et connectée physiquement.",
      },
      {
        id: 'o9p6q4r3s2t1u9v7w5x3y2z1',
        name: 'Massage avec objets inattendus',
        description:
          "Utilisation d'objets variés et surprenants pour créer des sensations tactiles nouvelles lors de massages, stimulant la créativité et l'exploration sensorielle dans l'intimité du couple.",
      },
      {
        id: 'q1r8s6t4u3v2w1x9y7z5',
        name: 'Exploration de saveurs',
        description:
          'Découverte méthodique de goûts nouveaux et variés pour élargir les horizons gustatifs, partager des expériences culinaires et développer une appréciation commune des plaisirs de la table.',
      },
    ],
  },
  ludiques_intimes: {
    name: 'ludiques intimes',
    activities: [
      {
        id: 's2t1u9v8w6x4y3z2a1b9c7d5e4f3g2h1',
        name: 'Jeu de la bouteille modifié',
        description:
          'Version personnalisée du jeu classique adaptée aux couples, incorporant des défis romantiques et intimes pour créer des moments de complicité et de découverte mutuelle amusante.',
      },
      {
        id: 'u3v2w1x9y8z7a6b5c4d3e2f1g9h8i7j6k5l4m3n2o1',
        name: 'Cartes de défis amoureux',
        description:
          "Jeu de cartes personnalisées contenant des défis romantiques et tendres pour pimenter la relation, encourager l'expression des sentiments et créer des moments de surprise et d'amusement.",
      },
      {
        id: 'w4x3y2z1a9b8c7d6e5f4g3h2i1j9k8l7m6n5o4p3q2r1',
        name: 'Jeu de dés érotiques',
        description:
          "Utilisation de dés spéciaux pour déterminer des actions romantiques et sensuelles, ajoutant un élément de hasard et de surprise dans l'intimité tout en maintenant le jeu et l'amusement.",
      },
      {
        id: 'y5z4a3b2c1d9e8f7g6h5i4j3k2l1m9n8o7p6q5r4s3t2u1',
        name: "Création d'un jeu personnel",
        description:
          "Conception d'un jeu unique basé sur les préférences et l'histoire du couple, favorisant la créativité collaborative et la personnalisation de l'expérience ludique et romantique partagée.",
      },
      {
        id: 'a6b5c4d3e2f1g9h8i7j6k5l4m3n2o1p9q8r7s6t5u4v3w2x1',
        name: 'Chasse au trésor intime',
        description:
          "Organisation d'une chasse au trésor avec des indices personnalisés et des récompenses romantiques, créant une aventure ludique et interactive qui renforce la complicité et l'anticipation mutuelle.",
      },
      {
        id: 'c7d6e5f4g3h2i1j9k8l7m6n5o4p3q2r1s9t8u7v6w5x4y3z2',
        name: 'Jeu de mémoire sensuel',
        description:
          'Test de mémorisation basé sur des souvenirs intimes et romantiques du couple, renforçant les liens émotionnels tout en créant un moment de nostalgie et de redécouverte mutuelle.',
      },
      {
        id: 'e8f7g6h5i4j3k2l1m9n8o7p6q5r4s3t2u1v9w8x7y6z5',
        name: 'Défis de couple',
        description:
          'Série de défis amusants et romantiques conçus pour tester la complicité, encourager la communication et créer des moments de rire et de connexion profonde entre les partenaires.',
      },
      {
        id: 'g9h8i7j6k5l4m3n2o1p9q8r7s6t5u4v3w2x1y9z8',
        name: 'Jeu de vérité ou défi',
        description:
          "Version adulte du jeu classique adaptée aux couples, alternant entre révélations personnelles et défis romantiques pour approfondir la connaissance mutuelle et créer de l'intimité.",
      },
      {
        id: 'i1j9k8l7m6n5o4p3q2r1s9t8u7v6w5x4y3z2a1b9c8d7e6f5',
        name: "Création d'un quiz personnel",
        description:
          "Élaboration d'un questionnaire sur mesure basé sur la relation du couple, testant la connaissance mutuelle tout en créant des occasions de dialogue et de découverte surprenante.",
      },
      {
        id: 'k2l1m9n8o7p6q5r4s3t2u1v9w8x7y6z5a4b3c2d1e9f8g7h6i5',
        name: 'Jeu de mimes sensuels',
        description:
          'Expression corporelle non-verbale avec des thèmes romantiques et sensuels, développant la communication gestuelle et créant des moments de complicité amusante et de connexion physique subtile.',
      },
    ],
  },
  wellbeing: {
    name: 'Bien être',
    activities: [
      {
        id: 'm3n2o1p9q8r7s6t5u4v3w2x1y9z8a7b6c5d4e3f2g1h9i8j7k6l5',
        name: 'Séance de reiki mutuel',
        description:
          'Pratique énergétique partagée visant à équilibrer les chakras et favoriser le bien-être physique et spirituel, créant une connexion profonde et une harmonie énergétique entre les partenaires.',
      },
      {
        id: 'o4p3q2r1s9t8u7v6w5x4y3z2a1b9c8d7e6f5g4h3i2j1k9l8m7n6o5',
        name: 'Massage ayurvédique',
        description:
          "Technique de massage traditionnelle indienne utilisant des huiles spécifiques et des mouvements thérapeutiques pour détendre le corps, apaiser l'esprit et renforcer l'intimité du couple.",
      },
      {
        id: 'q5r4s3t2u1v9w8x7y6z5a4b3c2d1e9f8g7h6i5j4k3l2m1n9o8p7q6r5',
        name: 'Pratique de la pleine conscience',
        description:
          'Méditation de mindfulness pratiquée ensemble pour développer la présence au moment présent, réduire le stress et approfondir la connexion émotionnelle et spirituelle mutuelle.',
      },
      {
        id: 's6t5u4v3w2x1y9z8a7b6c5d4e3f2g1h9i8j7k6l5m4n3o2p1q9r8s7t6u5',
        name: 'Exercices de Kegel ensemble',
        description:
          'Renforcement musculaire du plancher pelvien pratiqué en duo pour améliorer la santé intime, développer la conscience corporelle et créer une expérience de bien-être partagée.',
      },
      {
        id: 'u7v6w5x4y3z2a1b9c8d7e6f5g4h3i2j1k9l8m7n6o5p4q3r2s1t9u8v7w6x5',
        name: 'Séance de kinésiologie',
        description:
          'Pratique thérapeutique utilisant des tests musculaires pour identifier les déséquilibres énergétiques et émotionnels, favorisant la guérison holistique et la compréhension mutuelle des besoins corporels.',
      },
      {
        id: 'w8x7y6z5a4b3c2d1e9f8g7h6i5j4k3l2m1n9o8p7q6r5s4t3u2v1w9x8y7z6',
        name: 'Pratique de la respiration holotropique',
        description:
          'Technique de respiration profonde et consciente pour accéder à des états de conscience modifiés, favoriser la libération émotionnelle et créer une expérience spirituelle intense et partagée.',
      },
      {
        id: 'y9z8a7b6c5d4e3f2g1h9i8j7k6l5m4n3o2p1q9r8s7t6u5v4w3x2y1z9',
        name: 'Méditation sur les chakras',
        description:
          'Pratique méditative ciblant les centres énergétiques du corps pour équilibrer les chakras, harmoniser les énergies et créer une connexion spirituelle profonde et régénératrice entre partenaires.',
      },
      {
        id: 'a1b9c8d7e6f5g4h3i2j1k9l8m7n6o5p4q3r2s1t9u8v7w6x5y4z3',
        name: 'Pratique du yoga tantrique',
        description:
          "Forme sacrée de yoga intégrant respiration, mouvement et conscience pour éveiller l'énergie kundalini, approfondir l'intimité spirituelle et créer une union corps-esprit harmonieuse.",
      },
      {
        id: 'c2d1e9f8g7h6i5j4k3l2m1n9o8p7q6r5s4t3u2v1w9x8y7z6a5b4c3',
        name: 'Séance de réflexologie',
        description:
          "Massage thérapeutique des zones réflexes des pieds pour stimuler la circulation, favoriser la relaxation et créer un moment d'intimité et de soin mutuel particulièrement apaisant.",
      },
      {
        id: 'e3f2g1h9i8j7k6l5m4n3o2p1q9r8s7t6u5v4w3x2y1z9a8b7c6d5e4f3',
        name: 'Exercices de lâcher-prise',
        description:
          "Techniques de relaxation et de méditation pour apprendre à relâcher les tensions physiques et mentales, favorisant la détente profonde et la création d'un espace de paix partagé.",
      },
    ],
  },
  activities_technologiques: {
    name: 'Technologiques',
    activities: [
      {
        id: 'g4h3i2j1k9l8m7n6o5p4q3r2s1t9u8v7w6x5y4z3a2b1c9d8e7f6g5h4i3',
        name: "Création d'un blog couple",
        description:
          "Projet collaboratif de rédaction d'un blog documentant les expériences, aventures et réflexions du couple, créant un journal numérique partagé et un héritage de souvenirs précieux.",
      },
      {
        id: 'i5j4k3l2m1n9o8p7q6r5s4t3u2v1w9x8y7z6a5b4c3d2e1f9g8h7i6j5k4l3',
        name: 'Séance photo avec smartphone',
        description:
          'Session photographique créative utilisant les téléphones portables pour capturer des moments intimes et artistiques, développant la créativité visuelle et créant des souvenirs durables et personnels.',
      },
      {
        id: 'k6l5m4n3o2p1q9r8s7t6u5v4w3x2y1z9a8b7c6d5e4f3g2h1i9j8k7l6m5n4o3',
        name: "Enregistrement d'un podcast privé",
        description:
          "Création d'un podcast personnel pour partager des conversations intimes, des réflexions et des histoires du couple, développant l'expression orale et créant un contenu audio unique.",
      },
      {
        id: 'm7n6o5p4q3r2s1t9u8v7w6x5y4z3a2b1c9d8e7f6g5h4i3j2k1l9m8n7o6p5q4',
        name: "Création d'une vidéo souvenir",
        description:
          "Montage vidéo collaboratif compilant les moments marquants de la relation, créant un film personnel et émotionnel qui célèbre l'histoire d'amour et les expériences partagées du couple.",
      },
      {
        id: 'o8p7q6r5s4t3u2v1w9x8y7z6a5b4c3d2e1f9g8h7i6j5k4l3m2n1o9p8q7r6s5',
        name: 'Jeu vidéo coopératif',
        description:
          "Exploration de jeux vidéo nécessitant la collaboration et la stratégie commune, renforçant l'esprit d'équipe tout en partageant des moments de détente et d'amusement dans l'univers numérique.",
      },
      {
        id: 'q9r8s7t6u5v4w3x2y1z9a8b7c6d5e4f3g2h1i9j8k7l6m5n4o3p2q1r9s8t7u6',
        name: "Exploration d'applications de couple",
        description:
          "Découverte et test d'applications mobiles dédiées aux relations amoureuses, explorant les outils technologiques pour améliorer la communication et renforcer les liens du couple.",
      },
      {
        id: 's1t9u8v7w6x5y4z3a2b1c9d8e7f6g5h4i3j2k1l9m8n7o6p5q4r3s2t1u9v8w7',
        name: "Création d'un calendrier photo",
        description:
          "Conception d'un calendrier personnalisé utilisant les photos du couple, créant un projet artistique et pratique qui célèbre les souvenirs tout en décorant l'espace de vie commun.",
      },
      {
        id: 'u2v1w9x8y7z6a5b4c3d2e1f9g8h7i6j5k4l3m2n1o9p8q7r6s5t4u3v2w1x9y8',
        name: 'Visioconférence avec des amis',
        description:
          "Organisation d'appels vidéo avec des proches pour maintenir les liens sociaux, partager des moments conviviaux et créer des souvenirs collectifs malgré la distance physique.",
      },
      {
        id: 'w3x2y1z9a8b7c6d5e4f3g2h1i9j8k7l6m5n4o3p2q1r9s8t7u6v5w4x3y2z1',
        name: 'Cours en ligne ensemble',
        description:
          'Participation conjointe à des formations numériques pour apprendre de nouvelles compétences, partager des connaissances et créer un projet éducatif commun enrichissant et motivant.',
      },
      {
        id: 'y4z3a2b1c9d8e7f6g5h4i3j2k1l9m8n7o6p5q4r3s2t1u9v8w7x6y5z4a3b2c1',
        name: "Création d'une playlist Spotify",
        description:
          "Compilation collaborative d'une sélection musicale reflétant les goûts du couple, créant une bande sonore personnelle de la relation et un support musical pour différentes occasions.",
      },
    ],
  },
  saisonnal: {
    name: 'Saisonnières',
    activities: [
      {
        id: 'a5b4c3d2e1f9g8h7i6j5k4l3m2n1o9p8q7r6s5t4u3v2w1x9y8z7a6b5c4d3e2',
        name: 'Observation des étoiles (fenêtre/balcon)',
        description:
          "Contemplation nocturne du ciel étoilé depuis le domicile, créant un moment romantique et contemplatif pour admirer la beauté de l'univers et partager des réflexions sur l'infini.",
      },
      {
        id: 'c6d5e4f3g2h1i9j8k7l6m5n4o3p2q1r9s8t7u6v5w4x3y2z1a9b8c7d6e5f4g3',
        name: "Création d'un jardin d'herbes aromatiques",
        description:
          'Projet de jardinage intérieur ou extérieur pour cultiver des plantes aromatiques, créant un espace vert commun tout en produisant des ingrédients frais pour la cuisine du couple.',
      },
      {
        id: 'e7f6g5h4i3j2k1l9m8n7o6p5q4r3s2t1u9v8w7x6y5z4a3b2c1d9e8f7g6h5i4',
        name: 'Décoration selon la saison',
        description:
          'Adaptation périodique de la décoration intérieure aux saisons, créant une ambiance renouvelée et harmonieuse avec les cycles naturels tout en exprimant la créativité commune du couple.',
      },
      {
        id: 'g8h7i6j5k4l3m2n1o9p8q7r6s5t4u3v2w1x9y8z7a6b5c4d3e2f1g9h8i7j6k5',
        name: 'Planification de vacances',
        description:
          "Élaboration détaillée d'un projet de voyage futur, explorant les destinations, organisant l'itinéraire et créant l'anticipation d'une aventure commune excitante et enrichissante.",
      },
      {
        id: 'i9j8k7l6m5n4o3p2q1r9s8t7u6v5w4x3y2z1a9b8c7d6e5f4g3h2i1j9k8l7m6',
        name: "Création d'un album photo saisonnier",
        description:
          "Compilation photographique organisée par saisons pour documenter l'évolution de la relation à travers les cycles naturels, créant un héritage visuel des moments partagés.",
      },
      {
        id: 'k1l9m8n7o6p5q4r3s2t1u9v8w7x6y5z4a3b2c1d9e8f7g6h5i4j3k2l1m9n8o7',
        name: "Préparation d'une surprise pour l'autre",
        description:
          "Organisation secrète d'une attention particulière pour surprendre le partenaire, développant la créativité et l'attention aux détails tout en renforçant l'expression de l'amour et de l'affection.",
      },
      {
        id: 'm2n1o9p8q7r6s5t4u3v2w1x9y8z7a6b5c4d3e2f1g9h8i7j6k5l4m3n2o1p9q8',
        name: "Révision et planification d'objectifs",
        description:
          "Évaluation périodique des accomplissements et définition de nouveaux objectifs communs, favorisant la croissance personnelle et relationnelle tout en maintenant une vision partagée de l'avenir.",
      },
      {
        id: 'o3p2q1r9s8t7u6v5w4x3y2z1a9b8c7d6e5f4g3h2i1j9k8l7m6n5o4p3q2r1s9',
        name: "Création d'un rituel saisonnier",
        description:
          "Établissement d'une tradition personnelle marquant les changements de saison, créant des moments de célébration et de connexion réguliers qui rythment la vie du couple.",
      },
      {
        id: 'q4r3s2t1u9v8w7x6y5z4a3b2c1d9e8f7g6h5i4j3k2l1m9n8o7p6q5r4s3t2u1',
        name: "Célébration d'une date anniversaire",
        description:
          "Commémoration créative d'une date importante pour le couple, organisant une célébration personnalisée qui honore les souvenirs partagés et renforce l'importance des jalons relationnels.",
      },
      {
        id: 's5t4u3v2w1x9y8z7a6b5c4d3e2f1g9h8i7j6k5l4m3n2o1p9q8r7s6t5u4v3w2',
        name: 'Planification de la prochaine aventure',
        description:
          "Conception d'un projet d'activité ou d'expérience future excitante, stimulant l'imagination et créant une perspective commune motivante qui nourrit les rêves et ambitions du couple.",
      },
    ],
  },
}

const intimacyLevels = [
  'Peu intime',
  'Modérément intime',
  'Très intime',
  'Sexuel',
]

export const allActivities = {
  metadata: {
    total: 200,
    structure: '4 sections de 30 minutes',
    target: 'Soirée couples après le coucher des enfants',
    intimacyLevels,
  },
  categories: {
    reconnexion_detente: {
      name: 'Reconnexion et Détente',
      duration: '30 minutes',
      description: 'Activités pour déconnecter du quotidien et se reconnecter',
      intimacyLevel: 'Peu à modérément intime',
      subCategories: {
        ...reconnexion,
      },
    },
    divertissement_decouverte: {
      name: 'Divertissement et Découverte',
      duration: '30 minutes',
      description:
        'Activités ludiques et culturelles pour partager et découvrir',
      intimacyLevel: 'Peu intime',
      subCategories: {
        ...entertainment,
      },
    },
    intimite_emotionnelle_physique: {
      name: 'Intimité Émotionnelle et Physique',
      duration: '30 minutes',
      description:
        "Activités pour approfondir l'intimité émotionnelle et physique",
      intimacyLevel: 'Modérément à très intime',
      subCategories: {
        ...intimate,
      },
    },
    intimite_avancee_culmination: {
      name: 'Intimité Avancée et Culmination',
      duration: '30 minutes',
      description: "Activités d'intimité avancée et sexuelle",
      intimacyLevel: 'Très intime et sexuel',
      subCategories: {
        ...deepIntimate,
      },
    },
  },
  bonus: {
    name: 'Activités Bonus - Mix des Sections',
    duration: 'Variable',
    description: 'Activités polyvalentes utilisables dans différentes sections',
    intimacyLevel: 'Variable',
    subCategories: {
      ...bonusMix,
    },
  },
  advices: {
    structure_suggeree: {
      totalDuration: '2 heures',
      progress: [
        'Section 1 : Déconnexion du quotidien, reconnexion mutuelle',
        'Section 2 : Divertissement, découverte, complicité',
        'Section 3 : Intimité émotionnelle et physique croissante',
        'Section 4 : Intimité avancée et culmination',
      ],
    },
    praticalAdvices: [
      "Préparez l'environnement : éclairage tamisé, musique douce, téléphones éteints",
      "Alternez les types d'activités selon vos humeurs et énergie",
      'Communiquez vos envies et limites avant chaque soirée',
      "Gardez de l'eau, des serviettes et tout le nécessaire à portée de main",
      "N'hésitez pas à adapter la durée selon vos besoins",
      'Créez des transitions douces entre les sections',
    ],
    personnalisation: [
      'Adaptez selon vos goûts personnels et votre relation',
      'Certaines activités peuvent être répétées avec des variations',
      "Mélangez les niveaux d'intimité selon vos envies du moment",
      'Gardez un journal de vos activités préférées pour les refaire',
    ],
  },
}

export const randomActivityFromCategory = (categoryNumber: number) => {
  const flatActivities: Activity[] = Object.values(
    Object.values(allActivities.categories)[categoryNumber].subCategories
  )
    .flatMap((sub) => sub.activities)
    .filter((activity) => {
      const disabledActivities = getDisabledActivities()
      return !disabledActivities.includes(activity.id)
    })

  const i = Math.floor(Math.random() * flatActivities.length)

  return flatActivities[i]
}

export const flatActivities = () => {
  return Object.values(allActivities.categories).flatMap((category) =>
    Object.values(category.subCategories).flatMap((sub) => sub.activities)
  )
}

export const storeDisabledActivities = (activityIds: string[]) => {
  const newDisabledActivities = [...activityIds]
  localStorage.setItem(
    'cupionDisabledActivities',
    JSON.stringify(newDisabledActivities)
  )
}

export const getDisabledActivities = () => {
  const storedActivities = localStorage.getItem('cupionDisabledActivities')
  return storedActivities ? JSON.parse(storedActivities) : []
}
