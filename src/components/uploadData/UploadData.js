import jsonData1 from "../../data/CHAT_1.json"
import jsonData2 from "../../data/CHAT_2.json"
import jsonData3 from "../../data/CONT_1984_orwel.json"
import jsonData4 from "../../data/CONT_aquis.json"

export function UploadData() {
    try {
        const allData = [jsonData1, jsonData2, jsonData3, jsonData4];  
        // console.log("data luaded");
        return allData;
    } catch (error) {
        throw new Error('Error loading data');
    }
}
