import "../CreatedGoal/CreatedGoal.css";

const GoalsCards = ({
  activityName,
  difficulty,
  priority,
  time,
  catImage,
  id,
  onClose
}) => {

  return (
    <div className="createds">
      <div className="card">
        <button onClick={() => onClose(id)}>❌</button>

        <div className="write">
          <h2>Goal:{activityName}</h2>
          <h2>Difficulty:{difficulty}</h2>
          <h2>Priority:{priority}</h2>
          <h2>Time:{time}</h2>
          <img src={catImage} alt="Gato motivacional"></img>
        </div>
      </div>
    </div>
  );
};

export default GoalsCards;