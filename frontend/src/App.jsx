import { useState } from 'react'
import './App.css'
import UserInterface from './components/userInterface';
import ProjectedSavings from './components/ProjectedSavings';

function App() {
  return (
    <>
      {/*backgrounds */}
      <div id = 'bg-outer' />
      <div id = 'bg-inner' />

      <div id = 'app-content'>
        <UserInterface />
        <ProjectedSavings />
      </div>
    </>
  );
  

}

export default App
