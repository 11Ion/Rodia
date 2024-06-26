import { useState } from "react";
import { ErrorMsg } from "../ErrorMsg";
import { SearchTagsAdvancedFuntion } from "./SearchTagFunction";
import { UploadData } from "../uploadData/UploadData";
import {SearchTagResultAdvanced } from "./SearchTagResult";

export function SearchTagAdvanced(){

    const [option, setOption] = useState('Adjectiv');
    const [optionAdvanced, SetOptionAdvanced] = useState('All');
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const [searchResults, setSearchResults] = useState([]); 

    const submitHandler = async (event) =>{
        event.preventDefault();
        setError('');
        setLoading(true);

        const forbiddenSymbolsRegex = /<[^>]*>|<\/[^>]*>/;

        if (!value || value.trim().length === 0) {
            setError('Please enter a valid word');
            setLoading(false);
            return;
        }
        if (value.length > 5000) {
            setError('Input length exceeds maximum allowed length');
            setLoading(false);
            return;
        }
        if (forbiddenSymbolsRegex.test(value)) {
            setError('Input contains forbidden symbols');
            setLoading(false);
            return;
        }
        try{
            const LoadData = UploadData();
            const response = []; 

            LoadData.forEach(data => {
                const dataResults = SearchTagsAdvancedFuntion(data, value, option, optionAdvanced);
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
    
    const handleOptionChange = (newOption) => {
        setOption(newOption);
    }; 
    
    const handleAdvancedOptionChange = (newOption) => {
        SetOptionAdvanced(newOption);
    }; 

    return(
        <div className="w-ful mt-6 py-6 relative">
               <p className="text-white font-roboto py-1 font-light">
                Căutare simplă
                </p>
            <form 
                className="flex flex-col gap-4 justify-between max-w-[400px] s:flex-row"
                onSubmit={submitHandler}
            >
                <div className="flex flex-row gap-2 flex-wrap justify-start max-w-[420px]">
                    <p className="text-white font-roboto py-1 font-light w-full">Selectează partea de vorbire:</p>
                    {['Adjectiv', 'Adverb', 'Adpoziție', 'Articol', 'Conjuncție', 'Determinator', 'Interjecție', 'Substantiv','Numeral', 'Pronume', 'Particulă', 'Verb', 'Reziduală', 'Abreviere'].map((tagType) => (
                        <div key={tagType}>
                            <input 
                                className="hidden peer"
                                type="radio" 
                                id={`tag-${tagType}`} 
                                name="tag" 
                                value={tagType} 
                                checked={option === tagType} 
                                onChange={() => handleOptionChange(tagType)}
                            />
                            <label 
                                htmlFor={`tag-${tagType}`}
                                className="flex items-center justify-center w-28 h-8 text-white border rounded cursor-pointer  peer-checked:border-[#7d33ff]  hover:bg-[#34353a] hover:border-[#e0e0e0]"
                                >
                                    {tagType}
                                </label>
                        </div>
                    ))}
                    <p className="text-white font-roboto py-1 font-light w-full">cuvântul se începe cu:</p>
                    {['All', 'Start-with', 'End-with', 'Exact'].map((type) => (
                        <div key={type}>
                            <input 
                                className="hidden peer"
                                type="radio" 
                                id={`advance-option-${type}`} 
                                name="advance-option" 
                                value={type} 
                                checked={optionAdvanced === type} 
                                onChange={() => handleAdvancedOptionChange(type)}
                            />
                            <label 
                                htmlFor={`advance-option-${type}`}
                                className="flex items-center justify-center w-28 h-8 text-white border rounded cursor-pointer  peer-checked:border-[#7d33ff]  hover:bg-[#34353a] hover:border-[#e0e0e0]"
                                >
                                    {type}
                                </label>
                        </div>
                    ))}
                    
                    <div className="mt-2 flex flex-wrap">
                        <p className="text-white font-roboto py-1 font-light w-full">Introdu cuvântul căutat </p>
                        <input 
                            className="w-full h-8 pl-1 rounded outline-0 focus:ring-2 focus:ring-[#7e33ff88] font-roboto"
                            type="text"
                            placeholder="Introdu cuvântul"
                            value={value}
                            onChange={event => setValue(event.target.value)}
                        />
                                <button
                        className="text-white mt-4 text-roboto font-bold  w-full text-base bg-[#34353a] rounded h-8  hover:bg-[#7d33ff] hover:transition-[0.3s]"
                        type="submit"
                    >
                        Caută
                    </button>
                    </div>
                </div>
            </form>
            <div className="mt-4">
            <ErrorMsg error={error} />
            </div>
                {loading && <p>Loading...</p>}
                {searchResults.length > 0 && (
                <>
                    <div className="bg-[#f8f8f8] rounded-sm s:pt-8 pt-14 pb-8 relative mt-4">
                        <SearchTagResultAdvanced searchResults={searchResults} />
                    </div>
                </>  
                )}

        </div>
    )
}