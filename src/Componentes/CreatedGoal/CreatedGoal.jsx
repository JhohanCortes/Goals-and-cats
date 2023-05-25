import GoalsCards from "../GoalsCards/GoalsCards";
import WaitGoal from "../WaitGoal/WaitGoal";

const CreatedGoal = ({ goals, onClose, totalGoals }) => {
  if (goals.length === 0) {
    
    totalGoals(0)

    return <WaitGoal />;
  } else {
    
    let goalsCount = 0;
    goals.forEach(() => {
      goalsCount++;
    });

    totalGoals(goalsCount);

    return goals.map(
      ({ activityName, difficulty, priority, catImage, time, id }) => {
        return (
          <GoalsCards
            id={id}
            activityName={activityName}
            difficulty={difficulty}
            priority={priority}
            time={time}
            catImage={catImage}
            onClose={onClose}
          />
        );
      }
    );
  }
};

export default CreatedGoal;
