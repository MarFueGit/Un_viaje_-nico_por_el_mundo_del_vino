import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  return (
    <div className="buscador">
      <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input type="text" placeholder="Buscar vino ..." />
    </div>
  );
}

export default Search;
