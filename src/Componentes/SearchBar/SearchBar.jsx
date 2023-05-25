import "./SearchBar.css";
import TotalGoals from "../TotalGoals/TotalGoals";
import SocialNetwork from "../SocialNetwork/SocialNetwork";

const SearchBar = ({ total }) => {
  return (
    <div className="searchbar">
      <div className="searchbar-left">
        <p id="searchbar-text">searchBar</p>
        <SocialNetwork />
      </div>
      <div className="searchbar-right">
      <TotalGoals total={total} id="count-of-goals" />
      </div>
    </div>
  );
};

export default SearchBar;
