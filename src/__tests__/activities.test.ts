import { describe, it, expect } from 'vitest'
import {
  randomActivityFromCategory,
  storeDisabledActivities,
  getAllCategories,
  flatActivities,
  getAllCategoryNames,
} from '../activities'
import { type Activity, type SubCategory } from '../types'

// src/activities.test.ts

describe('flatActivities', () => {
  it('should return an array', () => {
    const activities = flatActivities()
    expect(Array.isArray(activities)).toBe(true)
  })

  it('should not return an empty array', () => {
    const activities = flatActivities()
    expect(activities.length).toBeGreaterThan(0)
  })

  it('should return activities with id, name, and description', () => {
    const activities = flatActivities()
    for (const activity of activities) {
      expect(activity).toHaveProperty('id')
      expect(typeof activity.id).toBe('string')
      expect(activity).toHaveProperty('name')
      expect(typeof activity.name).toBe('string')
      expect(activity).toHaveProperty('description')
      expect(typeof activity.description).toBe('string')
    }
  })

  it('should not have duplicate ids', () => {
    const activities = flatActivities()
    const ids = activities.map((a) => a.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it('should return a random activity from the given category', () => {
    const activity = randomActivityFromCategory(0)
    // Use category 0 (reconnexion_detente) for test
    expect(activity).toBeDefined()
    expect(activity).toHaveProperty('id')
    expect(activity).toHaveProperty('name')
    expect(activity).toHaveProperty('description')
  })

  it('should not return a disabled activity', () => {
    const all = flatActivities()
    const disabledId = all[0].id
    storeDisabledActivities([disabledId])
    // Find category index containing the disabled activity
    let categoryIndex = -1
    const categories = getAllCategories()
    categories.forEach((cat, idx) => {
      const ids = Object.values(cat.subCategories).flatMap((sub: SubCategory) =>
        sub.activities.map((a: Activity) => a.id)
      )
      if (ids.includes(disabledId)) categoryIndex = idx
    })
    if (categoryIndex !== -1) {
      for (let i = 0; i < 10; i++) {
        const activity = randomActivityFromCategory(categoryIndex)
        expect(activity.id).not.toBe(disabledId)
      }
    }
  })

  it('getAllCategories should return all categories as array', () => {
    const categories = getAllCategories()
    expect(Array.isArray(categories)).toBe(true)
    expect(categories.length).toBeGreaterThan(0)
    for (const category of categories) {
      expect(category).toHaveProperty('name')
      expect(category).toHaveProperty('duration')
      expect(category).toHaveProperty('description')
      expect(category).toHaveProperty('intimacyLevel')
      expect(category).toHaveProperty('subCategories')
    }
  })

  it('getAllCategories should match category names from getAllCategoryNames', () => {
    // Import getAllCategoryNames for this test

    const categories = getAllCategories()
    const names = getAllCategoryNames()
    expect(categories.map((c) => c.name)).toEqual(names)
  })
})
