import React, { useEffect, useState } from "react";
import imgVino from "../../assets/img/img4.jpg";
import "./Home.css";
import { getWinesService } from "../../services/wines.service";
import { IResponseWines } from "../../types/Wine";
import Products from "../../components/Products";
import Pagination from "../../components/Pagination";
import Footer from "../../components/Footer";
import { wineStore } from "../../state/wineStore";

function Home() {
  const wines = wineStore((state) => state.wines);
  const setWines = wineStore((state) => state.setWines);

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  useEffect(() => {
    getWinesService(page, pageSize)
      .then((response: IResponseWines) => setWines(response?.response.data))
      .catch((error) => console.error(error));
  }, [page, pageSize]);

  return (
    <main>
      <section className="section_home">
        <img src={imgVino} alt="imagen vino" />
        
      </section>
      <Products data={wines} />
      <Pagination
        page={page}
        pageSize={pageSize}
        onChangePageSize={(page: number) => setPageSize(page)}
        onNext={() => setPage(page + 1)}
        onBack={() => setPage(page - 1)}
      />
      <hr />
      <Footer />
    </main>
  );
}

export default Home;
