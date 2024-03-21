export function SearchPhraseFunction(data, searchTerm){
    const response = [];
    const searchPhrase = searchTerm.toLowerCase(); 

    data.treebank.sentence.forEach((sentence) => {

        const sentenceText = sentence.word.map(word => word._form.toLowerCase()).join(' ');
        
        if (sentenceText.includes(searchPhrase)) {
            response.push({ sentence, _id: data.treebank._id, searchTerm ,sentenceText });
        }
    });

    return response;
}