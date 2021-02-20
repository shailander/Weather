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
          onKeyDown={(e) => props.onSearch(e.code)}
          onChange={(e) => props.onQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
