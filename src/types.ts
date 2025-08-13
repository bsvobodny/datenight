export type Activity = {
  id: string
  name: string
  description: string
}

export type Category = {
  name: string
  duration: string
  description: string
  intimacyLevel: string
  subCategories: SubCategory[]
}

type SubCategory = {
  name: string
  activities: Activity[]
}

export type Activities = Record<string, SubCategory>
