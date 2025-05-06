
import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";
import { toast } from "react-toastify";
import instance from "../api/instance";

export default function Cadastrar(){
    const [titulo, setTitulo] = useState("");
    const [diretor, setDiretor] = useState("");
    const [ano, setAno] = useState(0);
    const [genero, setGenero] = useState("");
    const [nota, setNota] = useState(0);
    const [sinopse, setSinopse] = useState("");
    const [banner, setBanner] = useState("");

    async function handleSubmit(event){
        event.preventDefault();

        if(titulo || ano || nota || diretor || genero || sinopse || banner ){
            toast.error("preenche todos os campos")
            return;
        }
        try {
            await instance.post("/api/movies", {
                titulo: titulo,
                diretor: diretor,
                ano: ano,
                genero: genero,
                nota: nota,
                sinopse: sinopse,
                banner: banner
            })

            toast.success("Filme cadastrado com sucesso!")
            setTitulo("");
            setDiretor("");
            setAno(0);
            setGenero("");
            setNota(0);
            setSinopse("");
            setBanner("");
        } catch (error) {
            console.error(error)
            toast.error("Erro ao cadastrar filme!")
        }
    }

    return (
        <PageWrapper  showButton={false}>
            <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
                <h1 className="text-[40px] font-bold text-[#9A86F4]">Adicione um novo filme</h1>
                <p className="text-[20px] text-gray-500">Preencha o formulário abaixo para adicionar um novo filme à sua coleção.</p>
                <div className="w-full flex justify-center pt-[40px]">
                    <form 
                        onSubmit={handleSubmit}
                        className="w-[50%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border border-[#3a364c] flex flex-col p-6 gap-4">
                        <CustomInput 
                            label="Título"
                            value={titulo}
                            placeholder="Digite o título do filme"
                            type="text"
                            onChange={
                                (event) => setTitulo(event.target.value)
                            }
                        />
                        <CustomInput 
                            label="Diretor"
                            value={diretor}
                            placeholder="Digite o nome do diretor"
                            type="text"
                            onChange={
                                (event) => setDiretor(event.target.value)
                            }
                        />
                        <div className="w-full flex gap-4">
                            <div className="w-[50%]">
                                <CustomInput
                                    label="Ano"
                                    value={ano}
                                    placeholder="Digite o ano de lançamento"
                                    type="number"
                                    onChange={
                                        (event) => setAno(event.target.value)
                                    }
                                />
                            </div>
                            <div className="w-[50%]">
                                <CustomSelect
                                    value={genero}
                                    onChange={
                                        (event) => setGenero(event.target.value)
                                    }
                                    label="Gênero"
                                    options={[
                                        "Ação", 
                                        "Comédia", 
                                        "Drama", 
                                        "Terror", 
                                        "Ficção Científica", 
                                        "Romance"
                                    ]}
                                />
                            </div>
                        </div>
                        <div className="w-[30%] items-center flex gap-2">
                            <div className="w-[70%]">
                                <CustomInput
                                    value={nota}
                                    onChange={
                                        (event) => setNota(event.target.value)
                                    }
                                    label="Nota"
                                    placeholder="0"
                                    type="number"
                                />
                            </div>
                            <p className="flex mt-8">10 / 10</p>
                        </div>
                        <div className="w-full flex flex-col">
                            <label className="text-[17px] font-bold">Sinopse</label>
                            <textarea
                                value={sinopse}
                                onChange={
                                    (event) => setSinopse(event.target.value)
                                }
                                className="
                                    w-full h-[150px] min-h-[150px] max-h-[150px]
                                 rounded-lg border border-[#ffffff1a]
                                 focus:border-purple-400 p-2 bg-[#141414] 
                                 outline-none"
                            ></textarea>
                        </div>
                        <CustomInput
                            value={banner}
                            onChange={
                                (event) => setBanner(event.target.value)
                            }
                            label="Banner"
                            placeholder="URL da imagem"
                            type="text"
                        />
                        <div className="w-full flex justify-end gap-4">
                            <button 
                                type="reset" 
                                className="w-[100px] h-[50px] rounded-md
                                 bg-[#141414] cursor-pointer
                                 hover:bg-white/10
                                border border-[#3a364c]">
                                    Cancelar
                            </button>
                            <button 
                                type="submit"
                                className="w-[130px] h-[50px] rounded-md
                                 bg-[#9A86F4] cursor-pointer font-bold
                                 hover:bg-[#9A86F4]/80"
                            >
                                    Salvar Filme
                            </button>
                        </div>       
                    </form>
                </div>
            </div>
        </PageWrapper>
    )
}