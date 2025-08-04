import './style.css'
import type { Activity, Category } from '../activities'
import Card from '../Card'

type Props = {
  categories: Category[]
  selectedActivities?: Activity[]
}

const CardList = ({ categories, selectedActivities = [] }: Props) => {
  return (
    <div className="card-list">
      {categories.map((category, index) => (
        <Card
          key={category.name}
          className={`section${index + 1}`}
          label={category.name}
          activity={selectedActivities[index]}
        />
      ))}
    </div>
  )
}

export default CardList
