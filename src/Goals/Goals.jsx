import { useState } from "react";
import CreateGoal from "../Componentes/CreateGoal/CreateGoal";
import CreatedGoal from "../Componentes/CreatedGoal/CreatedGoal";

import "./Goals.css";

const Goals = () => {
  const [goals, setGoals] = useState([]);

  return (
    <div className="goals">
      <CreateGoal setGoals={setGoals} className="cGoals" />
      {goals.map(({ activityName, difficulty, priority, catImage, time }) => {
        return (
          <CreatedGoal
            activityName={activityName}
            difficulty={difficulty}
            priority={priority}
            time={time}
            catImage={catImage}
          />
        );
      })}
    </div>
  );
};

export default Goals;
