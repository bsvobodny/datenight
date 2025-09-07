import { useState } from 'react'
import {
  flatActivitiesFromCategoryName,
  getAllCategoryNames,
  shuffleActivities,
} from '../activities'
import type { Activity } from '../types'
import { SwipeCards } from '../components/SwipeCards'
import { Header } from '../components/Layout/Header'

export const SwipeActivities = () => {
  const categories = getAllCategoryNames()
  const [selectedCategory, setSelectedCategory] = useState('')
  const [activities, setActivities] = useState<Activity[]>([])

  const selectCategory = (category: string) => {
    setSelectedCategory(category)
    setActivities(shuffleActivities(flatActivitiesFromCategoryName(category)))
  }

  return (
    <div>
      <Header
        title="Swipe Activities"
        subtitle="Explore and swipe through activities"
        showTitleDecoration={false}
      />

      <p>Available Categories:</p>
      {/* Select one category to swipe */}
      <select
        value={selectedCategory}
        onChange={(e) => selectCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      {selectedCategory && <SwipeCards activities={activities} />}
    </div>
  )
}
