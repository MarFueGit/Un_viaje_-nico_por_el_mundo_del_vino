import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import imgVino from "../../assets/img/pexels-photo-2878738.jpeg";
import "./VinoTinto.css";
import { wineStore } from "../../state/wineStore";
import { getWinesByTypeService } from "../../services/wines.service";
import { IResponseWines } from "../../types/Wine";
import Products from "../../components/Products";
import Pagination from "../../components/Pagination";

export default function VinoTinto() {
  const wines = wineStore((state) => state.wines.data);
  const setWines = wineStore((state) => state.setWines);
  const nextPage = wineStore((state) => state.wines.nextPage);
  const prevPage = wineStore((state) => state.wines.prevPage);

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  useEffect(() => {
    getWinesByTypeService("Tinto", page, pageSize)
      .then((response: IResponseWines) => setWines(response?.response))
      .catch((error) => console.error(error));
  }, [page, pageSize]);

  return (
    <section>
      <Navbar />
      <h1>Un poco de historia del Vino Tinto</h1>
      <div className="wine-tinto">
        <img src={imgVino} alt="imagen del vino tinto" />
        <p>
          El vino tinto tiene una historia que se remonta a miles de años, con
          evidencia arqueológica que sugiere que la producción de vino se
          originó en la región de Transcaucasia, en lo que hoy es Georgia,
          alrededor del 6000 a.C. Desde entonces, ha desempeñado un papel
          significativo en muchas culturas y civilizaciones a lo largo de la
          historia.Hoy en día, el vino tinto se disfruta en todo el mundo y es
          valorado por su diversidad de sabores, aromas y perfiles de cuerpo. La
          cultura del vino ha evolucionado hasta convertirse en un tema de
          estudio y aprecio, con catadores, sommeliers y enólogos dedicados a
          explorar y perfeccionar este antiguo arte. Con el vino tinto ustedes
          acompañar con una variedad de alimentos que realcen su sabor y
          complementen sus características. Aquí tienes algunas sugerencias:{" "}
          <br /> <br />
          <b>1. Carnes rojas:</b> El vino tinto se combina bien con carnes como
          filete, cordero, cerdo y hamburguesas. La riqueza y los taninos del
          vino equilibran la grasa y realzan el sabor de la carne. <br />
          <b> 2. Quesos:</b> Quesos maduros como el queso cheddar, el queso azul
          o el parmesano son excelentes opciones para acompañar el vino tinto.
          La combinación de sabores intensos de los quesos con la acidez y los
          taninos del vino crea una experiencia deliciosa. <br />
          <b>3. Pasta con salsa roja:</b> La pasta con salsa de tomate es otra
          excelente opción para acompañar el vino tinto. La acidez de la salsa
          complementa la acidez del vino, mientras que los taninos del vino
          equilibran la dulzura de los tomates. <br />{" "}
          <b> 4. Comida picante:</b>
          Algunos vinos tintos, especialmente aquellos con un toque de dulzura,
          pueden ser maravillosos con platos picantes como curry o chili. La
          frescura del vino ayuda a refrescar el paladar entre bocados de comida
          picante. <br /> <b> 5. Chocolate oscuro:</b> Si buscas un postre para
          acompañar el vino tinto, el chocolate oscuro es una excelente opción.
          Los sabores ricos y profundos del chocolate se complementan bien con
          los sabores frutales y a veces terrosos del vino tinto.
        </p>
      </div>
      <Products data={wines} />
      <Pagination
        page={page}
        pageSize={pageSize}
        onChangePageSize={(page: number) => setPageSize(page)}
        onNext={() => setPage(nextPage)}
        onBack={() => setPage(prevPage)}
        disabledBack={prevPage === null}
        disabledNext={nextPage === null}
      />
    </section>
  );
}
