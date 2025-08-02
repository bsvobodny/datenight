
import "./settings.css";
import {
  allActivities,
  getDisabledActivities,
  storeDisabledActivities
} from "./activities";
import { useRef, useState } from "react";


function Settings() {

    const [disabledActivities, setDisabledActivities] = useState<string[]>(getDisabledActivities());
    const detailsRefs = useRef<HTMLDetailsElement[]>([]);

    const addToRefs = (el:HTMLDetailsElement | null, index:number) => {
      if (el) {
        detailsRefs.current[index] = el;
      }
    };


    const toggleActivity = (activityId: string) => {
        setDisabledActivities((prevActivities) => {
            // If the activity is already disabled, remove it from the list
            // Otherwise, add it to the list
            if (prevActivities.some((id) => id === activityId)) {
                return [...new Set<string>(prevActivities.filter((id) => id !== activityId))];
            } else {
                return [...new Set<string>([...prevActivities, activityId])];
            }
        });
    };

    const saveChanges = () => {
      console.log("Saving changes", disabledActivities);
        storeDisabledActivities(disabledActivities);
        detailsRefs.current.forEach((n: HTMLDetailsElement) => n.removeAttribute("open"));  
        // scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (        
    <main className="settings">
        <header>
          <div className="navigation">
            <a className="navigation-link" href="/">
                ◀️
            </a>
          </div>
          <h1>Paramètres</h1>
        </header>
        <div className="center-container start">

          {Object.values(allActivities.categories).map(( category) => (
            <div key={category.name}>
                <h2>{category.name}</h2>
                {Object.entries(category.subCategories).map(([subCatId, subcat],index) => (
                  <details ref={(el) => addToRefs(el, index)} key={subCatId}>
                    <summary>{subcat.name}</summary>
                    <fieldset key={subCatId}>
                      {/* <legend>{subcat.name}</legend> */}
                      {subcat.activities.map((activity) => (
                          <div key={activity.id}>
                          <label>
                              <input type="checkbox" name={activity.id} checked={!disabledActivities.includes(activity.id)} onChange={() => toggleActivity(activity.id)} />
                              {activity.name}
                          </label>
                          </div>
                      ))}
                    </fieldset>
                  </details>
                ))}
            </div>
        ))}
        </div>
        <footer>
          <button onClick={saveChanges}>Sauvegarder</button>
        </footer>
      </main>
    );
}
export default Settings;