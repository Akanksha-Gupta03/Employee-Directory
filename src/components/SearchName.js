import React, { useContext } from "react";
import "../styles/SearchName.css";
import DeveloperContext from "../utils/DeveloperContext";

const SearchName = () => {
  const context = useContext(DeveloperContext);

  return (
    <div className="searchbox">
      <div className="input-group">
          <div className="input-group-prepend">
          <button class="btn btn-outline-secondary" type="button" id="button-addon1">Search</button>
          </div>
          <input className="form-control mr-sm-2" type="search" placeholder="name" aria-label="Search" onChange={e => context.handleSearchChange(e)}/>
        </div>
    </div>
  );
}     
//     <div class="input-group input-group-sm mb-3">
//     <div class="input-group-prepend">
//       <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
//     </div>
//     <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
//   </div>
export default SearchName;
