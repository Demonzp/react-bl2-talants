import TalantsBranch from "../../components/talants-branch";

import React, { useState, useEffect } from 'react';
import Talants from "../../datas/talants";

import {Container, Badge, UncontrolledPopover, PopoverBody, PopoverHeader} from 'reactstrap';

const TalantsTree = ({char, toPage})=>{

    const [lvl,setLvl] = useState(5);

    const setInit = ()=>{
        const tData = JSON.parse(JSON.stringify(Talants[char.class]));

        for (const key in tData.tree) {
            const tRows = JSON.parse(JSON.stringify(tData.tree[key]));

            const rows = tRows.map((row, index)=>{
                return {
                    lvl:0,
                    index,
                    row
                }
            });
            //console.log('rows = ', rows);
            tData.tree[key] = {
                lvl:0,
                name:key,
                data: rows
            }
            // tree.push({
            //     lvl:0,
            //     name: key,
            //     data: JSON.parse(JSON.stringify(tData[key]))
            // });
        }
        return tData;
    };

    const [treeData, setTreeData] = useState(setInit);
    //const [treeData, setTreeData] = useState(JSON.parse(JSON.stringify(Talants[char.class])));

    const [arrTree, setElTree] = useState([]);

    const upTalant = (data)=>{

        if(treeData.tree[data.branch].data[data.row].row[data.talant].lvl>=treeData.tree[data.branch].data[data.row].row[data.talant].maxLvl || lvl>=80){
            return;
        }

        const newTreeData = JSON.parse(JSON.stringify(treeData));

        newTreeData.tree[data.branch].data[data.row].row[data.talant].lvl += 1;
        newTreeData.tree[data.branch].data[data.row].lvl +=1;
        newTreeData.tree[data.branch].lvl += 1;
        setLvl(lvl+1);
        
        setTreeData(newTreeData);
    };

    const downTalant = (data)=>{
        if(treeData.tree[data.branch].data[data.row].row[data.talant].lvl<=0){
            return;
        }
        //console.log('длинна = ',treeData[data.branch].data.length);
        if(treeData.tree[data.branch].data.length-1>data.row){
            //console.log('tut');
            if(treeData.tree[data.branch].data[data.row+1].lvl>0 && treeData.tree[data.branch].data[data.row].lvl<=5){
                return;
            }
        }

        const newTreeData = JSON.parse(JSON.stringify(treeData));

        newTreeData.tree[data.branch].data[data.row].row[data.talant].lvl -= 1;
        newTreeData.tree[data.branch].data[data.row].lvl -= 1;
        newTreeData.tree[data.branch].lvl -= 1;
        setLvl(lvl-1);
        
        setTreeData(newTreeData);
    };

    // useEffect(()=>{
    //     const tree = [];
    
    //     for (const key in treeData) {
    //         tree.push({
    //             name: key,
    //             data: JSON.parse(JSON.stringify(treeData[key]))
    //         });
    //     }

    //     setElTree(tree);
    //     console.log('tree = ', tree);
    // },[char, treeData]);
    
    return (
        <Container className="themed-container">
            <div className="d-flex justify-content-center">
                <div>LEVEL {lvl} {char.class}</div>
            </div>
            <div className="d-flex justify-content-center">
                <div 
                    id='mainTalant'
                    style={{position:'relative', width:'217px'}}
                >
                    <img src={`./assets/icons/${char.class.toLowerCase()}-actionskill.png`} alt="..."/>
                    <Badge pill style={{position: 'absolute',left:'180px',top:'54px'}}>1/1</Badge>
                    <UncontrolledPopover trigger="hover" placement="right" target={'mainTalant'} style={{fontSize:'16px'}}>
                        <PopoverHeader>{treeData.mainTalant.name}</PopoverHeader>
                        <PopoverBody>{treeData.mainTalant.discription}</PopoverBody>
                    </UncontrolledPopover>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                {Object.values(treeData.tree).map(branch=>{
                    return <TalantsBranch 
                                key={branch.name} 
                                ico={char.class} 
                                branch={branch} 
                                upTalant={upTalant}
                                downTalant={downTalant}
                            ></TalantsBranch>
                })}
            </div>
        </Container>
    );
}

export default TalantsTree;