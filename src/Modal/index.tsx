import { useEffect, useRef, type ReactNode } from 'react'
import './style.css'

type Props = {
  isOpen: boolean
  onClose: () => void
  title: string
  children: ReactNode
  size?: 'full' | 'large' | 'medium' | 'small'
  showCloseButton?: boolean
  closeOnOverlayClick?: boolean
  closeOnEscape?: boolean
}

interface KeyboardEvent {
  key: string
}

// Composant Modal principal
const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
}: Props) => {
  const modalRef = useRef(null)

  // Gérer la fermeture avec la touche Échap
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Empêcher le scroll du body
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose, closeOnEscape])

  // Gérer le clic sur l'overlay
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className={`modal-overlay ${isOpen ? 'modal-open' : ''}`}
      onClick={handleOverlayClick}
    >
      <div ref={modalRef} className={`modal-content modal-${size}`}>
        {/* Header */}
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          {showCloseButton && (
            <button
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Fermer"
            >
              X
            </button>
          )}
        </div>

        {/* Contenu */}
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

export default Modal
