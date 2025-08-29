import { useState } from 'react'
import './App.css'
import UserInterface from './components/userInterface';

function App() {
  return (
    <>
      {/*backgrounds */}
      <div id = 'bg-outer' />
      <div id = 'bg-inner' />

      <main id = 'app-content'>
        <UserInterface />
      </main>
    </>
  );
  

}

export default App
