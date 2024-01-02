import logo from "../assets/img/logo.png";
import { TfiSearch } from "react-icons/tfi";
import { BsFillMoonFill } from "react-icons/bs";
import { WiDaySunny } from "react-icons/wi";
import { useEffect, useState } from "react";
import { useContext } from 'react';
import { ThemeContext } from "../context/ThemeContext";

export default function Header() {
  const [toogle, setToogle] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);

  useEffect(() => {
    console.log("theme", theme);
  }, []);
  return (
    <div className="flex items-center p-3">
      <img
        src={logo}
        width={60}
        height={60}
      />
      <div className="flex w-full p-2 bg-zinc-500 items-center mx-5 rounded-full">
        <TfiSearch />
        <input
          type="text"
          placeholder="Procurar Jogo..."
          className="bg-transparent outline-none px-2 text-white"
        />
      </div>
      <div>
        {theme == 'light' ? (
          <BsFillMoonFill
            onClick={() => setTheme('dark')}
            className="text-[35px] bg-zinc-400 text-black p-1 rounded-full cursor-pointer"
          />
        ) : (
          <WiDaySunny
            onClick={() => setTheme('light')}
            className="text-[35px] bg-zinc-300 text-black p-1 rounded-full cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}
