import { BsFilm } from "react-icons/bs";


export default function Header({showButton = true}){
    return(
        <header className="w-full h-[50px] flex bg-[#0C0F15] justify-between pr-2 items-center">
            <div className="flex h-full gap-2 items-center justify-cente pl-2">
            <BsFilm color="#9B87f5" size={25}/>
            <h2 className="font-bold text-[20px] text-white">Darck Filme</h2>

            </div>
            {showButton &&(
                <button className="w-[150px] h-[60%] rounder-md bg-[#9b87f5] text-white font-bold hover:bg-[#9b87f5]/70 ">Adicionar Filme</button>
            )}

        </header>
    )
}
