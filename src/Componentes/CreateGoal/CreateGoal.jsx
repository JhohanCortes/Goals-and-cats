import "./CreateGoal.css";
import CreatedGoal from "../CreatedGoal/CreatedGoal";

import { useState } from "react";

const CreateGoal = ({ setGoals }) => {
  const sendValues = (event) => {
    event.preventDefault();

    const nRandom = Math.floor(Math.random() * 1000);
    const catImage = `https://robohash.org/${nRandom}?set=set4`;

    const nuevoElemento = {
      activityName: event.target.activityName.value,
      difficulty: event.target.difficulty.value,
      priority: event.target.priority.value,
      time: event.target.time.value,
      catImage,
    };
    console.log(nuevoElemento.catImage);
    console.log(nuevoElemento);
    setGoals((prevGoals) => [...prevGoals, nuevoElemento]);
  };

  return (
    <form className="creater" onSubmit={sendValues}>
      <div className="form">
        <label>Activity</label>
        <br />
        <input type="text" name="activityName" placeholder="Activity" />
        <br />
        <label>Difficulty</label>
        <br />
        <input type="text" name="difficulty" placeholder="Difficulty" />
        <br />
        <label>Prority</label>
        <input type="tñext" name="priority" placeholder="Prority" />
        <br />
        <label>Time</label>
        <br />
        <input type="text" name="time" placeholder="time" />
        <br />
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default CreateGoal;
