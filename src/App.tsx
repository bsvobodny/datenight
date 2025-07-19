import { useEffect, useState } from "react";
import "./App.css";
import CardList from "./CardList";
import {
  allActivities,
  randomActivityFromCategory,
  type Activity,
} from "./activities.ts";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  const selectActivity = () => {
    const newActivities = [...activities];

    newActivities[activities.length] = randomActivityFromCategory(
      activities.length
    );

    setActivities(newActivities);
  };

  const reset = () => {
    setActivities([]);
  };

  const startNightActivities = () => {
    reset();
    selectActivity();
  };

  const getActionContent = () => {
    switch (activities.length) {
      case 0:
        return "✨";
      case 1:
        return "🧨";
      case 2:
        return "❤️‍🔥";
      case 3:
        return "🔥";
      default:
        return "↪️";
    }
  };

  return (
    <main>
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
          <button onClick={startNightActivities}>{getActionContent()}</button>
        </div>
      </div>
      <footer>
        <p>Créez des souvenirs inoubliables ensemble</p>
        <small>©️ Benjamin Svobodny</small>
      </footer>
    </main>
  );
}

export default App;
