import type { Activity } from '../activities';
import Modal from '../Modal';
import useModal from '../Modal/useModal';
import './style.css';

type Props = {
  label: string;
  activity?: Activity;
  className?: String;
};

const Card = ({ label, activity, className }: Props) => {
  const basicModal = useModal();

  return (
    <>
      <div
        className={`card ${className}`}
        onClick={() => {
          if (activity) {
            basicModal.openModal();
          }
        }}
      >
        <label>{label}</label>
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
  );
};

export default Card;
