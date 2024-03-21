import { SearchTagBasic } from "./tagsSearch/SearchTagBasic";
import { SearchTagAdvanced } from "./tagsSearch/SearchTagAdvanced";
import React, { useState } from "react";

export function SearchTag(){ 
    const [open, setOpen] = useState(true);
    const [displayBasic, setDisplayBasic] = useState(true);

    const handleBasicClick = () => {
        setOpen(true);
        setDisplayBasic(true);
    };

    const handleAdvancedClick = () => {
        setOpen(true);
        setDisplayBasic(false);
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
                        <SearchTagBasic />
                    ) 
                    : (
                        <SearchTagAdvanced />
                    )}
                </div>
            )}
                 
        </div>
    )
}
