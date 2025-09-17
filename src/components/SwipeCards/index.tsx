import { useState, useRef, useEffect, useCallback } from 'react'
import { LuHeart } from 'react-icons/lu'
import { LuRotateCcw } from 'react-icons/lu'
import { LuX } from 'react-icons/lu'
import type { Activity } from '../../types'
import './style.css'

type Direction = 'left' | 'right'

type Props = {
  activities: Activity[]
}

export const SwipeCards = ({ activities }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [dragInfo, setDragInfo] = useState({
    isDragging: false,
    startX: 0,
    currentX: 0,
  })
  const [decision, setDecision] = useState<Direction | null>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])

  const SWIPE_THRESHOLD = 100
  const MAX_ROTATION = 20

  // Gestion du début du drag
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX =
      e.type === 'mousedown'
        ? (e as React.MouseEvent).clientX
        : (e as React.TouchEvent).touches[0].clientX
    setDragInfo({
      isDragging: true,
      startX: clientX,
      currentX: clientX,
    })
  }

  // Gestion du swipe
  const handleSwipe = useCallback(
    (direction: Direction) => {
      if (currentIndex >= activities.length) return

      setDecision(direction)

      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1)
        setDecision(null)
        setDragInfo({ isDragging: false, startX: 0, currentX: 0 })
      }, 300)
    },
    [currentIndex, activities.length]
  )

  // Gestion du mouvement pendant le drag
  const handleDragMove = useCallback(
    (e: React.MouseEvent | React.TouchEvent) => {
      if (!dragInfo.isDragging) return

      e.preventDefault()
      const clientX =
        e.type === 'mousemove'
          ? (e as React.MouseEvent).clientX
          : (e as React.TouchEvent).touches[0].clientX
      setDragInfo((prev) => ({ ...prev, currentX: clientX }))
    },
    [dragInfo.isDragging]
  )

  // Gestion de la fin du drag
  const handleDragEnd = useCallback(() => {
    if (!dragInfo.isDragging) return

    const deltaX = dragInfo.currentX - dragInfo.startX

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX > 0) {
        handleSwipe('right')
      } else {
        handleSwipe('left')
      }
    }

    setDragInfo({ isDragging: false, startX: 0, currentX: 0 })
  }, [dragInfo, handleSwipe])

  // Reset des cartes
  const resetCards = () => {
    setCurrentIndex(0)
    setDecision(null)
    setDragInfo({ isDragging: false, startX: 0, currentX: 0 })
  }

  // Calcul de la transformation de la carte
  const getCardTransform = (index: number) => {
    if (index < currentIndex) {
      return { transform: 'scale(0)', opacity: 0 }
    }
    if (index > currentIndex) {
      return {
        transform: `scale(${0.95 - (index - currentIndex) * 0.05})`,
        opacity: 1 - (index - currentIndex) * 0.1,
        zIndex: 10 - (index - currentIndex),
      }
    }

    const deltaX = dragInfo.isDragging ? dragInfo.currentX - dragInfo.startX : 0
    const rotation = (deltaX / window.innerWidth) * MAX_ROTATION
    const scale = 1

    let finalTransform = `translateX(${deltaX}px) rotate(${rotation}deg) scale(${scale})`

    if (decision) {
      const finalDeltaX =
        decision === 'right' ? window.innerWidth : -window.innerWidth
      const finalRotation = decision === 'right' ? MAX_ROTATION : -MAX_ROTATION
      finalTransform = `translateX(${finalDeltaX}px) rotate(${finalRotation}deg) scale(0.8)`
    }

    return {
      transform: finalTransform,
      opacity: decision ? 0 : 1,
      zIndex: 10,
      transition: dragInfo.isDragging
        ? 'none'
        : 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    }
  }

  // Couleur de l'indicateur de décision
  const getDecisionColor = () => {
    if (!dragInfo.isDragging) return 'transparent'
    const deltaX = dragInfo.currentX - dragInfo.startX
    if (Math.abs(deltaX) < 50) return 'transparent'
    return deltaX > 0 ? 'rgba(76, 217, 100, 0.7)' : 'rgba(255, 59, 92, 0.7)'
  }

  // Texte de l'indicateur de décision
  const getDecisionText = () => {
    if (!dragInfo.isDragging) return ''
    const deltaX = dragInfo.currentX - dragInfo.startX
    if (Math.abs(deltaX) < 50) return ''
    return deltaX > 0 ? 'OUI' : 'NON'
  }

  useEffect(() => {
    const handleGlobalMouseMove = (e: unknown) =>
      handleDragMove(e as React.MouseEvent | React.TouchEvent)
    const handleGlobalMouseUp = () => handleDragEnd()

    if (dragInfo.isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove)
      document.addEventListener('mouseup', handleGlobalMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseup', handleGlobalMouseUp)
    }
  }, [
    dragInfo.isDragging,
    dragInfo.startX,
    dragInfo.currentX,
    handleDragMove,
    handleDragEnd,
  ])

  return (
    <div className="container">
      <div className="swipe-cards-container">
        {currentIndex >= activities.length ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white rounded-2xl shadow-2xl">
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Plus de cartes !
              </h2>
              <p className="text-gray-600 mb-6">
                Vous avez vu toutes les activités disponibles
              </p>
              <button onClick={resetCards} className="reset-btn">
                <LuRotateCcw size={16} />
                Recommencer
              </button>
            </div>
          </div>
        ) : (
          activities.slice(currentIndex).map((activity, index) => (
            <div
              key={activity.id}
              ref={(el) => {
                cardRefs.current[index] = el
              }}
              className="swipe-card"
              style={getCardTransform(currentIndex + index)}
              onMouseDown={index === 0 ? handleDragStart : undefined}
              onTouchStart={index === 0 ? handleDragStart : undefined}
              onTouchMove={index === 0 ? handleDragMove : undefined}
              onTouchEnd={index === 0 ? handleDragEnd : undefined}
            >
              {/* Indicateur de décision */}
              {index === 0 && (
                <div
                  className="decision-overlay"
                  style={{ backgroundColor: getDecisionColor() }}
                >
                  <span className="decision-text">{getDecisionText()}</span>
                </div>
              )}

              {/* Image de la carte */}
              {/* <div 
                className="w-full h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${activity.image})` }}
              /> */}

              {/* Informations de la carte */}
              <div className="p-6">
                <h3 className="swipe-card-name">{activity.name}</h3>
                <p className="swipe-card-description">{activity.description}</p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Boutons d'action */}
      {currentIndex < activities.length && (
        <div className="controls">
          <button
            onClick={() => handleSwipe('left')}
            className="control-btn reject-btn"
          >
            <LuX size={24} className="text-red-500" />
          </button>
          <button
            onClick={() => handleSwipe('right')}
            className="control-btn like-btn"
          >
            <LuHeart size={24} className="text-green-500" />
          </button>
        </div>
      )}

      {/* Indicateur de progression */}
      <div className="mt-6 flex gap-2 flex-wrap">
        {activities.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index < currentIndex ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
