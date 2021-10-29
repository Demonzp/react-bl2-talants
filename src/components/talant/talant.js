import React, { useEffect, useRef, useState } from 'react';
import './talant.css';

import {Badge, PopoverHeader, PopoverBody} from 'reactstrap';

const Talant = ({talant, isOpen, ico, upTalant, downTalant, side})=>{

    const discription = useRef();
    const contTalant = useRef();
    const popover = useRef();

    function toFix(num, key){
        let rounding = 1;
        let length = 2;

        if(talant.hasOwnProperty('rounding') && talant.rounding.hasOwnProperty(key)){
            rounding = talant.rounding[key];
            length = 1;
        }

        let tNum = num.toFixed(rounding);

        if(tNum[tNum.length-1]==='0'){
            tNum = tNum.slice(0, tNum.length-length);
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
                t_discript = t_discript.replace(regExp, `<span class="${className}">${toFix(talant.static[key]+talant.calc[key]*mnog, key)}</span>`);
            }else if(talant.hasOwnProperty('start') && talant.start.hasOwnProperty(key)){
                if(talant.lvl>1){
                    mnog-=1;
                    t_discript = t_discript.replace(regExp, `<span class="${className}">${toFix(talant.start[key]+talant.calc[key]*mnog, key)}</span>`);
                }else{
                    t_discript = t_discript.replace(regExp, `<span class="${className}">${toFix(talant.start[key], key)}</span>`);
                }
            }else{
                t_discript = t_discript.replace(regExp, `<span class="${className}">${toFix(talant.calc[key]*mnog, key)}</span>`);
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

    const popShow = ()=>{
        popover.current.hidden = false;
        
        if(side==='top'){
            popover.current.style.top = `-${popover.current.getBoundingClientRect().height-50}px`;
        }
    }

    const popHide = ()=>{
        popover.current.hidden = true;
    }

    const [popoverClass, setPopoverClass] = useState('');

    useEffect(()=>{
        //reRender();

        let className = 'popover';

        if(side==='left'){
            className+=' pop-left';
        }

        setPopoverClass(className);
        popover.current.hidden = true;
    }, []);

    useEffect(()=>{
        reRender();

        contTalant.current.addEventListener('mouseover', popShow);
        contTalant.current.addEventListener('mouseout', popHide);

        
        return ()=>{
            contTalant.current.removeEventListener('mouseover', popShow);
            contTalant.current.removeEventListener('mouseout', popHide);
        };
    }, [talant, reRender]);

    return(
        <div
            id={`${ico}${talant.num}`}
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
        
            <div 
                className={popoverClass}
                ref={popover}
                
            >
                <PopoverHeader>{talant.name}</PopoverHeader>
                <PopoverBody><div ref={discription}></div></PopoverBody>
            </div>
            
        </div>
    );
}

export default Talant;
