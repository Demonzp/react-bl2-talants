import React, { useState } from 'react';
import './App.css';

import UsePage from './use-page/use-page';
import Pages from './types/pages';

function App() {
  const [page, setPage] = useState({to:Pages.characters,data:null});

  const toPage = (p)=>{
    setPage(p);
  };

  return (
    <div className="App">
      <UsePage page={page}toPage={toPage}></UsePage>
    </div>
  );
}

export default App;