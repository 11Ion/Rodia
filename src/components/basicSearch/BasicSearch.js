import { useState } from "react";
import { ErrorMsg } from "../ErrorMsg"
import { UploadData } from "../uploadData/UploadData";
import { SearchFunction } from "./SearchFunction";
import { BasicSearchResult } from "./BasicSearchResult";

export function BasicSearch(){    

    const [error, setError] = useState();
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]); 

    const submitHandler = async (event) => {
        event.preventDefault();
        setError('');
        setLoading(true);

        const forbiddenSymbolsRegex = /<[^>]*>|<\/[^>]*>/;
        
        if (!value || value.trim().length === 0) {
            setError('Please enter a valid word');
            setLoading(false);
            setSearchResults([]); 
            return;
        }
        if (value.length > 5000) {
            setError('Input length exceeds maximum allowed length');
            setLoading(false);
            setSearchResults([]); 
            return;
        }
        if (forbiddenSymbolsRegex.test(value)) {
            setError('Input contains forbidden symbols');
            setLoading(false);
            setSearchResults([]); 
            return;
        }
        try{
            const LoadData = UploadData();
            const response = []; 
           
            LoadData.forEach(data => {
                const dataResults = SearchFunction(data, value);
                response.push(...dataResults);   
            });
            setSearchResults(response);
            if(response.length === 0){
                setError('Not found');
            }
    
         } catch(error){
            setError('Error loading data');
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
                className="flex flex-col gap-4 justify-between max-w-[400px] s:flex-row"
                onSubmit={submitHandler}
            >   
                <input
                    type="text"
                    className="w-full s:w-56 h-8 pl-1 rounded outline-0 focus:ring-2 focus:ring-[#7e33ff88] font-roboto"
                    value={value}
                    placeholder="Introdu cuvântul..."
                    onChange={event => setValue(event.target.value)}

                />
                <button 
                    type="submit"
                    className="text-white text-roboto font-bold text-base bg-[#34353a] rounded s:w-56 w-full h-8  hover:bg-[#7d33ff] hover:transition-[0.3s]"
                >
                    Caută
                </button>
                
            </form>

            <div className="w-full max-w-[500px] mt-4">
                <ErrorMsg error={error} />
            </div>
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