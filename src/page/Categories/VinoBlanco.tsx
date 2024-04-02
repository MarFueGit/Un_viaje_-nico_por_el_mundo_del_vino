import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import imgVino from "../../assets/img/pexels-taha-samet-arslan-7627416.jpg";
import "./VinoBlanco.css";
import { wineStore } from "../../state/wineStore";
import { getWinesByTypeService } from "../../services/wines.service";
import { IResponseWines } from "../../types/Wine";
import Products from "../../components/Products";
import Pagination from "../../components/Pagination";

function VinoBlanco() {
  const wines = wineStore((state) => state.wines.data);
  const setWines = wineStore((state) => state.setWines);
  const nextPage = wineStore((state) => state.wines.nextPage);
  const prevPage = wineStore((state) => state.wines.prevPage);

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(5);

  useEffect(() => {
    getWinesByTypeService("Blanco", page, pageSize)
      .then((response: IResponseWines) => setWines(response?.response))
      .catch((error) => console.error(error));
  }, [page, pageSize]);

  return (
    <section>
      <Navbar />
      <h1>Un poco de historia del Vino Blanco</h1>
      <div className="wine-blanco">
        <img src={imgVino} alt="imagen del vino Blanco" />
        <p>
          La historia del vino blanco se remonta a miles de años atrás y está
          estrechamente ligada al desarrollo de la viticultura y la vinificación
          en diferentes partes del mundo. El vino blanco es una bebida apreciada
          por su frescura, diversidad de sabores y capacidad para complementar
          una amplia variedad de platos. Su elaboración, variedades de uva y
          maridaje lo convierten en una opción popular entre los amantes del
          vino en todo el mundo. <br />
          Con el vino blanco se pueden acompañar una variedad de platos y
          alimentos para realzar la experiencia gastronómica. Aquí tienes
          algunas sugerencias: <br /> <br /> <b> 1. Mariscos:</b> El vino blanco
          suele complementar muy bien platos de mariscos como camarones,
          langostinos, vieiras o pescados blancos como la lubina o la trucha.
          <br /> <b> 2. Aperitivos: </b>
          Quesos suaves y cremosos como el brie o el camembert, así como también
          fiambres como el jamón serrano o el prosciutto, son excelentes
          opciones para acompañar el vino blanco. <br /> <b>3. Ensaladas: </b>
          Las ensaladas frescas y ligeras son perfectas para maridar con vino
          blanco. Prueba con una ensalada de espinacas y fresas, o una ensalada
          caprese con tomate, mozzarella y albahaca. <br />
          <b>4. Platos de pollo y cerdo:</b> El vino blanco complementa muy bien
          platos de aves como pollo al limón o cerdo a la mostaza. <br />
          <b>5. Comida asiática:</b> Platos de cocina asiática como sushi, rolls
          de primavera, curry tailandés o pad thai se benefician de la frescura
          y acidez del vino blanco.
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

export default VinoBlanco;
