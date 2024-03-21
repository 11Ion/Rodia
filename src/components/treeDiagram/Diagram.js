import Tree from "react-d3-tree";
import React, { useState, useEffect } from "react";


export function TreeDiagram({ dataTree }) {

    const [centerXvalue, setCenterXvalue] = useState(0);

    
    useEffect(() => {
        const treeElement = document.getElementById("tree");
        if (treeElement) {
            const centerX = treeElement.offsetWidth / 2;
            setCenterXvalue(centerX);
        }
    }, []);

    return (
        <div id="tree" className="w-full h-[300px] bg-[#dadada] rounded-sm">
                <Tree 
                    data={dataTree} 
                    orientation="diagonal" 
                    translate={{ x: centerXvalue, y: 35 }}
                    scale={1}
                    nodeSize={{ x: 70, y: 100 }}
                />
            </div>       
    );
}

export function getDataTree(result) {
    return {
        name: "Propoziție",
        children: result.sentence.word.map((word, wordIndex) => {
            const cleanPostag = word._postag.replace(/-+.*$/, ''); 
            return {
                name: word._form,
                children: [
                    {
                      name: cleanPostag
                    }
                  ]
            };
        }),
    };
}
