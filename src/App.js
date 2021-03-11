import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

import ContextComponent from './context/ContextProvider';


function App() {
  return (
    <div>
      <ContextComponent>
        <Navbar />
        <Home />
      </ContextComponent>
    </div>
  );
}

export default App;
