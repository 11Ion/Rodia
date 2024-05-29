import { useState, useEffect } from "react";
import { DataPostag } from "../../data/DataPostag";
import { TreeDiagram, getDataTree } from "../treeDiagram/Diagram";
import { RenderPagination } from "../RenderPagination";
import closeBtn from "../../img/close.svg";

export function BasicSearchResult({ searchResults }) {

    const searchTerm = searchResults[0].searchTerm;

    const [viewDiagram, setViewDiagram] = useState(false);
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalElementsPassed, setTotalElementsPassed] = useState(0);

    const partiDeVorbire = DataPostag();
   
    const resultsPerPage = 40;
    const total = searchResults.length;
    const totalPages = Math.ceil(searchResults.length / resultsPerPage);
    
    useEffect(() => {
        const handleKeyDown = (event) => {
          if (viewDiagram === true && event.keyCode === 27) { 
            setViewDiagram(false);
          }
        };
    
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = viewDiagram ? 'hidden' : 'auto';

    
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
          document.body.style.overflow = 'auto'; 
        };
      }, [viewDiagram]);

    const getCurrentPageResults = () => {
        const startIndex = (currentPage - 1) * resultsPerPage;
        const endIndex = startIndex + resultsPerPage;
        return searchResults.slice(startIndex, endIndex);
    };  
    const handlePageChange = (page) => {
        setCurrentPage(page);
        const startIndex = (page - 1) * resultsPerPage;
        setTotalElementsPassed(startIndex);
    };
    return (
        <> 
        <div className="px-2 flex flex-col gap-2">


            <div className="absolute left-2 top-1">
                <span className="font-roboto text-sm tracking-widest font-light text-gray-600">Cuvântul căutat: </span> 
                <span className="font-roboto text-sm tracking-widest font-normal text-[#7d33ff]">{searchTerm}</span>
            </div>
                
            <div className="absolute s:right-2 left-2 s:left-auto right-auto s:top-1 top-6">
                    <span className="font-roboto text-sm tracking-widest font-light text-gray-600">Rezutate găsite: </span> 
                    <span className="font-roboto text-sm tracking-widest font-normal text-[#7d33ff]">{total}</span>
            </div>
                
            {getCurrentPageResults().map((result, index) => (
                <div key={index} className="border-[1px] px-2 py-1 border-[#7e33ff89] rounded-sm relative">

                    <p className="absolute right-2 top-1 font-roboto text-sm font-light text-gray-600">{totalElementsPassed + index + 1}</p>

                    <div className="flex s:gap-2 gap-0 s:flex-row flex-col">
                        <p className="font-roboto text-sm font-normal text-black">
                            {result.sentence._date}
                        </p>
                        <p className="font-roboto text-sm font-normal text-black">
                            <span className="font-medium">Sursa: </span>{result._id}
                        </p>
                        <p className="font-roboto text-sm font-normal text-black">
                            <span className="font-medium">Autor: </span> {result.sentence._parser || "Unknown"}
                        </p>
                    </div>

                    <p className="text-roboto font-normal text-base text-black">
                        <span className="font-medium">Propoziție: </span>
                        
                        {result.sentence.word.map((word, index) => (
                        <span key={word._id} className={result.matchingWords.some(matchingWord => matchingWord._id === word._id) 
                            ? 'text-[#7D33FF] cursor-pointer' 
                            : ''
                            }
                            >
                            {index > 0 && " "}
                            {word._form}

                        </span>
                    ))}
                    </p>
                
                    <button
                        className=" text-white font-roboto text-sm font-normal w-full px-2 py-1 rounded mt-1 mb-1 bg-[#4444459d] hover:bg-[#7D33FF] hover:transition-[0.3s]"
                        onClick={() => {
                            setViewDiagram((prevState) => !prevState);
                            setCurrentSentenceIndex(index);
                        }}
                        >
                             ...
                        </button>
                        
                
                        {viewDiagram && currentSentenceIndex === index && (
                            <>
                                    <div 
                                        className="fixed top-0 left-0 right-0 bottom-0 bg-[#00000055] z-30 backdrop-blur-md cursor-pointer"
                                        onClick={() => { 
                                            setViewDiagram(false)
                                        }}
                                    >
                                    </div>
                                    <div className="bg-[#ffffff] w-[90%] h-[90%] rounded fixed left-1/2 top-6 -translate-x-1/2 overflow-y-scroll z-40 shadow-sm shadow-white scroll-bar">
                                        <div className="flex justify-between items-center h-12 bg-[#f3f4f6]  px-2">
                                            <h2 className="font-roboto text-xl font-bold">Diagrama propoziției</h2>
                                            <button 
                                            className="cursor-pointer bg-[#e5e7eb] hover:bg-[#c7c4c8] rounded-full flex items-center justify-center w-8 h-8"
                                            onClick={() => {
                                                setViewDiagram(false)
                                            }}
                                            >
                                            <img className="w-5 h-5" src={closeBtn} alt="x"/>         
                                        </button>
                                        </div>
                                        <TreeDiagram dataTree={getDataTree(result)} />
                                        
                                        <div className="px-2 mt-3">
                                            <div className="w-full border-t-[1px] mt-2 mb-2 border-[#00000075]"></div>
                                            <p className="text-black font-roboto text-base font-normal">
                                                Detalii despre cuvantul căutat: 
                                                <span className="text-[#7D33FF]"> {searchTerm}</span>
                                            </p>
                                            {result.matchingWords.map((word, index) => (
                                                <div key={index}>
                                                    <p className="font-normal text-base font-roboto text-black">
                                                        <span className="font-medium">Formă:</span> {word._form}
                                                    </p>
                                                    <p className="font-normal text-base font-roboto text-black">
                                                        <span className="font-medium">Lemă:</span> {word._lemma}
                                                    </p>                                                    
                                                    <p className="font-normal text-base font-roboto text-black">
                                                        <span className="font-medium">Postag: </span> 
                                                            {word._postag}  {" - "}
                                                            <i>
                                                                {partiDeVorbire[word._postag]
                                                                ? partiDeVorbire[word._postag]
                                                                : word._postag}{" "}
                                                            </i>
                                                    </p>
                                                    <div className="w-full border-t-[1px] mt-2 mb-2 border-[#00000075]"></div>
                                                    <p className="text-black font-roboto text-base font-normal">
                                                        Detalii despre propoziție: 
                                                    </p>
                                                    <div className="mt-2 mb-2">
                                                        {result.sentence.word.map((word, index) => (
                                                        <span key={index}>
                                                            <p className="font-normal text-base font-roboto text-black">
                                                                <span className="font-medium">Formă:</span> {word._form}
                                                            </p>
                                                            <p className="font-normal text-base font-roboto text-black">
                                                                <span className="font-medium">Lemă:</span> {word._lemma}
                                                            </p> 
                                                            <p className="font-normal text-base font-roboto text-black pb-2">
                                                                <span className="font-medium">Postag: </span> 
                                                                    {word._postag}  {" - "}
                                                                    <i>
                                                                        {partiDeVorbire[word._postag]
                                                                        ? partiDeVorbire[word._postag]
                                                                        : word._postag}{" "}
                                                                    </i>
                                                            </p>
                                                        </span>           
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                            </div>
                                        </div>
                            </>
                        )}
                </div>
                
            ))}
                <div className="pt-8">
                    {RenderPagination(currentPage, handlePageChange, totalPages)}
                </div>
            </div>            
        </>
    );
}
