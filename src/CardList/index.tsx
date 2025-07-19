import './style.css';
import type { Activity, Category } from '../activities';
import Card from '../Card';

type Props = {
  categories: Category[];
  selectedActivities?: Activity[];
};

const CardList = ({ categories, selectedActivities = [] }: Props) => {
  return (
    <div className="card-list">
      <Card
        className="section1"
        label={categories[0].name}
        activity={selectedActivities[0]}
      />
      <Card
        className="section2"
        label={categories[1].name}
        activity={selectedActivities[1]}
      />
      <Card
        className="section3"
        label={categories[2].name}
        activity={selectedActivities[2]}
      />
      <Card
        className="section4"
        label={categories[3].name}
        activity={selectedActivities[3]}
      />
    </div>
  );
};

export default CardList;
