import React from 'react';
import './App.css';
import { NewTitleModal } from './components/TitleModal';
import {TitlesTable} from './components/TitlesTable';

const App = () => {
  return (
    <div className="App">
      <h3>Titles</h3>
      <div style={{maxWidth: '70%', margin: 'auto'}}></div>
      <div style={{textAlign: 'right'}}>
        <NewTitleModal/>
      </div>
      <TitlesTable />
    </div>
  );
}

export default App;
