export function SearchLemmaFunction(data, searchTerm) {
    const response = [];

    data.treebank.sentence.forEach((sentence) => {
        const matchingLemma = sentence.word.filter((word) =>
            word._lemma.toLowerCase().startsWith(searchTerm.toLowerCase())
        );

        if (matchingLemma.length > 0) {
            response.push({ sentence, matchingLemma, _id: data.treebank._id, searchTerm});
        }

    });

    return response;
}
