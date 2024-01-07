import ListaGenero from "../components/ListaGenero";

export default function Home() {
  return (
    <div className="grid grid-cols-4 p-4">
        <div className="hidden md:block">
          <ListaGenero />
        </div>
        <div className="col-span-4 md:col-span-3 bg-blue-400">Lista de Games</div>
    </div>
  );
}
