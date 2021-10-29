import React, { useState, useEffect } from 'react';
import './talants-branch.css';
import TalantsRow from '../talants-row';

import {Card} from 'reactstrap';

const TalantsBranch = ({branch, ico, upTalant, downTalant})=>{
   
    const upBranchTalant = (data)=>{
       
        upTalant({
            ...data,
            branch: branch.name
        });
    }

    const downBrachTalant = (data)=>{
        downTalant({
            ...data,
            branch: branch.name
        });
    }

    return (
        <Card body className="text-center">
            {branch.data.map((row)=>{
                
                return <TalantsRow 
                            key={`${branch.name}_${row.index}`} 
                            ico={`${ico}-${branch.name}`} 
                            row={ {...row, branchLvl: branch.lvl} } 
                            upTalant={upBranchTalant}
                            downTalant={downBrachTalant}
                        ></TalantsRow>
            })}
            <div>{branch.name}: {branch.lvl}</div>
        </Card>
    );
};

export default TalantsBranch;
