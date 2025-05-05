import Header from "../Header";

export default function PageWrapper ({children, showButton = true}){
    return(
        <div className="w-full h-full flex-col">
            <Header showButton = {showButton} />
            <div className="w-full h-screen bg-gradient-to-t from-[#020304] to-[#181029]">
                {children}
        </div> 
        </div>
    )
}