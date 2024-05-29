const optionMapping = {
    "Adjectiv": ["Afp", "Afp-p-n", "Afp-poy", "Afpm--n", "Afpms-n", "Afpmsrn", "Afpmsry", "Afpmsoy", "Afpmsvn", "Afpmsvy", "Afpmp-n", "Afpmpry", "Afpmpoy", "Afff--n", "Afpfsrn", "Afpfson", "Afpfsvn", "Afpfsry", "Afpfsoy", "Afpfsvy", "Afpfp-n", "Afpfpry", "Afpfpon", "Afpfpoy"],
    "Adverb": ["Rg","Rw"],
    "Adpoziție": ["Spca", "Spcg", "Spsa", "Spsd", "Spsg"],
    "Articol": ["Tdfpr", "Tdfso", "Tdfsr", "Tdmpr", "Tdmso", "Tdmsr", "Td-po", "Tf-so", "Tifso", "Tifsr", "Timso", "Timsr", "Ti-po", "Tsfp", "Tsfs", "Tsmp", "Tsms", "Ts-po"],
    "Conjuncție": ["Cccsp", "Ccssp", "Cccsz", "Ccssz", "Crssp", "Cscsp", "Csssp"],
    "Determinator": ["Dd3fpo", "Dd3fpr", "Dd3fpr---e", "Dd3fpr---o", "Dd3fso", "Dd3fso---e", "Dd3fso---o", "Dd3fsr", "Dd3fsr---e", "Dd3fsr---o", "Dd3mpo", "Dd3mpr", "Dd3mpr---e", "Dd3mpr---o", "Dd3mso", "Dd3mso---e", "Dd3mso---o", "Dd3msr", "Dd3msr---e", "Dd3msr---o", "Dd3-po---e", "Dd3-po---o", "Dh1fp", "Dh1fso", "Dh1fsr", "Dh1mp", "Dh1ms", "Dh2fp", "Dh2fso", "Dh2fsr", "Dh2mp", "Dh2ms", "Dh3fp", "Dh3fso", "Dh3fsr", "Dh3mp", "Dh3ms", "Di3fp", "Di3fpr", "Di3fso", "Di3fsr", "Di3mp", "Di3mpr", "Di3ms", "Di3msr", "Di3-po", "Di3--r", "Di3-sr", "Ds1fp-p", "Ds1fp-s", "Ds1fsop", "Ds1fsos", "Ds1fsrp", "Ds1fsrs", "Ds1mp-p", "Ds1mp-s", "Ds1ms-p", "Ds1ms-s", "Ds2fp-p", "Ds2fp-s", "Ds2fsop", "Ds2fsos", "Ds2fsrp", "Ds2fsrs", "Ds2mp-p", "Ds2mp-s", "Ds2ms-p", "Ds2ms-s", "Ds3fp-s", "Ds3fsos", "Ds3fsrs", "Ds3mp-s", "Ds3ms-s", "Dw3fpr", "Dw3fso", "Dw3fsr", "Dw3mpr", "Dw3mso", "Dw3msr", "Dw3-po", "Dw3--r", "Dz3fso", "Dz3fsr", "Dz3mpr", "Dz3mso", "Dz3msr", "Dz3-po"],
    "Interjecție": ["I"],
    "Substantiv": ["Ncfpoy", "Ncfpry", "Ncfprn", "Ncfpvy", "Ncfson", "Ncfsoy", "Ncfsrn", "Ncfsry", "Ncfsvn", "Ncfsvy", "Ncmpoy", "Ncmpry", "Ncmpvy", "Ncmsoy", "Ncmsry", "Ncmsvn", "Ncmsvy", "Np", "Npfpoy", "Npfpry", "Npfson", "Npfsoy", "Npfsrn", "Npfsry", "Npfsvn", "Npfsvy", "Npmpoy", "Npmpry", "Npmsoy", "Npmsry", "Npmsvn", "Npmsvy"],
    "Numeral": ["Mcfp-l", "Mcfpol", "Mcfprln", "Mcfprly", "Mcfsoln", "Mcfsoly", "Mcfsrln", "Mcfsrly", "Mcmp-l", "Mcms-ln", "Mcmsoly", "Mcmsrl", "Mcmsrly", "M", "Mffpoly", "Mffprln", "Mffprly", "Mffsoln", "Mffsoly", "Mffsrln", "Mffsrly", "Mlfpo", "Mlfpr", "Mlmpo", "Mlmpr", "Mmfpr-n_", "Mmfsr-n", "Mmfsr-y", "Mmmpo-y", "Mmmpr-n", "Mmmso-y", "Mmmsr-n", "Mmmsr-y", "Mofpoly", "Mofprly", "Mofs-ly", "Mofsoln", "Mofsoly", "Mofsrln", "Mofsrly", "Mo---l", "Mo---ln", "Momp-ln", "Mompoly", "Momprly", "Moms-l", "Moms-ln", "Momsoly", "Momsrly", "Mo-s-r"],
    "Pronume": ["Pd3fpo", "Pd3fpr", "Pd3fso", "Pd3fsr", "Pd3mpo", "Pd3mpr", "Pd3mso", "Pd3msr", "Pd3-po", "Ph1fp", "Ph1fso", "Ph1fsr", "PRON", "Ph1ms", "Ph2fp", "Ph2fso", "Ph2fsr", "Ph2mp", "Ph2ms", "Ph3fp", "Ph3fso", "Ph3fsr", "Ph3mp", "Ph3ms", "Pi3", "Pi3fpr", "Pi3fso", "Pi3fsr", "Pi3mpr", "Pi3mso", "Pi3msr", "Pi3-po", "Pi3--r", "Pi3-so", "Pi3-sr", "Pp1-pa--------s", "Pp1-pa--------w", "Pp1-pd--------s", "Pp1-pd--------w", "Pp1-pr", "Pp1-sa--------s", "Pp1-sa--------w", "Pp1-sd--------s", "Pp1-sd--------w", "Pp1-sr", "Pp2-pa--------s", "Pp2-pa--------w", "Pp2-pd--------s", "Pp2-pd--------w", "Pp2-pr", "Pp2-sa--------s", "Pp2-sa--------w", "Pp2-sd--------s", "Pp2-sd--------w", "Pp2-sr", "Pp3fpa--------s", "Pp3fpa--------w", "Pp3fpd--------s", "Pp3fpd--------w", "Pp3fpr", "Pp3fsa--------s", "Pp3fsa--------w", "Pp3fsd--------s", "Pp3fsd--------w", "Pp3fso", "Pp3fsr", "Pp3mpa--------s", "Pp3mpa--------w", "Pp3mpd--------s", "Pp3mpd--------w", "Pp3mpr", "Pp3-po", "Pp3msa--------s", "Pp3msa--------w", "Pp3msd--------s", "Pp3msd--------w", "Pp3msr", "Pp3mso", "Ps1fp-p", "Ps1fp-s", "Ps1fsrp", "Ps1fsrs", "Ps1mp-p", "Ps1mp-s", "Ps1ms-p", "Ps1ms-s", "Ps2fp-p", "Ps2fp-s", "Ps2fsrp", "Ps2fsrs", "Ps2mp-p", "Ps2mp-s", "Ps2ms-p", "Ps2ms-s", "Ps3fp-s", "Ps3fsrs", "Ps3mp-s", "Ps3ms-s", "Pw3fpr", "Pw3fso", "Pw3fsr", "Pw3fsry", "Pw3mpr", "Pw3mso", "Pw3msr", "Pw3msry", "Pw3-po", "Pw3-pr", "Pw3-pry", "Pw3--r", "Pw3-so", "Px3--a--------s", "Px3--a--------w", "Px3--d--------s", "Px3--d--------w", "Pz3fpr", "Pz3fso", "Pz3fsr", "Pz3mpr", "Pz3mso", "Pz3msr", "Pz3-po", "Pz3-so", "Pz3-sr"],
    "Particulă": ["Qf", "Qn","Qs","Qz"],
    "Verb": ["Vag", "Vaii1", "Vaii1p", "Vaii1s", "Vaii2p", "Vaii2s", "Vaii3p", "Vaii3s", "Vail1p", "Vail1s", "Vail2p", "Vail2s", "Vail3p", "Vail3s", "Vaip1s", "Vaip1p", "Vaip2s", "Vaip2p", "Vaip3s", "Vaip3p", "Vais1p", "Vais1s", "Vais2p", "Vais2s", "Vais3p", "Vais3s", "Vam-2p", "Vam-2s", "Van", "Vmg", "Vmii1", "Vmii1p", "Vmii1s", "Vmii2p", "Vmii2s", "Vmii3p", "Vmii3s", "Vmil1p", "Vmil1s", "Vmil2p", "Vmil2s", "Vmil3p", "Vmil3s", "Vmip1p", "Vmip1s", "Vmip2p", "Vmip2s", "Vmip3", "Vmip3p", "Vmip3s", "Vmis1p", "Vmis1s", "Vmis2p", "Vmis2s", "Vmis3p", "Vmis3s", "Vmm-2p", "Vmm-2s", "Vmmp2p", "Vmmp2s", "Vmn", "Vmp", "Vmp--pf", "Vmp--pm", "Vmp--sf", "Vmp--sm", "Vmsp1p", "Vmsp1s", "Vmsp2p", "Vmsp2s", "Vmsp3", "Vmsp3s"],
    "Reziduală": ["X"],
    "Abreviere": ["Y"],
};
const data_tags = {
    "Adjectiv" : "A",
    "Adverb" : "R",
    "Adpoziție": "S",
    "Articol" : "T",
    "Determinator": "D",
    "Interjecție" : "I",
    "Substantiv" : "N",
    "Numeral" : "M",
    "Pronume" : "P",
    "Particulă" : "Q",
    "Verb" : "V",
    "Reziduală" : "X",
    "Abreviere" : "Y",
    "Conjuncție" : "C"
};

export function SearchTagsAdvancedFuntion(data, searchWord, option, optionAdvanced) {
    const response = [];

    data.content.treebank.sentence.forEach((sentence) => {
        sentence.word.forEach((word) => {
           
            if(optionAdvanced === "All"){
                if (word._form.toLowerCase().includes(searchWord.toLowerCase())) {
                    const optionTags = optionMapping[option];
                    const optionTagF = data_tags[option];
                    if (optionTags.some(tag => word._postag.toLowerCase() === (tag.toLowerCase()))) {
                        response.push({searchWord, sentence, optionTagF, _id: data.content.treebank._id, optionAdvanced, option});
                    }
                }   
            }
            if(optionAdvanced === "Start-with"){
                if (word._form.toLowerCase().startsWith(searchWord.toLowerCase())) {
                    const optionTags = optionMapping[option];
                    const optionTagF = data_tags[option];
                    if (optionTags.some(tag => word._postag.toLowerCase() === (tag.toLowerCase()))) {
                        response.push({searchWord, sentence, optionTagF, _id: data.content.treebank._id, optionAdvanced, option});
                    }
                }   
            }
            if(optionAdvanced === "End-with"){
                if (word._form.toLowerCase().endsWith(searchWord.toLowerCase())) {
                    const optionTags = optionMapping[option];
                    const optionTagF = data_tags[option];
                    if (optionTags.some(tag => word._postag.toLowerCase() === (tag.toLowerCase()))) {
                        response.push({searchWord, sentence, optionTagF, _id: data.content.treebank._id, optionAdvanced, option});
                    }
                }   
            }
            if(optionAdvanced === "Exact"){
                if (word._form.toLowerCase() === searchWord.toLowerCase()) {
                    const optionTags = optionMapping[option];
                    const optionTagF = data_tags[option];
                    if (optionTags.some(tag => word._postag.toLowerCase() === (tag.toLowerCase()))) {
                        response.push({searchWord, sentence, optionTagF, _id: data.content.treebank._id, optionAdvanced, option});
                    }
                }   
            }
        });
    });

    return response;
}

export function SearchTagsBasicFunction(data, searchWord, option) {

    const response = []

    data.content.treebank.sentence.forEach((sentence) => {
        sentence.word.forEach((word) => {
            if (searchWord) {
                if (word._form.toLowerCase().includes(searchWord.toLowerCase())) {
                    const optionTags = optionMapping[option];
                    const optionTagF = data_tags[option];
                    if (optionTags.some(tag => word._postag.toLowerCase() === (tag.toLowerCase()))) {
                        response.push({searchWord, option, optionTagF, sentence, _id: data.content.treebank._id});
                    }
                }   
            } else {
                    const optionTags = optionMapping[option];
                    const optionTagF = data_tags[option];
                    if (optionTags.some(tag => word._postag.toLowerCase() === (tag.toLowerCase()))) {
                        response.push({optionTagF, option, sentence, _id: data.content.treebank._id});
                    }
            }
        });
    });
    return response;
}