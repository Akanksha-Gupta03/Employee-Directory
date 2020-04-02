import React from "react";
import "../styles/SearchName.css";

function SearchName(){

    return(
        <div className="searchbox">
          <div className="input-group">
             <div className="input-group-prepend">
               <span className="input-group-text" id="">Search</span>
             </div>
             <input className="form-control" type="text" placeholder="name" aria-label="Search" />
          </div>
        </div>    
    //     <div class="input-group input-group-sm mb-3">
    //     <div class="input-group-prepend">
    //       <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
    //     </div>
    //     <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm">
    //   </div>
    )
}
export default SearchName;
