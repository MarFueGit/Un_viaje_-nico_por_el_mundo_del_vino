import { useEffect, useState } from "react";
import "./App.css";
import Routes from "./routes/routes";
import useToken from "./hooks/useToken";
import { getAuthTokenService } from "./services/auth.service";
import { IToken } from "./types/Token";
function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const { token, saveToken } = useToken();

  useEffect(() => {
    if (!token) {
      getAuthTokenService("Mary", "Mary100")
        .then((token: IToken) => {
          saveToken(token.token);
          setLoading(false);
        })
        .catch((error) => console.log("ERROR: ", error));
    }
  }, []);

  if (loading) {
    return <h1>Cargando app</h1>;
  }

  return <Routes />;
}

export default App;
