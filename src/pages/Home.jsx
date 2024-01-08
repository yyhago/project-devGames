import { useEffect, useState } from "react";
import ApiGlobal from "../Services/ApiGlobal";
import ListaGenero from "../components/ListaGenero";
import GameBanner from "../components/GameBanner";

export default function Home() {

  const [todosGamesLista, setTodosGamesLista] = useState()

  useEffect(() => {
    todosJogosLista();
  }, []);

  const todosJogosLista = () => {
    ApiGlobal.getTodosJogos.then((resp) => {
      setTodosGamesLista(resp.data.results)
    });
  };

  return (
    <div className="grid grid-cols-4 p-4">
      <div className="hidden md:block">
        <ListaGenero />
      </div>
      <div className="col-span-4 md:col-span-3">
        {todosGamesLista?.length>0?
        <GameBanner GameList = {todosGamesLista[0]} />
        :null}
        </div>
    </div>
  );
}
