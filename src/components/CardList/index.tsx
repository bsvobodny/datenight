import './style.css'
import type { Activity } from '../../types'
import Card from '../Card'

type Props = {
  categories: string[]
  selectedActivities?: Activity[]
  retry?: (index: number) => void
}

const CardList = ({
  categories,
  selectedActivities = [],
  retry = () => {},
}: Props) => {
  return (
    <div className="card-list">
      {categories.map((category, index) => (
        <Card
          key={category}
          className={`section${index + 1}`}
          label={category}
          activity={selectedActivities[index]}
          retry={() => {
            retry(index)
          }}
        />
      ))}
    </div>
  )
}

export default CardList
