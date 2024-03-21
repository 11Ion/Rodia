import { useState } from "react";
import {BasicSearch} from "./basicSearch/BasicSearch"
import { AdvancedSearch } from "./advancedSearch/AdvancedSearch";
export function Search(){

    const [open, setOpen] = useState(true)
    const [displayBasic, SetDisplayBasic] = useState(true)

    const handleBasicClick = () => {
        setOpen(true);
        SetDisplayBasic(true);
    };

    const handleAdvancedClick = () => {
        setOpen(true);
        SetDisplayBasic(false);
    };


    return(
        <div className="w-full mt-7 px-4">

            <div className="flex gap-4">
                <button 
                    className={`tracking-widest px-4 py-2 cursor-pointer text-base font-normal font-roboto rounded text-white ${displayBasic ? 'bg-[#7d33ff]' : 'bg-[#34353a]'}`}
                    onClick={handleBasicClick}
                >
                    Bază
                </button>
                <button
                    className={`tracking-widest px-4 py-2 cursor-pointer text-base font-normal font-roboto rounded text-white ${!displayBasic ? 'bg-[#7d33ff]' : 'bg-[#34353a]'}`}
                    onClick={handleAdvancedClick}
                >
                    Avansat
                </button>
            </div>

            {open && (
                <div>
                    {displayBasic ? (
                        <BasicSearch />
                    ) : (
                        <AdvancedSearch />
                    )}
                </div>
            )}
        </div>
    )
}