import { useState } from "react";
import { ErrorMsg } from "../ErrorMsg"
import { UploadData } from "../uploadData/UploadData";
import { SearchFunction } from "./SearchFunction";
import { BasicSearchResult } from "./BasicSearchResult";

export function BasicSearch(){    

    const [error, setError] = useState('');
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]); 

    const submitHandler = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        const forbiddenSymbolsRegex = /<[^>]*>|<\/[^>]*>/;
        
        if (!value || value.trim().length === 0) {
            setError('Vă rugăm să introduceți un cuvânt valid');
            setLoading(false);
            setSearchResults([]); 
            return;
        }
        if (value.length > 5000) {
            setError('Lungimea de intrare depășește lungimea maximă permisă');
            setLoading(false);
            setSearchResults([]); 
            return;
        }
        if (forbiddenSymbolsRegex.test(value)) {
            setError('Intrarea conține simboluri interzise');
            setLoading(false);
            setSearchResults([]); 
            return;
        }

        try {
            const loadedData = await UploadData();
            const response = [];
            if(loadedData){
                loadedData.forEach(data => {
                    const dataResults = SearchFunction(data, value);
                    response.push(...dataResults);
                });
            }
          
            setSearchResults(response);
            if (response.length === 0) {
                setError('Nu au fost găsite rezultate');
            }
    
        } catch (error) {
            setError('Eroare la încărcarea datelor, încercați mai târziu');
            console.error('Error in submitHandler:', error);
        } finally {
            setLoading(false);
        }
    }

    return(
        <>
        <div className="w-ful mt-6 py-6 relative">
            <p className="text-white font-roboto py-1 font-light">
                Căutare simplă
            </p>
            <form 
                className="flex flex-col gap-4 justify-between max-w-[400px] "
                onSubmit={submitHandler}
            >   
                <input

                    type="text"
                    className="w-full  h-8 pl-1  placeholder:text-gray-400 placeholder:font-light focus:placeholder:text-gray-300 border sm:text-sm rounded focus:outline-none bg-transparent border-white placeholder-gray-400 text-white focus:ring-[#7d33ff] focus:border-[#7d33ff] font-roboto"
                    value={value}
                    placeholder="Introdu cuvântul..."
                    onChange={event => setValue(event.target.value)}

                />
                <button 
                    type="submit"
                    className="text-white text-roboto font-bold text-base bg-[#34353a] rounded  w-full h-8  hover:bg-[#7d33ff] hover:transition-[0.3s]"
                >
                    Caută
                </button>
                <div className="w-full">
                    <ErrorMsg error={error} />
                 </div>
            </form>

           
            {searchResults.length > 0 && (
            <>

                <div className="bg-[#f8f8f8] rounded-sm s:pt-8 pt-14 pb-8 relative">
                    {loading && <p>Loading...</p>}
                    <BasicSearchResult searchResults={searchResults} />
                </div>
            </>
            )}

        </div>
    </>
    )
    
}