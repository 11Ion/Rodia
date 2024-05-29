
import { Search } from "../Search";
document.title = 'Căutare | RoDia';
export function CorpusCuvinte(){
    return(
        <>
            <section className="w-full mt-8">
                <div className="w-full max-w-7xl mx-auto px-5">

                    <div className="w-full bg-[#26272d] rounded">
                        
                        <div className="bg-[#34353a] rounded">
                            <h1 className="text-white font-Padauk leading-5 text-xl py-4 text-center">
                                CAUTARE DE CUVINTE
                            </h1>
                        </div>
                       
                        <Search />

                    </div>
                        
                        
                </div>
            </section>
        </>
    )
}