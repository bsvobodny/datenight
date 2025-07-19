import { useEffect, useState } from 'react';
import './App.css';
import CardList from './CardList';
import {
  allActivities,
  randomActivityFromCategory,
  type Activity,
} from './activities.ts';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const selectActivity = () => {
    const newActivities = [...activities];

    newActivities[activities.length] = randomActivityFromCategory(
      activities.length
    );

    setActivities(newActivities);
  };

  const nextActivity = (time = 3000) => {
    setTimeout(() => selectActivity(), time);
  };

  const reset = () => {
    setActivities([]);
  };

  const startNightActivities = () => {
    reset();
    nextActivity(500);
  };

  useEffect(() => {
    if (activities.length > 0 && activities.length < 4) {
      nextActivity();
    }
  }, [activities]);

  return (
    <>
      <header>
        <h1>Cupion</h1>
        <p className="subtitle">
          Votre assistant personnel pour des soirées romantiques inoubliables
        </p>
      </header>
      <div className="center-container">
        <CardList
          categories={Object.values(allActivities.categories)}
          selectedActivities={activities}
        />
        <div className="control">
          <button onClick={startNightActivities}>✨</button>
        </div>
      </div>
      <footer>
        <p className="read-the-docs">
          Créez des souvenirs inoubliables ensemble
        </p>
      </footer>
    </>
  );
}

export default App;
