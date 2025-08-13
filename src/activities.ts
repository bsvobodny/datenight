import entertainment from './assets/activities/entertainment.json'
import intimate from './assets/activities/intimate.json'
import reconnexion from './assets/activities/reconnexion.json'
import deepIntimate from './assets/activities/deepIntimate.json'
import bonusMix from './assets/activities/bonusMix.json'

import type { Activity } from './types'

export const allActivities = {
  metadata: {
    total: 200,
    structure: '4 sections de 30 minutes',
    target: 'Soirée couples après le coucher des enfants',
    intimacyLevels: [
      'Peu intime',
      'Modérément intime',
      'Très intime',
      'Sexuel',
    ],
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

export const getAllCategoryNames = () => {
  return Object.values(allActivities.categories).map(
    (category) => category.name
  )
}

export const getAllCategories = () => {
  return Object.values(allActivities.categories)
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
