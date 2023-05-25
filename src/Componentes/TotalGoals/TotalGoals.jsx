import "../SearchBar/SearchBar";

const TotalGoals = ({ total }) => {
  return total !== 0 ? (
    <div id="count-of-goals">Total goals:{total}</div>
  ) : (
    <div id="cero-goals">No se han agregado tareas</div>
  );
};

export default TotalGoals;
