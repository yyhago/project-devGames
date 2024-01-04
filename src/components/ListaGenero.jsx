import { useEffect } from "react";
import ApiGlobal from "../Services/ApiGlobal";

export default function ListaGenero() {
  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    ApiGlobal.getGenreList.then((resp) => {
      console.log(resp.data.results);
    });
  };

  return <div>Generolista</div>;
}
