import React from "react";

function Search(props) {
  return (
    <div className="row search-box">
      <div className="col-10">
        <input
          className="search-bar"
          placeholder="Search .."
          type="text"
          value={props.value}
          onKeyPress={(e) => props.onSearch(e.key)}
          onChange={(e) => props.onQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
