import "./SearchBar.css";
import TotalGoals from "../TotalGoals/TotalGoals";
const SearchBar = ({ total }) => {
  return (
    <div className="searchbar">
      <p id="searchbar-text">searchBar</p>
      <TotalGoals total={total} id="count-of-goals" />
    </div>
  );
};

export default SearchBar;
