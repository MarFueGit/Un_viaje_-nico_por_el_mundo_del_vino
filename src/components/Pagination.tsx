import React from "react";
import "./Pagination.css";
import {
  faChevronCircleRight,
  faChevronCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PaginationProps {
  page: number;
  pageSize: number;
  onChangePageSize: (pageSize: number) => void;
  onNext: () => void;
  onBack: () => void;
}

function Pagination({
  page,
  pageSize,
  onChangePageSize,
  onNext,
  onBack
}: PaginationProps) {
  return (
    <section className="selection">
      <select
        className="mi-select"
        value={pageSize}
        onChange={(event) => onChangePageSize(Number(event.target.value))}
      >
        <option value="5"> 5 registros por pág</option>
        <option value="10"> 10 registros por pág</option>
        <option value="15"> 15 registros por pág</option>
        <option value="20"> 20 registros por pág</option>
        <option value="50"> 50 registros por pág</option>
        <option value="100">100 registros por pág</option>
      </select>
      <div className="icono-pagination">
        <FontAwesomeIcon icon={faChevronCircleLeft} onClick={() => onBack()} />
        <p>Página {page}</p>
        <FontAwesomeIcon icon={faChevronCircleRight} onClick={() => onNext()} />
      </div>
    </section>
  );
}

export default Pagination;
