import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../img/logo.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";


export function Nav(){


    const naviget = useNavigate();

    function logoutSubmit(){
        localStorage.setItem("login", "");
        naviget("/");
    }
    const isLoggedIn = localStorage.getItem("login") === "true";

    const location = useLocation();
    const DesktopItems = () =>{
        return(
            <>
                <ul className="gap-8 hidden mx:flex">
                        <li>
                            <NavLink
                                to="/corpus-cuvinte"
                                className={
                                    location.pathname === "/corpus-cuvinte" 
                                    ? "text-white font-Padauk text-sm uppercase"
                                    : "text-[#ffffffb6] font-Padauk text-sm uppercase"
                                }
                            >
                                Cautare de cuvinte
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
                                Cautare de morfologie
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
            </>
        )
    }

    const MobileItems = () =>{
        return(
            <>
            <ul className="gap-2 mx:hidden absolute top-16 flex flex-col items-start px-5 py-2 bg-gradient-to-t from-[#1c2225] to-[#101416] w-full shadow-lg">
                    <li>
                            <NavLink
                                to="/corpus-cuvinte"
                                className={
                                    location.pathname === "/corpus-cuvinte" 
                                    ? "text-white font-Padauk text-base uppercase"
                                    : "text-[#ffffffb6] font-Padauk text-base uppercase"
                                }
                            >
                                Cautare de cuvinte
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/corpus-morfologie"
                                className={
                                    location.pathname === "/corpus-morfologie" 
                                    ? "text-white font-Padauk text-base uppercase"
                                    : "text-[#ffffffb6] font-Padauk text-base uppercase"
                                }
                            >
                                Cautare de morfologie
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={
                                    location.pathname === "/about" 
                                    ? "text-white font-Padauk text-base uppercase"
                                    : "text-[#ffffffb6] font-Padauk text-base uppercase"
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
                                    ? "text-white font-Padauk text-base uppercase"
                                    : "text-[#ffffffb6] font-Padauk text-base uppercase"
                                }
                            >
                                Contacte
                            </NavLink>
                        </li>
                    </ul>
            </>
        )
    }
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
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
                <DesktopItems />
                <div className="flex gap-3 items-center">
                    <div>
                    {isLoggedIn ? (
                <button
                className="text-white font-Padauk text-base font-bold leading-none flex items-center  px-3 h-8 rounded bg-[#7D33FF]"
                onClick={logoutSubmit}
                >
                    Deconectare
                </button>
            ) : (
                <NavLink
                    to="/login"
                    className="text-white font-Padauk text-base font-bold leading-none flex items-center  px-3 h-8 rounded bg-[#7D33FF]"
                >
                    Conectare
                </NavLink>
            )}
                    </div>
                    <div>
                        <button className="mx:hidden block" onClick={toggleNavbar}>
                            {isOpen ? (
                                <X className="w-[36px] h-[36px] text-white" />
                            ) : (
                                <Menu className="w-[36px] h-[36px] text-white" />
                            )}
                        </button>
                    </div>
                   

                </div>
            </nav>
            {isOpen && <MobileItems />}
        </>
    )
}