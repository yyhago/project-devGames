import { useEffect, useState } from "react";
import ApiGlobal from "../Services/ApiGlobal";

export default function ListaGenero() {

  const [listaGenero, setListaGenero] = useState([])
  const [ativacaoIndex, setAtivacaoIndex] = useState(0)

  useEffect(() => {
    getGenreList();
  }, []);

  const getGenreList = () => {
    ApiGlobal.getGenreList.then((resp) => {
      setListaGenero(resp.data.results)
    });
  };

  return(
    <div className="p-4">
      <h2 className="text-[30px] font-bold dark:text-white mb-4">Categorias</h2>
      {listaGenero.map((item,index)=>(
        <div onClick={()=>setAtivacaoIndex(index)} className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-400 rounded-lg p-2 group hover:dark:bg-gray-600 ${ativacaoIndex == index?"bg-gray-400 dark:bg-gray-600":null}`} key={item.id}>
          <img src={item.image_background} className={`w-[80px] h-[80px] object-cover rounded-lg group-hover:scale-105 transition-none ease-out duration-300 ${ativacaoIndex == index?"font-bold":null}`} />
          <h3 className={`dark:text-white text-[20px] group-hover:font-bold transition-none ease-out duration-300 ${ativacaoIndex == index?"font-bold":null}`}>{item.name}</h3>
        </div>
      ))}
    </div>
  )
}
