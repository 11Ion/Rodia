import { NavLink, useLocation } from "react-router-dom";
import Logo from "../img/logo.svg";
export function Nav(){
    const location = useLocation();
    return(
        <>
            <nav className="abosolute top-0 left-0 w-full h-16 flex items-center justify-between bg-[#101416] px-5">
                <NavLink
                    to="/"
                    className="active:scale-110 active:transition-[0.3s]"
                 >
                <div className="w-[114px] h-[24px]">
                    <img src={Logo} alt="Logo RoDia" width={114} height={24}/>
                </div>
                </NavLink>
                <ul className=" gap-8 hidden mx:flex">
                    <li>
                        <NavLink
                            to="/corpus-cuvinte"
                            className={
                                location.pathname === "/corpus-cuvinte" 
                                ? "text-white font-Padauk text-sm uppercase"
                                : "text-[#ffffffb6] font-Padauk text-sm uppercase"
                            }
                        >
                            Corpus de cuvinte
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/corpus-morfologie"
                            className={
                                location.pathname === "/corpus-morfologie" 
                                ? "text-white font-Padauk text-sm uppercase"
                                : "text-[#ffffffb6] font-Padauk text-sm uppercase"
                            }
                        >
                            Corpus de morfologie
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={
                                location.pathname === "/about" 
                                ? "text-white font-Padauk text-sm uppercase"
                                : "text-[#ffffffb6] font-Padauk text-sm uppercase"
                            }
                        >
                            Despre corpus
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={
                                location.pathname === "/contact" 
                                ? "text-white font-Padauk text-sm uppercase"
                                : "text-[#ffffffb6] font-Padauk text-sm uppercase"
                            }
                        >
                            Contacte
                        </NavLink>
                    </li>
                </ul>

                <div className="">
                    <NavLink
                            to="/login"
                            className="text-white font-Padauk text-base font-bold leading-none uppercase px-3 py-1 rounded bg-[#7D33FF]"
                            >
                            Logare
                    </NavLink>
                </div>
            </nav>
        </>
    )
}