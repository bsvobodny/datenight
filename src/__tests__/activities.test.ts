import { describe, it, expect } from 'vitest'
import { flatActivities } from '../activities'

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
})
