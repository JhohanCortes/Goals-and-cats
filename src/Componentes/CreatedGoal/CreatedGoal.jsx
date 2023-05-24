import "./CreatedGoal.css";

const CreatedGoal = ( {activityName, difficulty, priority, time, catImage} ) => {
    return (
        <div className="createds">
            <div className="writes">
                <h2>Activity:{activityName}</h2>
                <h2>Difficulty:{difficulty}</h2>
                <h2>Priority:{priority}</h2>
                <h2>Time:{time}</h2>
                <img src={catImage} alt="Gato motivacional"></img>
            </div>
            
        </div>
        
    )
}

export default CreatedGoal;
