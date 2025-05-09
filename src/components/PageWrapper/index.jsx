import Header from "../Header";

export default function PageWrapper ({children, showButton = true, showHeader = true}){
    return(
        <div className="w-full h-full min-h-screen flex-col">
            (showHeader && <header showButton = {showButton}/>)
            <Header showButton = {showButton} />
            <div className="w-full h-full bg-gradient-to-t min-h-screen from-[#020304] to-[#181029]">
                {children}
        </div> 
        </div>
    )
}