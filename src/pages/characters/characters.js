import React from 'react';
import { characters } from '../../datas/characters';
import Pages from '../../types/pages';

import {Button} from 'reactstrap';

const Characters = ({toPage})=>{

    return (
        <div className="d-flex justify-content-center">
            {characters.map(char=>{
                return(
                    <Button 
                        color="link"
                        key={char.name}
                        onClick={()=>toPage({to:Pages.talantsTree,data:char})}
                    >
                        <div>{char.name}</div>
                        <div>{char.class}</div>
                    </Button>
                );
            })}
        </div>
    );
};

export default Characters;