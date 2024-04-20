export const getTitleCategorie = (typeWine: string | undefined): string => {
  switch (typeWine) {
    case "Tinto":
      return "Un poco de historia del Vino Tinto";

    case "Rosado":
      return "Un poco de historia del Vino Rosado";

    case "Blanco":
      return "Un poco de historia del Vino Blanco";

    default:
      return "Un poco de historia del Vino Tinto";
  }
};

export const getDescriptionCategorie = (
  typeWine: string | undefined
): React.FC => {
  switch (typeWine) {
    case "Tinto":
      return () => (
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
      );

    case "Rosado":
      return () => (
        <p>
          La historia del vino rosado es igualmente rica y diversa, con una
          tradición que se remonta a miles de años atrás. Aunque quizás no tan
          prominente como la del vino tinto o blanco, el vino rosado ha tenido
          un papel significativo en la cultura vinícola mundial. Antigüedad: Se
          cree que la producción de vino rosado se remonta a la antigua Grecia y
          Roma, donde se elaboraban vinos mezclando uvas blancas y tintas. Estos
          vinos tenían un tono rosado y se consumían ampliamente en las
          celebraciones y banquetes de la época. <br />
          El vino rosado es muy versátil y puede maridar bien con una variedad
          de platos. Aquí tienes algunas sugerencias de acompañamientos para el
          vino rosado: <br /> <br />
          <b>1. Mariscos y pescados: </b> El vino rosado puede complementar
          perfectamente platos de mariscos como camarones, langostinos, ostras,
          así como pescados como salmón, trucha o lubina. <br />
          <b>2. Ensaladas: </b>Las ensaladas frescas con ingredientes como
          fresas, queso de cabra, nueces o vinagretas suaves pueden ser una
          excelente opción para acompañar el vino rosado. <br />
          <b>3. Platos de aves de corral: </b>El pollo a la parrilla, el pavo
          asado o incluso platos más elaborados como el pato confitado pueden
          combinar muy bien con vino rosado. <br />
          <b>4. Quesos suaves: </b> Quesos cremosos y suaves como el brie, el
          camembert o el queso de cabra pueden realzar los sabores del vino
          rosado. <br /> <b> 5. Platos de cocina asiática:</b> Platos asiáticos
          con sabores agridulces, picantes o a base de hierbas frescas pueden
          complementar bien el vino rosado, como sushi, curry tailandés o rolls
          vietnamitas.
        </p>
      );

    case "Blanco":
      return () => (
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
      );

    default:
      return () => (
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
      );
  }
};
