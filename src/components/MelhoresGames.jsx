import { useEffect } from "react"

export default function MelhoresGames({GameList}){

    useEffect(()=>{
        console.log(GameList)
    },[])

    return(
    <div className="mt-5 p-4 hidden md:block">
        <h2 className="font-bold text-[30px] dark:text-white">Melhores Games do Momento</h2>
        <div className="md:grid md:grid-cols-3 gap-4 lg:grid-cols-4 mt-3">
            {GameList.map((item,index)=>index<4&&(
                <div className="bg-[#222557] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out">
                    <img src={item.background_image} className="h-[270px] rounded-lg object-cover"/>
                    <h2 className="dark:text-white text-[20px] p-2 font-bold text-white">{item.name}</h2>
                </div>
            ))}
        </div>
    </div>
    )
}