import "./CreateGoal.css";

import { useState, useRef } from "react";

const CreateGoal = ({ setGoals }) => {
  const [id, setId] = useState(0);
  const formRef = useRef(null);

  const sendValues = (event) => {
    event.preventDefault();

    const updId = id + 1;
    setId(updId);

    const nRandom = Math.floor(Math.random() * 1000);
    const catImage = `https://robohash.org/${nRandom}?set=set4`;

    const nuevoElemento = {
      id: id,
      activityName: event.target.activityName.value,
      difficulty: event.target.difficulty.value,
      priority: event.target.priority.value,
      time: event.target.time.value,
      catImage,
    };

    if (
      nuevoElemento.activityName &&
      nuevoElemento.difficulty &&
      nuevoElemento.priority &&
      nuevoElemento.time
    ) {
      setGoals((prevGoals) => [...prevGoals, nuevoElemento]);
      formRef.current.reset();
    } else {
      window.alert("Faltan campos");
    }
  };

  return (
    <form className="creater" onSubmit={sendValues} ref={formRef}>
      <div className="form">
        <label className="label">Activity</label>
        <br />
        <input type="text" name="activityName" placeholder="Activity" />
        <br />
        <label className="label">Difficulty</label>
        <br />
        <select name="difficulty" defaultValue="">
          <option value="" disabled>
            Select difficulty
          </option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <br />
        <label className="label">Priority</label>
        <br />
        <select name="priority" defaultValue="">
          <option value="" disabled>
            Select priority
          </option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <br />
        <label className="label">Time</label>
        <br />
        <select name="time" defaultValue="">
          <option value="" disabled>
            Select time
          </option>
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </select>
        <br />
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export default CreateGoal;
