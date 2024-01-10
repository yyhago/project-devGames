import { useEffect } from "react";

export default function GameBanner({ GameList }) {
  useEffect(() => {}, []);

  return (
    <div className="relative">
      <div className="absolute bottom-0 p-8">
        <h2 className="text-[24px] text-white font-bold p-1">
          {GameList.name}
        </h2>
        <button className="bg-blue-700 text-white font-bold px-2 py-1 rounded-3xl">
          Realizar Compra!
        </button>
      </div>
      <img
        src={GameList.background_image}
        className="p-4 md:h-[740px] w-full object-cover rounded-3xl"
      />
    </div>
  );
}
