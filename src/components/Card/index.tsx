import type { Activity } from '../../types'
import { FcRefresh } from 'react-icons/fc'

import { Modal } from '../Modal'
import useModal from '../Modal/useModal'
import './style.css'

type Props = {
  label: string
  activity?: Activity
  className?: string
  retry?: () => void
}

const Card = ({ label, activity, className, retry }: Props) => {
  const basicModal = useModal()

  return (
    <>
      <div
        className={`card ${className}`}
        onClick={() => {
          if (activity) {
            basicModal.openModal()
          }
        }}
      >
        <div className="card-header">
          <label>{label}</label>
          {activity && retry && (
            <button
              className="retry"
              onClick={(e) => {
                e.stopPropagation()
                retry()
              }}
              aria-label="retry"
            >
              <FcRefresh />
            </button>
          )}
        </div>
        <div className="card-title">
          <h2>{activity?.name}</h2>
        </div>
      </div>
      {activity && (
        <Modal
          isOpen={basicModal.isOpen}
          onClose={basicModal.closeModal}
          title={activity.name}
          size="medium"
          showCloseButton={false}
        >
          <div>
            <p className="description">{activity.description}</p>
            <button onClick={basicModal.closeModal}>Fermer</button>
          </div>
        </Modal>
      )}
    </>
  )
}

export default Card
