import type { Activity } from '../../types'
import Card from '../Card'

import './style.css'

type Props = {
  categories: string[]
  selectedActivities?: Activity[]
  // eslint-disable-next-line no-unused-vars
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
