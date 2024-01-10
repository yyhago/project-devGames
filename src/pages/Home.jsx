import { useEffect, useState } from "react";
import ApiGlobal from "../Services/ApiGlobal";
import ListaGenero from "../components/ListaGenero";
import GameBanner from "../components/GameBanner";
import MelhoresGames from "../components/MelhoresGames";
import GamesListaGeradoId from "../components/GamesListaGeradoId";

export default function Home() {
  const [todosGamesLista, setTodosGamesLista] = useState();
  const [gamesPelaListaId, setGamesPelaListaId] = useState([]);
  const [selectedGenresNames, setSelectedGenresNames] = useState("Action");

  useEffect(() => {
    todosJogosLista();
    getGamesListaGeradoID(4);
  }, []);

  const todosJogosLista = () => {
    ApiGlobal.getTodosJogos.then((resp) => {
      setTodosGamesLista(resp.data.results);
    });
  };

  const getGamesListaGeradoID = (id) => {
    ApiGlobal.getGamesListaGeradoID(id).then((resp) => {
      console.log("Game listado por id ", resp.data.results);
      setGamesPelaListaId(resp.data.results);
    });
  };

  return (
    <div className="grid grid-cols-4 p-4">
      <div className="hidden md:block">
        <ListaGenero
          GeneroId={(GeneroId) => getGamesListaGeradoID(GeneroId)}
          selectedGenresNames={(name) => setSelectedGenresNames(name)}
        />
      </div>
      <div className="col-span-4 md:col-span-3">
        {todosGamesLista?.length > 0 && gamesPelaListaId.length > 0 ? (
          <div>
            <GameBanner GameList={todosGamesLista[0]} />
            <MelhoresGames GameList={todosGamesLista} />
            <GamesListaGeradoId
              GameList={gamesPelaListaId}
              selectedGenresNames={selectedGenresNames}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
