import { useEffect, useState } from "react";
import "./Categorie.css";
import Tinto from "../../assets/img/pexels-photo-2878738.jpeg";
import Blanco from "../../assets/img/pexels-taha-samet-arslan-7627416.jpg";
import Rosado from "../../assets/img/rosadoVino.jpg";
import Products from "../../components/Products";
import Pagination from "../../components/Pagination";
import Navbar from "../../components/Navbar";
import { wineStore } from "../../state/wineStore";
import useToken from "../../hooks/useToken";
import { getWinesByTypeService } from "../../services/wines.service";
import { IResponseWines } from "../../types/Wine";
import { useParams } from "react-router-dom";
import { getDescriptionCategorie, getTitleCategorie } from "./index";

export default function Categorie() {
  const { typeWine } = useParams<{ typeWine: string }>();
  const wines = wineStore((state) => state.wines.data);
  const setWines = wineStore((state) => state.setWines);
  const nextPage = wineStore((state) => state.wines.nextPage);
  const prevPage = wineStore((state) => state.wines.prevPage);
  const { getToken } = useToken();

  const [page, setPage] = useState<number | null>(null); // Initialize with null

  const [pageSize, setPageSize] = useState<number>(5);

  useEffect(() => {
    if (page !== null) {
      // Ensure page is not null
      getWinesByTypeService(
        String(typeWine),
        page,
        pageSize,
        String(getToken())
      )
        .then((response: IResponseWines) => setWines(response?.response))
        .catch((error) => console.error(error));
    }
  }, [page, pageSize, getToken, setWines, typeWine]);

  const getImage = () =>
    typeWine === "Tinto" ? Tinto : typeWine === "Blanco" ? Blanco : Rosado;

  const DescriptionComponent = getDescriptionCategorie(typeWine);

  return (
    <section>
      <Navbar />
      <h1>{getTitleCategorie(typeWine)}</h1>
      <div className={`wine`}>
        <img src={getImage()} alt={`imagen del vino`} data-testid='click-vino'/>
        <DescriptionComponent />
      </div>
      <Products data={wines} titleProducts="ESCOGE TU VINO FAVORITO" />
      <Pagination
        page={page}
        pageSize={pageSize}
        onChangePageSize={(page: number) => {
          setPage(page);
          setPageSize(page); // Update pageSize when changing page
        }}
        onNext={() => setPage(nextPage)}
        onBack={() => setPage(prevPage)}
        disabledBack={prevPage === null}
        disabledNext={nextPage === null}
      />
    </section>
  );
}
