import { useState } from 'react'
import './Home.css'
import CardList from './CardList'
import {
  allActivities,
  randomActivityFromCategory,
  type Activity,
} from './activities'

function Home() {
  const [activities, setActivities] = useState<Activity[]>([])

  const selectActivity = () => {
    const newActivities = [...activities]

    newActivities[activities.length] = randomActivityFromCategory(
      activities.length
    )

    setActivities(newActivities)
  }

  const replaceActivity = (index: number) => {
    const newActivities = [...activities]
    newActivities[index] = randomActivityFromCategory(index)
    setActivities(newActivities)
  }

  const reset = () => {
    setActivities([])
  }

  const startNightActivities = () => {
    if (activities.length < 4) {
      selectActivity()
    } else {
      reset()
    }
  }

  const getActionContent = () => {
    switch (activities.length) {
      case 0:
        return '✨'
      case 1:
        return '🧨'
      case 2:
        return '❤️‍🔥'
      case 3:
        return '🔥'
      default:
        return '↪️'
    }
  }

  return (
    <main>
      <header>
        <div className="navigation">
          <a className="navigation-link" href="/settings">
            ⚙️
          </a>
        </div>
        <h1 className="home">Cupion</h1>
        <p className="subtitle">
          Votre assistant personnel pour des soirées romantiques inoubliables
        </p>
      </header>
      <div className="center-container">
        <CardList
          categories={Object.values(allActivities.categories)}
          selectedActivities={activities}
          retry={replaceActivity}
        />
        <div className="control">
          <button onClick={startNightActivities}>{getActionContent()}</button>
        </div>
      </div>
      <footer>
        <p>Créez des souvenirs inoubliables ensemble</p>
        <small>©️ Benjamin Svobodny</small>
      </footer>
    </main>
  )
}

export default Home
