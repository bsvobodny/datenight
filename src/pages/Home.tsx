import { useMemo, useState } from 'react'
import { FcIdea } from 'react-icons/fc'
import { FcLike } from 'react-icons/fc'
import { FcUndo } from 'react-icons/fc'
import { FcSettings } from 'react-icons/fc'
import { FcFlashOn } from 'react-icons/fc'
import { FcVip } from 'react-icons/fc'

import './Home.css'
import CardList from '../components/CardList'
import { getAllCategoryNames, randomActivityFromCategory } from '../activities'
import { type Activity } from '../types'

function Home() {
  const [activities, setActivities] = useState<Activity[]>([])
  const categories = useMemo(() => getAllCategoryNames(), [])

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
        return <FcIdea />
      case 1:
        return <FcFlashOn />
      case 2:
        return <FcLike />
      case 3:
        return <FcVip />
      default:
        return <FcUndo />
    }
  }

  return (
    <main>
      <header>
        <div className="navigation">
          <a className="navigation-link" href="/settings">
            <FcSettings />
          </a>
        </div>
        <h1 className="home">Cupion</h1>
        <p className="subtitle">
          Votre assistant personnel pour des soirées romantiques inoubliables
        </p>
      </header>
      <div className="center-container">
        <CardList
          categories={categories}
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
