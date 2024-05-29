export function SearchCharFunction(data, searchTerm) {
    const response = [];

    data.content.treebank.sentence.forEach((sentence) => {
        const matchingWords = sentence.word.filter((word) =>
            word._form.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (matchingWords.length > 0) {
            response.push({ sentence, matchingWords, _id: data.content.treebank._id, searchTerm });
        }
    });

    return response;
}
