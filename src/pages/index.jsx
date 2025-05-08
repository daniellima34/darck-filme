import CardFilmes from "@/components/CardFilme";
import PageWrapper from "@/components/PageWrapper";


export default function Home(){
  return (
   <PageWrapper>
    <div className="w-full flex flex-col items-center justify-center pt-7">
      <h1 className=" text-[40px]  text-[#907cda] font-bold ">sua coleção de filmes</h1>
      <p className=" text-[#9a898c] text-[20px]">acompanhe seus filmes favoritos, Adicione novos filmes a sua coleção</p>
    </div>
    <div className="w-full h-auto flex flex-wrap justify-center">
      <CardFilmes/>
    </div>
    
    
   </PageWrapper>

  
  
  )
}
