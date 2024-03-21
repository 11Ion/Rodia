import logoWhite from "../../img/logo_white.svg";
import headerImg2 from "../../img/header_img_2.svg";
import headerImg3 from "../../img/header_img_3.svg";
import headerImg4 from "../../img/header_img_4.svg";
import headerImg5 from "../../img/header_img_5.svg";
import headerImg6 from "../../img/header_img_6.svg";
import {Link} from "react-router-dom";
export function Home(){
    return(
        <>
            <section className="w-full h-screen bg-[#101416] pt-12">
                <div className="w-full px-5">
                    <h1 className="text-5xl text-white font-roboto font-semibold max-w-[600px]">
                        RoDia: Poarta spre trecutul și viitorul limbii române
                    </h1>
                    <div className="relative flex items-center justify-center mt-12">
                        <div className="w-36 h-80 bg-[#26272d] rounded bg-header-1 relative">
                            <span className="absolute w-full text-center top-4 text-white text-xs font-roboto font-light">
                                BAZA DE DATE
                            </span>
                        </div>
                        <div className="w-28 mt-16">
                                <img className="w-full h-full" src={headerImg2} alt="img" />
                        </div>
                        <div className="w-[600px] h-[400px] bg-[#421f8e] rounded px-4 py-4 flex flex-col justify-between relative z-10">
                            <div className="w-full flex justify-center">
                                <img className="w-[166px] h-[35px]" src={logoWhite} alt="Logo RoDia white"/>
                            </div>
                            <div className="w-full px-2 flex justify-center bg-[#7d33ff] rounded">
                                <span className="text-white font-roboto font-light text-sm py-4">CORPUS</span>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="bg-[#7d33ff] rounded w-36 h-32 flex items-center justify-center">
                                    <span className="text-white font-roboto font-light text-sm">CERERE</span>
                                </div>
                                <div className="w-16">
                                    <img src={headerImg3} alt="Img"/>
                                </div>
                                <div className="bg-[#7d33ff] rounded w-36 h-32 flex items-center justify-center">
                                    <span className="text-white font-roboto font-light text-sm">STRUCTURARE</span>
                                </div>
                                <div className="w-16">
                                    <img src={headerImg4} alt="Img"/>
                                </div>
                                <div className="bg-[#7d33ff] rounded w-36 h-32 flex items-center justify-center">
                                    <span className="text-white font-roboto font-light text-sm">TRIMITERE</span>
                                </div>
                            </div>
                            <div className="w-full px-2 flex justify-center bg-[#7d33ff] rounded">
                                <span className="text-white font-roboto font-light text-sm py-4">RODIA</span>
                            </div>
                        </div>
                        <div className="w-28 mt-16">
                                <img className="w-full h-full" src={headerImg5} alt="img" />
                        </div>
                        <div className="w-28 h-80 bg-[#26272d] rounded flex items-center justify-center">
                            <div className="flex items-center flex-col gap-2">
                                <span className="w-full text-center text-white text-xs font-roboto font-light">
                                    RĂRSPUNS 
                                </span>
                                <div className="w-6 h-6">
                                    <img className="w-full h-full" src={headerImg6} alt="img" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-end justify-start mt-8">
                        <div className="flex flex-col gap-3">
                            <p className="text-white font-roboto font-light text-sm max-w-56">RoDia este un corpus care se bazeaza pe  cercetarea și înțelegerea limbii române.</p>
                            <Link
                                to="/corpus"
                                className="text-white font-roboto text-base text-center font-normal leading-none uppercase px-3 py-2 rounded bg-[#7D33FF] hover:bg-white hover:text-black hover:transition-all"
                            >
                                EXPLOREAZĂ
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
