import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { wineStore } from "../state/wineStore";
import { getWinesService, searchByNameService } from "../services/wines.service";
import useToken from "../hooks/useToken";

function Search() {
  const setSearching = wineStore((state) => state.setSearching);
  const setWines = wineStore((state) => state.setWines);
  const { getToken } = useToken();

  const handleSearch = async (value: string) => {
    setSearching(true);
    try {
      const wines = value === '' ? await getWinesService(1, 5, String(getToken())) : await searchByNameService(value, 1, 50, String(getToken()));
      setWines(wines.response);
      setSearching(false);
    } catch (error) {
      setSearching(false);
      console.log(error);
    }
  };

  return (
    <div className="buscador">
      <div className="search-icon">
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <input
        type="text"
        placeholder="Buscar vino ..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
