import React from 'react';

import Pages from "../types/pages";
import Characters from "../pages/characters";
import TalantsTree from "../pages/talants-tree";

const UsePage = ({page, toPage})=>{
    if(page.to===Pages.characters){
        return <Characters toPage={toPage}></Characters>;
    }else if(page.to===Pages.talantsTree){
        return (<TalantsTree char={page.data} toPage={toPage}></TalantsTree>);
    }else{
        return <div>Error page Not found</div>
    }
}

export default UsePage;