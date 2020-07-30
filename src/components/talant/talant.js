import React, { useEffect, useRef, useState } from 'react';
import './talant.css';

import {Badge, UncontrolledPopover, PopoverHeader, PopoverBody} from 'reactstrap';

const Talant = ({talant, isOpen, ico, upTalant, downTalant})=>{
    //const [readyToUp, setReadyToUp] = useState(false);

    const discription = useRef();
    const contTalant = useRef();
    let renderTimer = null;

    function toFix(num){
        let tNum = num.toFixed(1);
        if(tNum[tNum.length-1]==='0'){
            tNum = tNum.slice(0, tNum.length-2);
        }
        return tNum;
    }

    const reRender = ()=>{
        let mnog = talant.lvl;

        if(mnog<=0){
            mnog = 1;
        }

        let t_discript = talant.discription;

        for (const key in talant.calc) {
            const regExp = new RegExp(`\\{${key}}`,'g');
            let className = '';
            if(talant.lvl<=0){
                className = 'not-activ';
            }else if(talant.lvl>=talant.maxLvl){
                className = 'max-activ';
            }else{
                className = 'in-progress'
            }

            if(talant.hasOwnProperty('static') && talant.static.hasOwnProperty(key)){
                t_discript = t_discript.replace(regExp, `<span class="${className}">${toFix(talant.static[key]+talant.calc[key]*mnog)}</span>`);
            }else{
                t_discript = t_discript.replace(regExp, `<span class="${className}">${toFix(talant.calc[key]*mnog)}</span>`);
            }
            
        }

        const cont = discription.current;
        if(cont){
            cont.innerHTML = t_discript;
        }
    }

    const talantDownTalant=(e)=>{
        e.preventDefault();
        
        if(isOpen){
            downTalant(talant.name);
        }
    }

    const onMouseOver = ()=>{
        renderTimer = setTimeout(()=>{reRender()}, 20);
        //console.log('navelsya = ', discription.current);

    }

    useEffect(()=>{
        //console.log('обновил = ', talant);
        reRender();
        //if(talant.lvl<1){
            contTalant.current.addEventListener('mouseover', onMouseOver);
        //}
        
        return ()=>{
            contTalant.current.removeEventListener('mouseover', onMouseOver);
            if(renderTimer){
                clearTimeout(renderTimer);
            }
        };
    }, [talant, reRender]);

    return(
        <div
            id={`${ico}${talant.num}`}
            // onClick={()=>isOpen? upTalant(talant.name):null}
            // onContextMenu={(e)=>{talantDownTalant(e)}}
            style={{width:'53px',height:'53px',position:"relative"}}
            ref={contTalant}
        >
            <img 
                src={`./assets/icons/${ico.toLowerCase()}-${talant.num}.png`}
                alt="..."
                onClick={()=>isOpen? upTalant(talant.name):null}
                onContextMenu={(e)=>{talantDownTalant(e)}}
            />
            {isOpen? 
                <Badge pill style={{position: 'absolute',left:'30px',top:'38px'}}>{talant.lvl}/{talant.maxLvl}</Badge> 
                : null 
            }
            {/* <Badge pill style={{position: 'absolute',left:'30px',top:'38px'}}>{talant.lvl}/{talant.maxLvl}</Badge> */}
            <UncontrolledPopover trigger="hover" placement="right" target={`${ico}${talant.num}`} style={{fontSize:'16px'}}>
                <PopoverHeader>{talant.name}</PopoverHeader>
                <PopoverBody><div ref={discription}></div></PopoverBody>
            </UncontrolledPopover>
        </div>
    );
}

export default Talant;