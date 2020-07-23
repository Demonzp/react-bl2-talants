import React from 'react';
import './talants-row.css';
import Talant from '../talant/talant';

import {Row} from 'reactstrap';

const TalantsRow = ({row, ico, upTalant, downTalant})=>{
    let key = 0;
    let isOpen = true;

    //console.log('row = ', row.row.row);

    if(row.index>=1 && row.branchLvl<row.index*5){
        isOpen = false;
    }

    const rowUpTalant = (talantName)=>{
        //console.log('talantName = ', talantName);
        upTalant({
            row: row.index,
            talant: row.row.findIndex(tal=>{return tal.name===talantName})
        });
    }

    const rowDownTalant = (talantName)=>{
        downTalant({
            row: row.index,
            talant: row.row.findIndex(tal=>{return tal.name===talantName})
        });
    }

    return (
        <Row>
            <div className="d-flex justify-content-between" style={{width:'100%',paddingLeft:'24px',paddingRight:'24px'}}>
            {row.row.map((talant)=>{
                if(talant.name){
                    key++;
                    return <Talant 
                                key={talant.name} 
                                talant={talant}
                                isOpen={isOpen}
                                ico={ico}
                                upTalant={rowUpTalant}
                                downTalant={rowDownTalant}
                            ></Talant>
                }

                return <div key={key} style={{width:'53px',height:'53px'}}></div>
            })}
            </div>
        </Row>
    );
};

export default TalantsRow;