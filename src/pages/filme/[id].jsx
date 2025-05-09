import PageWrapper from "@/components/PageWrapper"
import { useRouter } from "next/router"
import { FaArrowLeft } from "react-icons/fa";

export default function Filme() {
    const router = useRouter()
    const { id } = router.query
    
    return (
        <PageWrapper
        showHeader = {false} >
            <div className="w-full h-full  flex flex-col px-[350] pt-12 ">
                <button 
                onClick={() => router.back()}
                className="px-5 py-2 text-[#8a898c] gap-2 flex items-center justify-center
                 rounded-lg hover:bg-[#27282b] houver:text-[#8f2760]">
                    <FaArrowLeft />
                    <p>Voltar para lista de filmes</p>
            </button>
            </div>
        
        </PageWrapper>
        
    )
}
