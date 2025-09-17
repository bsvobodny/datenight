import { useMemo, useState } from 'react'
import { FcIdea } from 'react-icons/fc'
import { FcLike } from 'react-icons/fc'
import { FcUndo } from 'react-icons/fc'
import { FcSettings } from 'react-icons/fc'
import { FcFlashOn } from 'react-icons/fc'
import { FcVip } from 'react-icons/fc'
import { TbSwipe } from 'react-icons/tb'

import './Game.css'
import CardList from '../components/CardList'
import { getAllCategoryNames, randomActivityFromCategory } from '../activities'
import { type Activity } from '../types'
import { Header } from '../components/Layout/Header'
import { Footer } from '../components/Layout/Footer'

function Game() {
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
      <Header
        links={[
          { label: <TbSwipe />, href: '/game/swipe' },
          { label: <FcSettings />, href: '/game/settings' },
        ]}
      />
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
      <Footer />
    </main>
  )
}

export default Game
