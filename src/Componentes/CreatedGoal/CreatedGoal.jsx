import "./CreatedGoal.css";
import GoalsCards from "../GoalsCards/GoalsCards";

const CreatedGoal = ({ goals, onClose }) => {
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
};

export default CreatedGoal;
