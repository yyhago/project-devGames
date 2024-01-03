export default function Home() {
  return (
    <div className="grid grid-cols-4">
        <div className="bg-red-600 h-full hidden md:block">Genero</div>
        <div className="col-span-4 md:col-span-3 bg-blue-400">Lista de Games</div>
    </div>
  );
}
