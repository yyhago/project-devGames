import { useEffect } from "react";

export default function GamesListaGeradoId({ GameList, selectedGenresNames }) {
  useEffect(() => {
    console.log("GameList", GameList);
  }, []);
  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white mb-4 mt-5">
        {selectedGenresNames} Populares
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {GameList.map((item) => (
          <div
            className="p-2 bg-[#222557] rounded-lg pb-7 h-full hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
            key={item.id}
          >
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-xl object-cover"
            />
            <h2 className="text-[20px] text-white font-bold">
              {item.name}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-gray-200">
              {" "}
              ⭐{item.rating} 💭{item.reviews_count} 🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
