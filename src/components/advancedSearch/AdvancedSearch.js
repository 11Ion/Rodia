import { useState } from "react";
import { ErrorMsg } from "../ErrorMsg";
import { UploadData } from "../uploadData/UploadData";
import { SearchFunction } from "../basicSearch/SearchFunction";
import { BasicSearchResult } from "../basicSearch/BasicSearchResult";
import { SearchLemmaFunction } from "./SearchLemmaFunction";
import { SearchLemmaResult } from "./SearchLemmaResult";
import { SearchPhraseFunction } from "./SearchPhraseFunction";
import { SearchPhraseResult } from "./SearchPhraseResult";
import { SearchCharFunction } from "./SearchCharFunction";
import { SearchCharResult } from "./SearchCharResult";

export function AdvancedSearch() {
    const [error, setError] = useState('');
    const [value, setValue] = useState('');
    const [option, setOption] = useState('Simple');
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async (searchFunc) => {
        try {
            const loadData = UploadData();
            const response = [];
            
            loadData.forEach(data => {
                const dataResults = searchFunc(data, value);
                    response.push(...dataResults);
            }); 

            setSearchResults(response);
            if (response.length === 0) {
                setError('Not found');
            }
        } catch (error) {
            setError('Error loading data');
        } finally {
            setLoading(false);
        }
    };

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

        switch (option) {
            case 'Simple':
                handleSearch(SearchFunction);
                break;
            case 'Lemma':
                handleSearch(SearchLemmaFunction);
                break;
            case 'Phrase':
                handleSearch(SearchPhraseFunction);
                break;
            case 'Character':
                handleSearch(SearchCharFunction);
                break;
            default:
                setError('The query type you selected is not available');
                setSearchResults([]);
                setLoading(false);
            break;
        }
    };

    const handleOptionChange = (newOption) => {
        setOption(newOption);
        setSearchResults([]);
    }; 

    return (
        <div className="w-ful mt-6 py-6 relative">
            <p className="text-white font-roboto py-1 font-light">
                Căutare avansată
            </p>
            <form 
                className="flex flex-col justify-left w-full gap-4"
                onSubmit={submitHandler}
            >
                <input
                    type="text"
                    className="w-full sm:w-[420px] h-8 pl-1 rounded outline-0 focus:ring-2 focus:ring-[#7e33ff88] font-roboto"
                    value={value}
                    placeholder="Introdu cuvântul..."
                    onChange={event => setValue(event.target.value)}
                />
                 <div className="flex flex-row gap-2 flex-wrap sm:justify-between justify-start max-w-[420px]">
                    <p className="text-white font-roboto font-light w-full">Tip de interogare:</p>
                    {['Simple', 'Lemma', 'Phrase', 'Character'].map((queryType) => (
                        <div key={queryType}>
                            <input 
                                className="hidden peer"
                                type="radio" 
                                id={`query-${queryType}`} 
                                name="typeQuery" 
                                value={queryType} 
                                checked={option === queryType} 
                                onChange={() => handleOptionChange(queryType)}
                            />
                            <label 
                                className="flex items-center justify-center w-24 h-8 text-white border rounded cursor-pointer  peer-checked:border-[#7d33ff]  hover:bg-[#34353a] hover:border-[#e0e0e0]"
                                htmlFor={`query-${queryType}`}
                            >
                                {queryType}
                                </label>
                        </div>
                    ))}
                </div>
                <button 
                    type="submit"
                    className="text-white text-roboto font-bold sm:w-[420px] w-full text-base bg-[#34353a] rounded h-8  hover:bg-[#7d33ff] hover:transition-[0.3s]"
                >
                    Caută
                </button>
              
                <ErrorMsg error={error} />
            </form>

            {loading && <p>Loading...</p>}
            
            {searchResults.length > 0 && (
                <>
                    <div className="bg-[#f8f8f8] rounded-sm s:pt-8 pt-14 pb-8 relative mt-4">
                        {option === 'Simple' && <BasicSearchResult searchResults={searchResults} />}
                        {option === 'Lemma' && <SearchLemmaResult searchResults={searchResults} />}
                        {option === 'Phrase' && <SearchPhraseResult searchResults={searchResults} />}
                        {option === 'Character' && <SearchCharResult searchResults={searchResults} />}
                    </div>
                </>
                
            )}
        </div>
    );
}