import logo from "../assets/img/logo.png"
import { TfiSearch } from "react-icons/tfi";
import { BsFillMoonFill} from "react-icons/bs";
import { WiDaySunny } from "react-icons/wi";

export default function Header(){
    return(
        <div className="flex items-center p-3">
            <img src={logo} width={60} height={60}/>
            <div className="flex w-full p-2 bg-zinc-500 items-center mx-5 rounded-full">
                <TfiSearch />
                <input type="text" placeholder="Procurar Jogo..." className="bg-transparent outline-none px-2 text-white"/>
            </div>
            <div>
                <BsFillMoonFill /> {/*2217*/}
                <WiDaySunny />
            </div>
        </div>
    )
}