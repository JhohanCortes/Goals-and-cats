import { useState } from "react";
import CreateGoal from "../Componentes/CreateGoal/CreateGoal";
import CreatedGoal from "../Componentes/CreatedGoal/CreatedGoal";

import "./Goals.css";

const Goals = ({totalGoals}) => {
  const [goals, setGoals] = useState([]);

  const onClose = (id) => {
    const goalsFiltered = goals.filter((goal) => goal.id !== id);
    setGoals(goalsFiltered);
  };

  return (
    <div className="goals">
      <CreateGoal setGoals={setGoals} className="cGoals" />
      <CreatedGoal goals={goals} onClose={onClose} totalGoals={totalGoals}/>
    </div>
  );
};

export default Goals;
