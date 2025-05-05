import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";

export default function Cadastrar(){
    return(
     <PageWrapper showButton={false}>
        <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
            <h1 className="text-[35px] font-bold text-[#9a86f4]">Adicione um novo filme</h1>
            <p className="text-[20px] text-gray-500">preencha o formulario abaixo para adicionar um novo filme a sua coleção</p>
            <div className="w-full flex justify-center pt-[40px]">
                <form className="w-[50%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border border-[#3a364c] flex flex-col "></form></div> 
        </div>

     </PageWrapper>
    )
}